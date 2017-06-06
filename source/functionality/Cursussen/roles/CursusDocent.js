// CLEAR MODULE CACHE
require('require-reload')(require).emptyCache()

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
              model: CURSIST,
              detail: {
                collection: {
                  count: 11,
                  exclude: ['Omschrijving'],
                  actions: []
                }
              }
            },
            {
              type: 'Page.Detail.Collection',
              model: SESSIE,
              detail: {
                collection: {
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
              model: SESSIE,
              detail: {
                collection: {
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
                },
                {
                  type: 'Page.Detail.Collection.Table',
                  model: INGEPLAND,
                  detail: {
                    collection: {
                      count: 7,
                      exclude: ['Beschrijving'],
                      switcher: ['Mijn ingeplande cursussen', 'Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
                      actions: []
                    }
                  }
                }
              ]
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
              model: INGEPLAND,
              title: 'Gegeven cursussen',
              detail: {
                collection: {
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
              model: INGEPLAND,
              title: 'Gevolgde cursussen',
              detail: {
                collection: {
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
