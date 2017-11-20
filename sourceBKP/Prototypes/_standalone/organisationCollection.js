const ORGANISATIE = require('./../../_models/_global/organisatie.js')(true)
module.exports = {
  type: 'Page.Collection',
  model: ORGANISATIE,
  collection: {
    switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
  }
}
