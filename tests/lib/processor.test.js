'use strict';

const { postprocess } = require('../../lib/processor');

describe('postprocess error handling', () => {
  context('preprocess failed', () => {
    it('returns an empty array', () => {
      expect(postprocess([[]], "never/processed")).to.be.an('array').that.is.empty;
    });
  });
  context('the error message is malformed', () => {
    it('passes through', () => {
      expect(postprocess([[{
        ruleId: 'no-undef',
        message: 'not the expected message structure'
      }]], "not/related")).to.be.an('array').with.length(1);
    })
  })
});
