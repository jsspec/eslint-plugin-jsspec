'use strict';

const lazyEvaluate = {
  set: false,
  subject: true, // assignable inside an example block
};

const contextual = {
  context: false,
  describe: false,
  xcontext: false,
  xdescribe: false,
};

const execution = {
  it: false,
  xit: false,
  pend: false,
  expect: false,
  // is_expected: false
};

const executionHook = {
  beforeEach: false,
  afterEach: false,
  before: false,
  after: false,
};

const shared = {
  sharedExamples: false,
  itBehavesLike: false,
  sharedContext: false,
  includeContext: false,
};

module.exports = {
  jsspec: {
    globals: Object.assign({}, lazyEvaluate, contextual, execution, executionHook, shared)
  }
};
