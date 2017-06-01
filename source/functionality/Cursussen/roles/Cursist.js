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
    [375, 667]
  ],
  pages: [
    {
      type: 'portal', // Page.Portal
      title: 'Cursussen',
      pages: [
        {
          type: 'collection', // Page.Collection.Table
          model: INGEPLAND,
          title: INGEPLAND.titlePlural,
          data: INGEPLAND.data,
          exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
          actions: [],
          detailPage: {
            type: 'detail',
            title: INGEPLAND.sampleTitle,
            actions: [
              ['Schrijf je in', 'arrowRight', 'primary']
            ],
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen',
                exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving']
              },
              {
                type: 'collection',
                model: SESSIE,
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                exclude: ['Omschrijving'],
                count: 2,
                actions: [],
                detailPage: {
                  type: 'detail',
                  title: SESSIE.sampleTitle,
                  actions: [],
                  tabs: [
                    {
                      type: 'detail',
                      title: 'Algemeen'
                    }
                  ]
                }
              }
            ]
          }
        },
      ]
    },
    {
      type: 'portal',
      title: '',
      pages: [
        {
          type: 'collection',
          model: CURSIST,
          title: CURSIST.titlePlural,
          data: CURSIST.data,
          detailPage: {
            type: 'detail',
            title: CURSIST.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                title: 'Gevolgde Cursussen',
                data: INGEPLAND.data,
                exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving'],
                count: 4
              }
            ]
          }
        }
      ]
    }
  ]
}
