'use strict';

module.exports = {
  processors: { '.js': require('./processor') },
  environments: require('./env')
};
