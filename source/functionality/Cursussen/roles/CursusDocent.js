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
          type: 'collection',
          model: INGEPLAND,
          title: INGEPLAND.title,
          data: INGEPLAND.data,
          exclude: ['Beschrijving'],
          switcher: ['Mijn ingeplande cursussen', 'Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
          actions: [],
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
                actions: []
              },
              {
                type: 'collection',
                model: SESSIE,
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                count: 3,
                exclude: ['Omschrijving'],
                actions: []
              }
            ]
          },
        },
        {
          type: 'collection', // Page.Collection.Table
          model: AANBOD,
          title: AANBOD.titlePlural,
          data: AANBOD.data,
          exclude: ['Beschrijving'],
          actions: [],
          detailPage: {
            type: 'detail',
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
                actions: [],
                detailPage: {
                  type: 'detail',
                  model: SESSIE,
                  title: SESSIE.sampleTitle,
                  exclude: ['Docent'],
                  actions: [],
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
                count: 7,
                exclude: ['Beschrijving'],
                switcher: ['Mijn ingeplande cursussen', 'Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
                actions: []
              }
            ]
          }
        },
        {
          type: 'collection',
          model: DOCENT,
          title: DOCENT.titlePlural,
          data: DOCENT.data,
          actions: [],
          detailPage: {
            title: DOCENT.sampleTitle,
            actions: [],
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                title: 'Gegeven cursussen',
                model: INGEPLAND,
                data: INGEPLAND.data,
                exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving', 'Docent', 'Bezetting'],
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
          actions: [],
          detailPage: {
            title: CURSIST.sampleTitle,
            actions: [],
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen'
              },
              {
                type: 'collection',
                title: 'Gevolgde cursussen',
                data: INGEPLAND.data,
                exclude: ['Beschrijving'],
                count: 3,
                actions: []
              }
            ]
          }
        }
      ]
    }
  ]
}
