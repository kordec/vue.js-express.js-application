const {
  sequelize,
  Song,
  User,
  Bookmark
} = require('../src/models')

const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const Promise = require('bluebird')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all([
      songs.map(song => {
         Song.create(song)
      }), 
      users.map(user => {
         User.create(user)
      })
    ])
    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })