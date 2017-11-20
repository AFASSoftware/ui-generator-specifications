// CLEAR MODULE CACHE
require('require-reload')(require).emptyCache()

// IMPORT GLOBAL MODELS
const LOCATIE = require('./../../_models/_global/locatie.js')(true)

// IMPORT LOCAL MODELS
const EVENEMENT = require('./../../_models/Evenementen/evenement.js')(true)
const DECLARATIE = require('./../../_models/Evenementen/declaratie.js')(true)
const SESSIE = require('./../../_models/Evenementen/sessie.js')(true)
const DEELNEMER = require('./../../_models/Evenementen/deelnemer.js')(true)
const CREWLID = require('./../../_models/Evenementen/crewlid.js')(true)

module.exports = {
  sizes: [
    [1024, 700],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Portal',
      model: { title: 'Evenementen' },
      pages: [
        {
          type: 'Page.Collection.Table',
          model: EVENEMENT,
          collection: {
            exclude: ['Omschrijving', 'Introducees vastleggen', 'Introducees toestaan']
          },
          pages: [
            {
              type: 'Page.Detail',
              model: EVENEMENT
            },
            {
              type: 'Page.Detail.Collection',
              model: EVENEMENT,
              detail: {
                collection: {
                  model: SESSIE,
                  count: 8,
                  exclude: ['Omschrijving']
                }
              }
            },
            {
              type: 'Page.Detail.Collection',
              model: EVENEMENT,
              detail: {
                collection: {
                  model: DEELNEMER
                }
              }
            },
            {
              type: 'Page.Detail.Collection',
              model: EVENEMENT,
              detail: {
                collection: {
                  model: CREWLID
                }
              }
            },
            {
              type: 'Page.Detail.Collection',
              model: EVENEMENT,
              detail: {
                collection: {
                  model: DECLARATIE
                }
              }
            }
          ]
        },
        {
          type: 'Page.Collection.Table',
          model: CREWLID
        },
        {
          type: 'Page.Collection.Table',
          model: DEELNEMER
        }
      ]
    }
  ]
      // pages: [
      //   {
      //     type: 'Page.Collection.Table',
      //     model: EVENEMENT,
      //     pages: [
      //       {
      //         type: 'Page.Detail',
      //         model: EVENEMENT
      //       },
      //       {
      //         type: 'Page.Detail.Collection.Table',
      //         model: DECLARATIE,
      //         pages: [
      //           {
      //             type: 'Page.Detail',
      //             model: DECLARATIE,
      //           }
      //         ]
      //       },
      //       {
      //         type: 'Page.Detail.Collection.Table',
      //         model: CREWLID
      //       },
      //       {
      //         type: 'Page.Detail.Collection.Table',
      //         model: DEELNEMER
      //       }
      //     ]
      //   }
      // ]
  //   }
  // ]
}
