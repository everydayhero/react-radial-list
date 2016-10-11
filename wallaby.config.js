module.exports = wallaby => ({
  files: [
    'source/**/*.js',
    { pattern: 'source/**/__tests__/*.js', ignore: true }
  ],

  tests: [
    'source/**/__tests__/*.js'
  ],

  testFramework: 'ava',

  compilers: {
    '**/*.js': wallaby.compilers.babel({
      presets: ['es2015', 'stage-0', 'react'],
      plugins: [
        require('babel-plugin-espower/create')(
          require('babel-core'), {
            embedAst: true,
            patterns: require('ava/lib/enhance-assert').PATTERNS
          }
        )
      ]
    })
  },

  env: {
    type: 'node',
    runner: 'node'
  },

  bootstrap: () => {
    const jsdom = require('jsdom')

    const dom = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>')

    global.document = dom
    global.window = dom.defaultView

    propagateToGlobal(global.window)

    function propagateToGlobal (window) {
      for (let key in window) {
        if (!window.hasOwnProperty(key)) { continue }
        if (key in global) { continue }

        global[key] = window[key]
      }
    }

    require('babel-polyfill')
  }
})
