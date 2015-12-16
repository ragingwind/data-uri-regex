import test from 'ava';
import regex from './';

var png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
var html = 'data:text/html;charset=utf-8,<!DOCTYPE%20html><html%20lang%3D"en"><head><title>Embedded%20Window<%2Ftitle><%2Fhead><body><h1>42<%2Fh1><%2Fbody><%2Fhtml>';
var svg = 'data:image/svg+xml;base64,PD94bWwgdmVyzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo=';

test('Regexp returns parts of data-uri for image/png', t => {
	t.ok(png.match(regex()));
	t.ok(regex().test(png));
	t.is(regex().exec(png)[1], 'data:');
	t.is(regex().exec(png)[2], 'image/png');
	t.is(regex().exec(png)[3], 'base64');
	t.is(regex().exec(png)[4].slice(0, 3), 'iVB');

	t.end();
});

test('Regexp returns parts of data-uri for html', t => {
	t.ok(html.match(regex()));
	t.ok(regex().test(html));
	t.is(regex().exec(html)[1], 'data:');
	t.is(regex().exec(html)[2], 'text/html');
	t.is(regex().exec(html)[3], 'charset=utf-8');
	t.is(regex().exec(html)[4].slice(0, 3), '<!D');

	t.end();
});

test('Regexp returns parts of data-uri for svg', t => {
	t.ok(svg.match(regex()));
	t.ok(regex().test(svg));
	t.is(regex().exec(svg)[1], 'data:');
	t.is(regex().exec(svg)[2], 'image/svg+xml');
	t.is(regex().exec(svg)[3], 'base64');
	t.is(regex().exec(svg)[4].slice(0, 3), 'PD9');

	t.end();
});
