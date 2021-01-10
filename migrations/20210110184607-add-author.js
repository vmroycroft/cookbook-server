module.exports = {
  up(db) {
    return db.collection('recipes').updateMany({}, {$set: {author: 'Vanessa'}})
  },

  down(db) {
    return db.collection('recipes').updateMany({}, {$unset: {author: ''}})
  }
};
