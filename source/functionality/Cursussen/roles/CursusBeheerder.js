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
      type: 'portal', // Page.Portal
      title: 'Cursussen',
      pages: [
        {
          type: 'collection', // Page.Collection.Table
          model: AANBOD,
          title: AANBOD.titlePlural,
          data: AANBOD.data,
          exclude: ['Beschrijving'],
          detailPage: {
            type: 'detail',
            model: AANBOD,
            title: AANBOD.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                model: SESSIE,
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                exclude: ['Omschrijving'],
                count: 2,
                detailPage: {
                  type: 'detail',
                  model: SESSIE,
                  title: SESSIE.sampleTitle,
                  data: SESSIE.data,
                  tabs: [
                    {
                      type: 'detail',
                      title: 'Algemeen'
                    }
                  ]
                }
              },
              {
                type: 'collection',
                model: INGEPLAND,
                title: INGEPLAND.titlePlural,
                data: INGEPLAND.data,
                exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
                count: 7,
                switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie']
              },
              {
                type: 'collection',
                model: FACTUURREGEL,
                title: FACTUURREGEL.titlePlural,
                data: FACTUURREGEL.data,
                exclude: ['Omschrijving']
              }
            ]
          }
        },
        {
          type: 'collection',
          model: INGEPLAND,
          title: INGEPLAND.titlePlural,
          data: INGEPLAND.data,
          exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
          switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
          detailPage: {
            title: INGEPLAND.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                model: CURSIST,
                title: CURSIST.titlePlural,
                data: CURSIST.data,
                count: 11,
                exclude: ['Omschrijving'],
                actions: [
                  ['Inschrijven', 'arrowRight', 'primary'],
                  ['Meer', 'threeHorizontalDots'],
                ]
              },
              {
                type: 'collection',
                model: SESSIE,
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                count: 3,
                exclude: ['Omschrijving'],
                actions: []
              },
              {
                type: 'collection',
                model: FACTUURREGEL,
                title: FACTUURREGEL.titlePlural,
                data: FACTUURREGEL.data,
                exclude: ['Omschrijving'],
                count: 8,
                actions: []
              }
            ]
          },
        },
        {
          type: 'collection',
          model: DOCENT,
          title: DOCENT.titlePlural,
          data: DOCENT.data,
          exclude: ['Docent'],
          detailPage: {
            title: DOCENT.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                title: 'Gegeven cursussen',
                data: INGEPLAND.data,
                exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
                count: 8,
                actions: []
              }
            ]
          }
        },
        {
          type: 'collection',
          model: CURSIST,
          title: CURSIST.titlePlural,
          data: CURSIST.data,
          detailPage: {
            title: CURSIST.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                model: INGEPLAND,
                title: 'Gevolgde Cursussen',
                data: INGEPLAND.data,
                exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
                count: 3,
                actions: []
              }
            ]
          }
        }
      ]
    },
    {
      type: 'portal',
      title: 'Financieel',
      pages: [
        {
          type: 'collection',
          model: FACTUURREGEL,
          title: FACTUURREGEL.titlePlural,
          data: FACTUURREGEL.data,
          exclude: ['Omschrijving'],
          detailPage: {
            title: FACTUURREGEL.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              }
            ]
          }
        },
        {
          type: 'collection',
          model: FACTUUR,
          title: FACTUUR.titlePlural,
          data: FACTUUR.data,
          detailPage: {
            title: FACTUUR.sampleTitle,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              }
            ]
          }
        }
      ]
    },
    {
      type: 'portal',
      title: 'Functionaliteit',
      pages: [
        {
          type: 'collection',
          model: RUIMTE,
          title: RUIMTE.titlePlural,
          data: RUIMTE.data,
          // include: [],
          detailPage: {
            type: 'detail',
            model: RUIMTE,
            title: RUIMTE.sampleTitle,
            data: RUIMTE.data,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen',
                data: RUIMTE.data,
                model: RUIMTE
              }
            ]
          }
        }
      ]
    }
  ]
}
