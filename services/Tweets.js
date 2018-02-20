const { TWEETS } = require('../helpers/roles')
const { FETCH } = require('../helpers/commands')

module.exports = function() {
  this.add({
    role: TWEETS,
    cmd: FETCH
  }, function(msg, reply) {
    const mockTweets = [
      {
        id: 1,
        text: 'Hello, I just added this tweet'
      }, {
        id: 2,
        text: 'That\'s gonna be AMAZING!!!'
      }
    ]

    reply(null, mockTweets)
  })

  this.add('init:Tweets', function (msg, respond) {
    console.log('Initializing Tweets service')
    respond()
  })
}