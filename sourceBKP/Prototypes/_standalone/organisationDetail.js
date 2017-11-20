const ORGANISATIE = require('./../../_models/_global/organisatie.js')(true)
module.exports = {
  type: 'Page.Detail',
  model: ORGANISATIE,
  detail: {
    tabs: [
      {
        title: 'Algemeen',
        active: true
      }
    ],
    // actions: [
    //   ['Inschrijven', 'arrowRight', 'primary']
    // ],
  }
}
