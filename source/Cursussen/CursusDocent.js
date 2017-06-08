// CLEAR MODULE CACHE
require('require-reload')(require).emptyCache()

// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../_models/_global/factuurregel.js')(true)
const FACTUUR = require('./../_models/_global/factuur.js')(true)
const RUIMTE = require('./../_models/_global/ruimte.js')(true)

// IMPORT LOCAL MODELS
const AANBOD = require('./../_models/Cursussen/aanbod.js')(true)
const SESSIE = require('./../_models/Cursussen/sessie.js')(true)
const CURSIST = require('./../_models/Cursussen/deelnemer.js')(true)
const DOCENT = require('./../_models/Cursussen/docent.js')(true)
const INGEPLAND = require('./../_models/Cursussen/ingepland.js')(true)

module.exports = {
  sizes: [
    [1024, 700],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Portal',
      model: { title: 'Cursussen' },
      pages: [
        {
          type: 'Page.Collection',
          model: INGEPLAND,
          collection: {
            exclude: ['Beschrijving'],
            switcher: ['Mijn ingeplande cursussen', 'Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
            actions: []
          },
          pages: [
            {
              type: 'Page.Detail',
              model: INGEPLAND
            },
            {
              type: 'Page.Detail.Collection',
              model: INGEPLAND,
              detail: {
                collection: {
                  model: CURSIST,
                  count: 11,
                  exclude: ['Omschrijving'],
                  actions: []
                }
              }
            },
            {
              type: 'Page.Detail.Collection',
              model: INGEPLAND,
              detail: {
                collection: {
                  model: SESSIE,
                  count: 3,
                  exclude: ['Omschrijving'],
                  actions: []
                }
              }
            }
          ]
        },
        {
          type: 'Page.Collection',
          model: AANBOD,
          collection: {
            exclude: ['Beschrijving'],
            actions: []
          },
          pages: [
            {
              type: 'Page.Detail',
              model: AANBOD
            },
            {
              type: 'Page.Detail.Collection',
              model: AANBOD,
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
                    exclude: ['Docent'],
                    actions: []
                  }
                }
              ]
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: AANBOD,
              detail: {
                collection: {
                  model: INGEPLAND,
                  count: 7,
                  exclude: ['Beschrijving'],
                  switcher: ['Mijn ingeplande cursussen', 'Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
                  actions: []
                }
              }
            }
          ]
        },
        {
          type: 'Page.Collection',
          model: DOCENT,
          collection: {
            actions: []
          },
          pages: [
            {
              type: 'Page.Detail',
              model: DOCENT,
              detail: {
                actions: []
              }
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: DOCENT,
              title: 'Gegeven cursussen',
              detail: {
                collection: {
                  model: INGEPLAND,
                  exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving', 'Docent', 'Bezetting'],
                  count: 8,
                  actions: []
                }
              }
            }
          ]
        },
        {
          type: 'Page.Collection',
          model: CURSIST,
          collection: {
            actions: []
          },
          pages: [
            {
              type: 'Page.Detail',
              model: CURSIST,
              collection: {
                actions: [],
              }
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: CURSIST,
              title: 'Gevolgde cursussen',
              detail: {
                collection: {
                  model: INGEPLAND,
                  exclude: ['Beschrijving'],
                  count: 3,
                  actions: []
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
