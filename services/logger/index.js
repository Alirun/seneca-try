const bunyan = require('bunyan')

const { TWEETS, API_SERVER } = require('../../helpers/roles')
const { FETCH, LOG } = require('../../helpers/commands')
const { build } = require('../../helpers/actions')

const createLogger = (name) => bunyan.createLogger({ name })

// Loggers
const apiServerLogger = createLogger('APIServer')
const tweetsLogger = createLogger('Tweets')
const loggerLogger = createLogger('Logger')

// Actions
const fetchTweets = build(TWEETS, FETCH)
const logApiServer = build(API_SERVER, LOG)

module.exports = function() {
  // Log `tweets` commands
  this.wrap(fetchTweets, function(msg, reply) {
    tweetsLogger.info('Tweets command received', msg.cmd)
    this.prior(msg, reply)
  })

  // Log `apiServer` commands
  this.wrap(logApiServer, function(msg, reply) {
    apiServerLogger.info(msg.message)
    this.prior(msg, reply)
  })

  this.add('init:logger', function (msg, respond) {
    loggerLogger.info('Initializing Logger service')
    respond()
  })
}