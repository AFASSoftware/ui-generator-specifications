// IMPORT GLOBAL MODELS
const FACTUURREGEL = require('./../../models/factuurregel.js')
const FACTUUR = require('./../../models/factuur.js')
const RUIMTE = require('./../../models/ruimte.js')

// IMPORT LOCAL MODELS
const AANBOD = require('./models/cursus-aanbod.js')
const SESSIE = require('./models/cursus-sessie.js')
const CURSIST = require('./models/cursus-deelnemer.js')
const DOCENT = require('./models/cursus-docent.js')
const INGEPLAND = require('./models/cursus-ingepland.js')



/**
 * Different ROLES get served different user-interfaces.
 * Below are the specifications of each ROLE within this
 * functionality:
 *
 * CURSUSBEHEERDER, CURSUSDOCENT, CURSIST
 */
const ROLE = {}

ROLE.CURSIST = {
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

ROLE.CURSUSDOCENT = {
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
                title: CURSIST.titlePlural,
                data: CURSIST.data,
                count: 11,
                exclude: ['Omschrijving'],
                actions: []
              },
              {
                type: 'collection',
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
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                exclude: ['Omschrijving'],
                count: 2,
                actions: [],
                detailPage: {
                  type: 'detail',
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

ROLE.CURSUSBEHEERDER = {
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
          title: AANBOD.titlePlural,
          data: AANBOD.data,
          exclude: ['Beschrijving'],
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
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                exclude: ['Omschrijving'],
                count: 2,
                detailPage: {
                  type: 'detail',
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
                title: INGEPLAND.titlePlural,
                data: INGEPLAND.data,
                exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
                count: 7,
                switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie']
              },
              {
                type: 'collection',
                title: FACTUURREGEL.titlePlural,
                data: FACTUURREGEL.data,
                exclude: ['Omschrijving']
              }
            ]
          }
        },
        {
          type: 'collection',
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
                title: SESSIE.titlePlural,
                data: SESSIE.data,
                count: 3,
                exclude: ['Omschrijving'],
                actions: []
              },
              {
                type: 'collection',
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
          title: RUIMTE.titlePlural,
          data: RUIMTE.data,
          // include: [],
          detailPage: {
            type: 'detail',
            title: RUIMTE.sampleTitle,
            data: RUIMTE.data,
            tabs: [
              {
                type: 'detail',
                title: 'Algemeen',
                data: RUIMTE.data
              }
            ]
          }
        }
      ]
    }
  ]
}

/**
 * Choose what should be returned,
 * by commenting the parts that need not to
 */
let SPECIFICATION

// ROLES
// SPECIFICATION = ROLE.CURSIST
// SPECIFICATION = ROLE.CURSUSDOCENT
SPECIFICATION = ROLE.CURSUSBEHEERDER

module.exports = SPECIFICATION
