// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../../../models/factuurregel.js')
const FACTUUR = require('./../../../models/factuur.js')
const RUIMTE = require('./../../../models/ruimte.js')

// IMPORT LOCAL MODELS
const AANBOD = require('./../models/cursus-aanbod.js')
const SESSIE = require('./../models/cursus-sessie.js')
const CURSIST = require('./../models/cursus-deelnemer.js')
const DOCENT = require('./../models/cursus-docent.js')
const INGEPLAND = require('./../models/cursus-ingepland.js')

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
