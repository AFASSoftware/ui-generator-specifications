// CLEAR MODULE CACHE
require('require-reload')(require).emptyCache()

// const {
//   FACTUURREGEL,
//   FACTUUR,
//   RUIMTE,
//   AANBOD,
//   SESSIE,
//   CURSIST,
//   DOCENT,
//   INGEPLAND
// } = require('./../../_models.js')



// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../../_models/_global/factuurregel.js')(true)
const FACTUUR = require('./../../_models/_global/factuur.js')(true)
const RUIMTE = require('./../../_models/_global/ruimte.js')(true)

// IMPORT LOCAL MODELS
// const { AANBOD, } = require('./../models')(true)
const AANBOD = require('./../../_models/Cursussen/aanbod.js')(true)
const SESSIE = require('./../../_models/Cursussen/sessie.js')(true)
const CURSIST = require('./../../_models/Cursussen/deelnemer.js')(true)
const DOCENT = require('./../../_models/Cursussen/docent.js')(true)
const INGEPLAND = require('./../../_models/Cursussen/ingepland.js')(true)



module.exports = {
  useCases: [
    ['']
  ],
  sizes: [
    [1024, 700],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Collection.Table',
      model: INGEPLAND,
      collection: {
        exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
        actions: []
      },
      pages: [
        {
          type: 'Page.Detail',
          model: INGEPLAND,
          detail: {
            actions: [
              ['Schrijf je in', 'arrowRight', 'primary']
            ],
            exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving'],
            excludeTabs: ['Factuurregels']
          }
        },
        {
          type: 'Page.Detail.Collection.Table',
          model: INGEPLAND,
          detail: {
            collection: {
              model: SESSIE,
              exclude: ['Omschrijving'],
              count: 2,
              actions: []
            }
          },
          pages: [
            {
              type: 'Page.Detail',
              model: SESSIE,
              detail: {
                exclude: ['Omschrijving'],
                actions: [],
                count: 2
              }
            }
          ]
        }
      ]
    },
    {
      type: 'Page.Collection',
      model: CURSIST,
      pages: [
        {
          type: 'Page.Detail',
          model: CURSIST
        },
        {
          type: 'Page.Detail.Collection.Table',
          model: CURSIST,
          title: 'Gevolgde Cursussen',
          detail: {
            collection: {
              model: INGEPLAND,
              exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving'],
              count: 4
            }
          }
        }
      ]
    }
  ]
}
