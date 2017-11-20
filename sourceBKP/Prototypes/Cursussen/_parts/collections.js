// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../../../_models/_global/factuurregel.js')(true)
const FACTUUR = require('./../../../_models/_global/factuur.js')(true)
const RUIMTE = require('./../../../_models/_global/ruimte.js')(true)

// IMPORT LOCAL MODELS
const AANBOD = require('./../../../_models/Cursussen/aanbod.js')(true)
const SESSIE = require('./../../../_models/Cursussen/sessie.js')(true)
const CURSIST = require('./../../../_models/Cursussen/deelnemer.js')(true)
const DOCENT = require('./../../../_models/Cursussen/docent.js')(true)
const INGEPLAND = require('./../../../_models/Cursussen/ingepland.js')(true)

module.exports = {
  type: 'Collection.Table',
  model: INGEPLAND,
  // switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
  exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving', 'Ruimte', 'Docent'],
  actions: [],
  overrides: {
    type: 'inline'
  }
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
