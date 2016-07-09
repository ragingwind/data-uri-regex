import test from 'ava';
import regex from './';

const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
const html = 'data:text/html;charset=utf-8,<!DOCTYPE%20html><html%20lang%3D"en"><head><title>Embedded%20Window<%2Ftitle><%2Fhead><body><h1>42<%2Fh1><%2Fbody><%2Fhtml>';
const svg = 'data:image/svg+xml;base64,PD94bWwgdmVyzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo=';

test('Regexp returns parts of data-uri for image/png', t => {
	t.truthy(png.match(regex()));
	t.truthy(regex().test(png));
	t.is(regex().exec(png)[1], 'data:');
	t.is(regex().exec(png)[2], 'image/png');
	t.is(regex().exec(png)[3], 'base64');
	t.is(regex().exec(png)[4].slice(0, 3), 'iVB');
});

test('Regexp returns parts of data-uri for html', t => {
	t.truthy(html.match(regex()));
	t.truthy(regex().test(html));
	t.is(regex().exec(html)[1], 'data:');
	t.is(regex().exec(html)[2], 'text/html');
	t.is(regex().exec(html)[3], 'charset=utf-8');
	t.is(regex().exec(html)[4].slice(0, 3), '<!D');
});

test('Regexp returns parts of data-uri for svg', t => {
	t.truthy(svg.match(regex()));
	t.truthy(regex().test(svg));
	t.is(regex().exec(svg)[1], 'data:');
	t.is(regex().exec(svg)[2], 'image/svg+xml');
	t.is(regex().exec(svg)[3], 'base64');
	t.is(regex().exec(svg)[4].slice(0, 3), 'PD9');
});
