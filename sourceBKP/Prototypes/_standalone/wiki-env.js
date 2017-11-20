const ORGANISATIE = require('./../../_models/_global/organisatie.js')(true)
const PERSOON = require('./../../_models/_global/persoon.js')()
const WIKIPAGINA = require('./wiki-WIKIPAGINA.js')()
// const PROJECT = require('./wiki-PROJECT.js')()
const CONCEPT = require('./wiki-CONCEPT.js')(true)

module.exports = {
  type: 'Page.Detail',
  model: CONCEPT,
  detail: {},
  pages: [
    {
      type: 'Page.Detail',
      model: CONCEPT,
      detail: {
        actions: [
          ['Schrijf je in', 'arrowRight', 'primary']
        ],
        exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving'],
        excludeTabs: ['Factuurregels']
      }
    },
  ]
}
