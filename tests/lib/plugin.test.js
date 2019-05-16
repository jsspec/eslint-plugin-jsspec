'use strict';

const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
  baseConfig: {
    extends: 'eslint:recommended',
    rules: {
      'no-unexpected-multiline': false,
      'no-irregular-whitespace': false
    }
  },
  envs: ['es6', 'node', 'jsspec/jsspec'],
  configFile: null,
  useEslintrc: false
});

cli.addPlugin('eslint-plugin-jsspec', require('../../lib/index'));

context('some variables unset', () => {
  let report = cli.executeOnText(`
it('does', () => {
  expect(thing).to.be(5);
  expect(other).to.be.negative;
})
`, 'a.js');
  it('keeps errors', () => expect(report.results[0].messages).to.have.length(2));
});


context('a legit undef exists', () => {
  let report = cli.executeOnText(`
set('thing', 5);
set("other", 6);
it('does', () => {
  expect(unRelatedUndef).to.be(4);
  expect(thing).to.be(5);
  expect(other).to.be.negative;
})
`, 'a.js');
  it('passes through', () => expect(report.results[0].messages).to.have.length(1));
});

context('an "other" error exists', () => {
  let report = cli.executeOnText(`
set('thing', 5);
set("other", 6);
it('does', () => {
  ;
  expect(thing).to.be(5);
  expect(other).to.be.negative;
})
`, 'a.js');
  it('passes through', () => expect(report.results[0].messages).to.have.length(1));
});

context('all variables "set"', () => {
  let report = cli.executeOnText(`
set('thing', 5);
set("other", 6);
it('does', () => {
  expect(thing).to.be(5);
  expect(other).to.be.negative;
})
`, 'a.js');
  it('clears errors', () => expect(report.results[0].messages).to.be.empty);
});

context('all variables "set" with odd space usage', () => {
  let report = cli.executeOnText(`
subject
( \t'thing'\v  , 5);
set (\r"other"\n, 6);
it('does', () => {
  expect(thing).to.be(5);
  expect(other).to.be.negative;
})
`, 'a.js');

  it('clears errors', () => expect(report.results[0].messages).to.be.empty);
});

context('one variable not "set"', () => {
  let report = cli.executeOnText(`
subject
( \t'thing'\v  , 5);
it('does', () => {
  expect(thing).to.be(5);
  expect(other).to.be.negative;
})
`, 'a.js');

  it('allows 1 error', () => expect(report.results[0].messages).to.have.length(1));
});

context('with similar variables used', () => {
  let report = cli.executeOnText(`
subject
( \t'thing'\v  , 5);
set (\r"other"\n, 6);
it('does', () => {
  expect(thingS).to.be(5);
  expect(otHer).to.be.negative;
})
`, 'a.js');

  it('allows errors', () => expect(report.results[0].messages).to.have.length(2));
});
