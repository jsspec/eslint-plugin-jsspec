const lazyEvaluate = {
  set: false,
  subject: false
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
  is_expected: false
};

const executionHook = {
  beforeEach: false,
  afterEach: false,
  before: false,
  after: false
};

const shared = {
  sharedExample: false,
  itBehavesLike: false
};

module.exports = {
  jsspec: {
    globals: Object.assign({}, lazyEvaluate, contextual, execution, executionHook, shared)
  }
};