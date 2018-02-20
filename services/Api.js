const Express = require('express')

const { TWEETS } = require('../helpers/roles')
const { FETCH } = require('../helpers/commands')

const app = Express()

module.exports = function() {
  app.get('/tweets', (req, res, next) => {
    this.act({ role: TWEETS, cmd: FETCH }, (err, reply) => {
      res.send(reply)
    })
  })

  this.add('init:Api', function (msg, respond) {
    console.log('Initializing Api service')
    respond()
  })

  app.listen(3000, () => {
    console.log('Express is listening on 3000')
  })
}