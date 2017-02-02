const parse = require('../lib/parse');
const stringify = require('../lib/stringify');
const cases = require('postcss-parser-tests');
const expect = require('chai').expect;

describe('stringify', () => {
	cases.each((name, css, json) => {
		if (name === 'bom.css') {
			console.log();
			return;
		}

		it('should stringify ' + name, () => {
			let result = '';
			let root = parse(css);

			stringify(root, i => {
				result += i;
			});

			expect(result).to.equal(css);
		});
	});
});