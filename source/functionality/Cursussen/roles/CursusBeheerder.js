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
    [1024, 700]
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Portal',
      model: { title: 'Cursussen' },
      pages: [
        {
          type: 'Page.Collection.Table',
          model: AANBOD,
          collection: {
            exclude: ['Beschrijving'],
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
                  count: 2,
                  exclude: ['Omschrijving']
                }
              },
              pages: [
                {
                  type: 'Page.Detail',
                  model: SESSIE
                }
              ]
            },
            {
              type: 'Page.Detail.Collection',
              model: AANBOD,
              detail: {
                collection: {
                  model: INGEPLAND,
                  exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
                  count: 7,
                  switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie']
                }
              }
            },
            {
              type: 'Page.Detail.Collection',
              model: AANBOD,
              detail: {
                collection: {
                  model: FACTUURREGEL,
                  exclude: ['Omschrijving'],
                  count: 7
                }
              }
            }
          ]
        },
        {
          type: 'Page.Collection.Table',
          model: INGEPLAND,
          collection: {
            exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
            switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
          },
          pages: [
            {
              type: 'Page.Detail',
              model: INGEPLAND
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: INGEPLAND,
              detail: {
                collection: {
                  model: CURSIST,
                  count: 11,
                  exclude: ['Omschrijving'],
                  actions: [
                    ['Inschrijven', 'arrowRight', 'primary'],
                    ['Meer', 'threeHorizontalDots'],
                  ]
                }
              }
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: INGEPLAND,
              detail: {
                collection: {
                  model: SESSIE,
                  count: 3,
                  exclude: ['Omschrijving'],
                  actions: []
                }
              }
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: INGEPLAND,
              detail: {
                collection: {
                  model: FACTUURREGEL,
                  exclude: ['Omschrijving'],
                  count: 8,
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
            exclude: ['Docent']
          },
          pages: [
            {
              type: 'Page.Detail',
              model: DOCENT
            },
            {
              type: 'Page.Detail.Collection.Table',
              model: DOCENT,
              title: 'Gegeven cursussen',
              detail: {
                collection: {
                  model: INGEPLAND,
                  exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
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
                  exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
                  count: 3,
                  actions: []
                }
              }
            }
          ]
        }
      ]
    },
    {
      type: 'Page.Portal',
      model: { title: 'Financieel' },
      pages: [
        {
          type: 'Page.Collection',
          model: FACTUURREGEL,
          collection: {
            exclude: ['Omschrijving']
          },
          pages: [
            {
              type: 'Page.Detail',
              model: FACTUURREGEL
            }
          ]
        },
        {
          type: 'Page.Collection',
          model: FACTUUR,
          pages: [
            {
              type: 'Page.Detail',
              model: FACTUUR
            }
          ]
        }
      ]
    },
    {
      type: 'Page.Portal',
      model: { title: 'Functionaliteit' },
      pages: [
        {
          type: 'Page.Collection',
          model: RUIMTE,
          pages: [
            {
              type: 'Page.Detail',
              model: RUIMTE
            }
          ]
        }
      ]
    }
  ]
}
