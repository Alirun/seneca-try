const Express = require('express')

const { TWEETS, API_SERVER } = require('../../helpers/roles')
const { FETCH, LOG } = require('../../helpers/commands')
const { build } = require('../../helpers/actions')

const app = Express()

// actions
const fetchTweets = build(TWEETS, FETCH)
const logApiServer = build(API_SERVER, LOG)

module.exports = function() {
  app.get('/tweets', (req, res, next) => {
    this.act(fetchTweets, (err, reply) => {
      res.send(reply)
    })
  })

  this.add('init:api-server', function (msg, respond) {
    this.act({message: 'Initializing Api service', ...logApiServer})
    respond()
  })

  app.listen(3000, () => {
    console.log('Express is listening on 3000')
  })
}