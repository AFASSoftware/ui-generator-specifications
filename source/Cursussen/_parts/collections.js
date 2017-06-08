// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../../_models/_global/factuurregel.js')
const FACTUUR = require('./../../_models/_global/factuur.js')
const RUIMTE = require('./../../_models/_global/ruimte.js')

// IMPORT LOCAL MODELS
const AANBOD = require('./../../_models/Cursussen/aanbod.js')
const SESSIE = require('./../../_models/Cursussen/sessie.js')
const CURSIST = require('./../../_models/Cursussen/deelnemer.js')
const DOCENT = require('./../../_models/Cursussen/docent.js')
const INGEPLAND = require('./../../_models/Cursussen/ingepland.js')

module.exports = {
  type: 'collection',
  model: INGEPLAND,
  title: INGEPLAND.titlePlural,
  data: INGEPLAND.data,
  include: ['Cursus', 'Onderwerp', 'Datum', 'Bezetting'],
  overrides: {
    type: 'inline'
  },
  switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie']
}

// module.exports = {
//   type: 'collection',
//   model: AANBOD,
//   title: AANBOD.titlePlural,
//   data: AANBOD.data,
//   include: ['Naam', 'Onderwerp'],
//   overrides: {
//     type: 'inline'
//   }
// }
//
// module.exports = {
//   type: 'collection',
//   model: CURSIST,
//   title: ' ',//'Wie wil je inschrijven?',
//   data: CURSIST.data,
//   overrides: {
//     type: 'inline'
//   },
//   isSelectable: true, // TODO
//   include: ['Naam', 'Organisatie', 'Geslacht', 'Gevolgde cursussen']
// }
