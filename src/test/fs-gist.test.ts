import {FSGistElement} from '../fs-gist.js';
//import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('fs-gist', () => {
  test('is defined', () => {
    const el = document.createElement('fs-gist');
    assert.instanceOf(el, FSGistElement);
  });
});
