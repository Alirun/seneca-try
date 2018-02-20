const seneca = require('seneca')()

const Tweets = require('./services/Tweets')
const Api = require('./services/api-server/index')

seneca.use(Tweets)
seneca.use(Api)
