'use strict';

const fileDefinitions = new Map();

const definitionTest = /\b(?:set|subject)\s*\(\s*(['"`][^\s,]+)[\s,]/g;
const messageTest = /^'(.*)'/;

module.exports = {
  preprocess: function(text, filename) {
    let match;
    const definitions = new Set();
    while ((match = definitionTest.exec(text))) {
      const capture = match[1];
      if (capture[0] === capture[capture.length - 1]) {
        definitions.add(capture.slice(1, -1));
      }
    }
    fileDefinitions.set(filename, definitions);

    return [text];
  },
  postprocess: (messages, filename) => {
    const definitions = fileDefinitions.get(filename) || [];
    return messages[0].filter(message => {
      if (message.ruleId !== 'no-undef') return true;

      const identifierMatch = messageTest.exec(message.message);
      if (!identifierMatch) return true;

      return !definitions.has(identifierMatch[1]);
    });
  }
};
