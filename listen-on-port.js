// NPM dependencies
const browserSync = require('browser-sync')

// Local dependencies
const server = require('./server.js')
const config = require('./app/config.js')
const utils = require('./lib/utils.js')

// Set up configuration variables
const useBrowserSync = config.useBrowserSync.toLowerCase()
const env = (process.env.NODE_ENV || 'development').toLowerCase()
const envPort = process.env.PORT

function listen (port) {
  console.log(
    'Listening on port ' + port + '   url: http://localhost:' + port
  )
  if (env === 'production' || useBrowserSync === 'false') {
    server.listen(port)
  } else {
    server.listen(port - 50, function () {
      browserSync({
        proxy: 'localhost:' + (port - 50),
        port: port,
        ui: false,
        files: ['public/**/*.*', 'app/views/**/*.*'],
        ghostmode: false,
        open: false,
        notify: false,
        logLevel: 'error'
      })
    })
  }
}

if (!envPort) {
  utils.findAvailablePort(server, function (port) {
    listen(port)
  })
} else {
  listen(envPort)
}
