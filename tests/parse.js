const parse = require('../lib/parse');
const cases = require('postcss-parser-tests');
const expect = require('chai').expect;

describe('parse', () => {
	cases.each((name, css, json) => {
		it('should parse ' + name, () => {
			let parsed = cases.jsonify(parse(css, { from: name }));

			expect(parsed).to.equal(json);
		});
	});
});

describe('parse mixins', () => {
	it('should parse mixins', () => {
		let root = parse('a { custom(); }'),
			node = root.first.first;

		expect(node.type).to.equal('mixin');
		expect(node.name).to.equal('custom');
	});

	it('should parse comma separated values as arguments', () => {
		let root = parse(".block { mixin(1, bold, url('test.png'), #000, rgb(0, 0, 0)); }"),
			node = root.first.first;

		expect(JSON.stringify(node.arguments)).to.equal('["1","bold","url(\'test.png\')","#000","rgb(0, 0, 0)"]');
	});

	it('should parse key: value pairs as arguments', () => {
		let root = parse(".block { mixin(padding: 1, weight: bold, background: url('test.png')); }"),
			node = root.first.first;

		expect(JSON.stringify(node.arguments[0])).to.equal('{"padding":"1","weight":"bold","background":"url(\'test.png\')"}');
	});
});