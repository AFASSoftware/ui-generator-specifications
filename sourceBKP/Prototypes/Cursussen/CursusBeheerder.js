// CLEAR MODULE CACHE
require('require-reload')(require).emptyCache()

// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../../_models/_global/factuurregel.js')(true)
const FACTUUR = require('./../../_models/_global/factuur.js')(true)
const RUIMTE = require('./../../_models/_global/ruimte.js')(true)

// IMPORT LOCAL MODELS
const AANBOD = require('./../../_models/Cursussen/aanbod.js')(true)
const SESSIE = require('./../../_models/Cursussen/sessie.js')(true)
const CURSIST = require('./../../_models/Cursussen/deelnemer.js')(true)
const DOCENT = require('./../../_models/Cursussen/docent.js')(true)
const INGEPLAND = require('./../../_models/Cursussen/ingepland.js')(true)

module.exports = {
  sizes: [
    [1024, 700]
    // [375, 667]
  ],
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
              title: INGEPLAND.titlePlural+' (aankomend)',
              exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
              count: 7,
              switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie'],
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
        title: INGEPLAND.titlePlural+' (aankomend)',
        exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
        switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie'],
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
              count: 15,
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
          detail: {
            title: 'Gegeven cursussen',
            collection: {
              model: INGEPLAND,
              exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
              count: 4,
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
          detail: {
            title: 'Gevolgde Cursussen',
            collection: {
              model: INGEPLAND,
              exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
              count: 3,
              actions: []
            }
          }
        }
      ]
    },
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
    },
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
