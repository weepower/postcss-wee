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