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
                exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving']
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
      ]
    },
    {
      type: 'Page.Portal',
      model: { title: '_' },
      pages: [
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
  ]
}
