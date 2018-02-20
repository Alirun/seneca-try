const seneca = require('seneca')()

const TweetsService = require('./services/tweets')
const ApiServerService = require('./services/api-server')
const LoggerService = require('./services/logger')

seneca.use(TweetsService)
seneca.use(ApiServerService)
seneca.use(LoggerService)
