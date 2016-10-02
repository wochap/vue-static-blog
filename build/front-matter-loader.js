'use strict';

var frontMatter = require('front-matter')

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable()
  }

  var meta = frontMatter(source)

  return 'module.exports = ' + JSON.stringify(meta.attributes)
}
