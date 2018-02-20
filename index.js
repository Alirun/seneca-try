const seneca = require('seneca')()

const Tweets = require('./services/Tweets')
const Api = require('./services/Api')

seneca.use(Tweets)
seneca.use(Api)
