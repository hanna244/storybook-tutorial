
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./storybook-tutorial2.cjs.production.min.js')
} else {
  module.exports = require('./storybook-tutorial2.cjs.development.js')
}
