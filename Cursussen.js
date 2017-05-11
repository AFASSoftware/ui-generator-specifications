/**
 * This file contains the specification of a particular functionality.
 * It is written in ECMAScript 6, but is kept as close to plain json as possible,
 * while having the possibility to comment and reuse models.
 * The upper part declares the MODELS used within this specification,
 * The lower part contains the actual SPECIFICATION object.
 * @return {Object} SPECIFICATION object wrapped in an ECMAScript function
 */
(function() {




  /**
   * MODEL contains all the MODELS used within this functionality
   *
   * Cursussen:
   * AANBOD, INGEPLAND, SESSIE, DOCENT, CURSIST
   *
   * Financieel:
   * FACTUURREGEL, FACTUUR
   *
   * Other:
   * RUIMTE
   */
  const MODEL = {}

  MODEL.AANBOD = () => {
    return {
      title: 'Cursus',
      titlePlural: 'Cursus aanbod',
      sampleTitle: 'Basiscursus HRM',
      data: [
        {
          title: 'Naam',
          sampleData: '_course',
          sort: true
        },
        {
          title: 'Onderwerp',
          sampleData: '_courseTopic'
        },
        {
          title: 'Prijs',
          sampleData: ['euro', { min: 60, max: 300 }],
        },
        {
          title: 'Aantal Cursisten',
          sampleData: ['x..y', { min: 5, maxmin: 10, max: 25, minmax: 15, seperator: '-' }]
        },
        {
          reference: MODEL.RUIMTE()
        },
        {
          title: 'Beschrijving',
          sampleData: ['paragraph', { sentences: 1 }]
        }
      ]
    }
  }

  MODEL.INGEPLAND = () => {
    return {
      type: 'gebeurtenis',
      title: 'Ingeplande cursus',
      titlePlural: 'Ingeplande cursussen',
      sampleTitle: 'HRM Basis - 20 juni',
      data: [
        {
          reference: MODEL.AANBOD()
        },
        {
          title: 'Datum',
          sampleData: 'date',
          sort: true
        },
        {
          reference: MODEL.DOCENT()
        },
        {
          title: 'Bezetting',
          sampleData: ['x..y', { min: 0, max: 26 }]
        },
        {
          title: 'Opening inschrijving',
          sampleData: 'date'
        },
        {
          title: 'Sluiting inschrijving',
          sampleData: 'date'
        },
        {
          reference: MODEL.RUIMTE()
        },
        {
          title: 'Beschrijving',
          sampleData: 'paragraph'
        }
      ]
    }
  }

  MODEL.SESSIE = () => {
    return {
      title: 'Sessie',
      titlePlural: 'Sessies',
      sampleTitle: 'Sessie 1',
      data: [
        {
          title: 'Naam',
          sampleData: ['time', { min: 1, max: 8 }, ['Sessie ', '']]
        },
        {
          title: 'Begintijd',
          sampleData: ['time', { min: 9, max: 18 }]
        },
        {
          title: 'Eintijd',
          sampleData: ['time', { min: 8, max: 18 }]
        },
        {
          reference: MODEL.DOCENT()
        },
        {
          reference: MODEL.RUIMTE()
        },
        {
          title: 'Omschrijving',
          sampleData: ['paragraph', { sentences: 1 }]
        }
      ]
    }
  }

  MODEL.DOCENT = () => {
    return {
      title: 'Docent',
      titlePlural: 'Docenten',
      sampleTitle: 'Piet Hein',
      data: [
        {
          title: 'Naam',
          sampleData: 'name'
        },
        {
          title: 'Gegeven cursussen',
          sampleData: ['integer', { min: 0, max: 120 }]
        },
        {
          title: 'Geslacht',
          sampleData: 'gender'
        }
      ]
    }
  }

  MODEL.CURSIST = () => {
    return {
      title: 'Cursist',
      titlePlural: 'Cursisten',
      sampleTitle: 'Harold Quack',
      data: [
        {
          title: 'Naam',
          sampleData: 'name'
        },
        {
          title: 'Organisatie',
          sampleData: '_organisation'
        },
        {
          title: 'Inschrijfdatum',
          sampleData: 'date'
        },
        {
          title: 'Gevolgde cursussen',
          sampleData: ['integer', { min: 0, max: 11 }]
        },
        {
          title: 'Gemiddelde Beoordeling',
          sampleData: ['integer', { min: 2, max: 10 }]
        },
        {
          title: 'Geslacht',
          sampleData: 'gender'
        }
      ]
    }
  }

  MODEL.FACTUURREGEL = () => {
    return {
      // title: 'Te factureren verkoopfactuurregels',
      title: 'Factuurregel',
      titlePlural: 'Factuurregels',
      sampleTitle: 'Factuurregel cursus HRM 20 juni',
      data: [
        {
          title: 'Omschrijving',
          sampleData: ['paragraph', { sentences: 1 }]
        },
        {
          title: 'Financiële administratie',
          sampleData: '_financial.administration'
        },
        {
          title: 'Datum',
          sampleData: 'date'
        },
        {
          title: 'Klant',
          sampleData: '_organisation'
        },
        {
          title: 'Contactpersoon',
          sampleData: 'name'
        },
        {
          title: 'Verkoopproduct',
          sampleData: '_course'
        },
        {
          title: 'Aantal',
          sampleData: ['integer', { min: 1, max: 60 }]
        },
        {
          title: 'Verkoopprijs',
          sampleData: ['euro', { min: 150, max: 350 }]
        },
        {
          title: 'Verkoopbedrag',
          sampleData: ['euro', { min: 150, max: 4000 }]
        },
        {
          title: 'Journaalpost administratie',
          sampleData: '_financial.journalentryadministration'
        },
        {
          title: 'Grootboekrekening te factureren'
        },
        {
          title: 'Grootboekrekening debiteuren'
        },
        {
          title:'Grootboekrekening verwachte omzet'
        },
        {
          title:'Grootboekrekening omzet'
        },
        {
          title:'Status'
        },
        {
          title:'Bron'
        }
      ]
    }
  }

  MODEL.FACTUUR = () => {
    return {
      // title: 'Gefactureerde verkoopfacturen',
      title: 'Factuur',
      titlePlural: 'Facturen',
      sampleTitle: 'Factuur ACME Corp, 12 juni 2016',
      data: [
        {
          title: 'Journaalpost administratie'
        }, {
          title: 'Financiële administratie'
        }, {
          title: 'Verkoopfactuurnummer'
        }, {
          title: 'Totaal verkoopbedrag'
        }, {
          title: 'Aantal regels'
        }, {
          title: 'Totaal van aantal'
        }, {
          title: 'Datum'
        }, {
          title: 'Klant'
        }, {
          title: 'Contactpersoon'
        }
      ]
    }
  }

  MODEL.RUIMTE = () => {
    return {
      title: 'Ruimte',
      titlePlural: 'Ruimtes',
      sampleTitle: 'Wattzaal 2.04',
      data: [
        {
          title: 'Naam',
          sampleData: '_location_space'
        },
        {
          title: 'Capaciteit',
          sampleData: ['integer', { min: 5, max: 80 }, [ '', ' personen' ]]
        }
      ]
    }
  }




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
      // [375, 667]
    ],
    pages: [
      {
        type: 'portal', // Page.Portal
        title: 'Cursussen',
        pages: [
          {
            type: 'collection', // Page.Collection.Table
            title: MODEL.INGEPLAND().titlePlural,
            data: MODEL.INGEPLAND().data,
            exclude: ['Beschrijving'],
            detailPage: {
              type: 'detail',
              title: MODEL.INGEPLAND().sampleTitle,
              actions: [
                ['Schrijf je in', 'arrowRight'],
                ['Nieuw','plus'],
                [' ', 'threeHorizontalDots']
              ],
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen',
                  exclude: ['Beschrijving', 'Bezetting', 'Opening inschrijving', 'Sluiting inschrijving']
                },
                {
                  type: 'collection',
                  title: MODEL.SESSIE().titlePlural,
                  data: MODEL.SESSIE().data,
                  exclude: ['Omschrijving'],
                  count: 2,
                  detailPage: {
                    type: 'detail',
                    title: MODEL.SESSIE().sampleTitle,
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
            title: MODEL.CURSIST().titlePlural,
            data: MODEL.CURSIST().data,
            detailPage: {
              type: 'detail',
              title: MODEL.CURSIST().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: 'Gevolgde Cursussen',
                  data: MODEL.INGEPLAND().data,
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
      // [375, 667]
    ],
    pages: [
      {
        type: 'portal', // Page.Portal
        title: 'Cursussen',
        pages: [
          {
            type: 'collection',
            title: MODEL.INGEPLAND().title,
            data: MODEL.INGEPLAND().data,
            exclude: ['Beschrijving'],
            switcher: ['Mijn ingeplande cursussen', 'Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
            detailPage: {
              title: MODEL.INGEPLAND().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: MODEL.CURSIST().titlePlural,
                  data: MODEL.CURSIST().data,
                  count: 11,
                  exclude: ['Omschrijving']
                },
                {
                  type: 'collection',
                  title: MODEL.SESSIE().titlePlural,
                  data: MODEL.SESSIE().data,
                  count: 3,
                  exclude: ['Omschrijving']
                }
              ]
            },
          },
          {
            type: 'collection', // Page.Collection.Table
            title: MODEL.AANBOD().titlePlural,
            data: MODEL.AANBOD().data,
            include: [],
            detailPage: {
              type: 'detail',
              title: MODEL.AANBOD().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: MODEL.SESSIE().titlePlural,
                  data: MODEL.SESSIE().data,
                  exclude: ['Omschrijving'],
                  count: 2,
                  detailPage: {
                    type: 'detail',
                    title: MODEL.SESSIE().sampleTitle,
                    exclude: ['Docent'],
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
                  title: MODEL.INGEPLAND().titlePlural,
                  data: MODEL.INGEPLAND().data,
                  count: 7,
                  exclude: ['Beschrijving']
                }
              ]
            }
          },
          {
            type: 'collection',
            title: MODEL.DOCENT().titlePlural,
            data: MODEL.DOCENT().data,
            detailPage: {
              title: MODEL.DOCENT().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: 'Gegeven cursussen',
                  data: MODEL.INGEPLAND().data,
                  exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving', 'Docent'],
                  count: 8
                }
              ]
            }
          },
          {
            type: 'collection',
            title: MODEL.CURSIST().titlePlural,
            data: MODEL.CURSIST().data,
            detailPage: {
              title: MODEL.CURSIST().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: 'Gevolgde cursussen',
                  data: MODEL.INGEPLAND().data,
                  exclude: ['Beschrijving'],
                  count: 3
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
      // [375, 667]
    ],
    pages: [
      {
        type: 'portal', // Page.Portal
        title: 'Cursussen',
        pages: [
          {
            type: 'collection', // Page.Collection.Table
            title: MODEL.AANBOD().titlePlural,
            data: MODEL.AANBOD().data,
            detailPage: {
              type: 'detail',
              title: MODEL.AANBOD().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: MODEL.SESSIE().titlePlural,
                  data: MODEL.SESSIE().data,
                  exclude: ['Omschrijving'],
                  count: 2,
                  detailPage: {
                    type: 'detail',
                    title: MODEL.SESSIE().sampleTitle,
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
                  title: MODEL.INGEPLAND().titlePlural,
                  data: MODEL.INGEPLAND().data,
                  exclude: ['Beschrijving'],
                  count: 7
                },
                {
                  type: 'collection',
                  title: MODEL.FACTUURREGEL().titlePlural,
                  data: MODEL.FACTUURREGEL().data,
                  exclude: ['Omschrijving']
                }
              ]
            }
          },
          {
            type: 'collection',
            title: MODEL.INGEPLAND().titlePlural,
            data: MODEL.INGEPLAND().data,
            exclude: ['Beschrijving', 'Opening inschrijving', 'Sluiting inschrijving'],
            switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie'],
            detailPage: {
              title: MODEL.INGEPLAND().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: MODEL.CURSIST().titlePlural,
                  data: MODEL.CURSIST().data,
                  count: 11,
                  exclude: ['Omschrijving']
                },
                {
                  type: 'collection',
                  title: MODEL.SESSIE().titlePlural,
                  data: MODEL.SESSIE().data,
                  count: 3,
                  exclude: ['Omschrijving']
                },
                {
                  type: 'collection',
                  title: MODEL.FACTUURREGEL().titlePlural,
                  data: MODEL.FACTUURREGEL().data,
                  exclude: ['Omschrijving'],
                  count: 8
                }
              ]
            },
          },
          {
            type: 'collection',
            title: MODEL.DOCENT().titlePlural,
            data: MODEL.DOCENT().data,
            detailPage: {
              title: MODEL.DOCENT().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: 'Gegeven cursussen',
                  data: MODEL.INGEPLAND().data,
                  exclude: ['Beschrijving'],
                  count: 8
                }
              ]
            }
          },
          {
            type: 'collection',
            title: MODEL.CURSIST().titlePlural,
            data: MODEL.CURSIST().data,
            detailPage: {
              title: MODEL.CURSIST().sampleTitle,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen'
                },
                {
                  type: 'collection',
                  title: 'Gevolgde Cursussen',
                  data: MODEL.INGEPLAND().data,
                  exclude: ['Beschrijving'],
                  count: 3
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
            title: MODEL.FACTUURREGEL().titlePlural,
            data: MODEL.FACTUURREGEL().data,
            exclude: ['Omschrijving'],
            detailPage: {
              title: MODEL.FACTUURREGEL().sampleTitle,
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
            title: MODEL.FACTUUR().titlePlural,
            data: MODEL.FACTUUR().data,
            detailPage: {
              title: MODEL.FACTUUR().sampleTitle,
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
            title: MODEL.RUIMTE().titlePlural,
            data: MODEL.RUIMTE().data,
            // include: [],
            detailPage: {
              type: 'detail',
              title: MODEL.RUIMTE().sampleTitle,
              data: MODEL.RUIMTE().data,
              tabs: [
                {
                  type: 'detail',
                  title: 'Algemeen',
                  data: MODEL.RUIMTE().data
                }
              ]
            }
          }
        ]
      }
    ]
  }




  /**
   * Loose parts used within this functionality,
   * drawn with the generator, but not part of the
   * SPECIFICATION and thus not withing the
   * ‘generated’ layer,
   */
  const PART = {}

  PART.INGEPLANDCOLLECTION = {
    type: 'collection',
    title: MODEL.INGEPLAND().titlePlural,
    data: MODEL.INGEPLAND().data,
    include: ['Cursus', 'Onderwerp', 'Datum', 'Bezetting'],
    overrides: {
      type: 'inline'
    },
    switcher: ['Alle ingeplande cursussen', 'Deze week', 'Deze Maand', 'Historie']
  }

  PART.AANBODCOLLECTION = {
    type: 'collection',
    title: MODEL.AANBOD().titlePlural,
    data: MODEL.AANBOD().data,
    include: ['Naam', 'Onderwerp'],
    overrides: {
      type: 'inline'
    }
  }

  PART.NIEUWECUSRISTENCOLLECTION = {
    type: 'collection',
    title: ' ',//'Wie wil je inschrijven?',
    data: MODEL.CURSIST().data,
    overrides: {
      type: 'inline'
    },
    isSelectable: true, // TODO
    include: ['Naam', 'Organisatie', 'Geslacht', 'Gevolgde cursussen']
  }



  /**
   * Choose what should be returned,
   * by commenting the parts that need not to
   */
  let SPECIFICATION

  // ROLES
  // SPECIFICATION = ROLE.CURSIST
  SPECIFICATION = ROLE.CURSUSDOCENT
  // SPECIFICATION = ROLE.CURSUSBEHEERDER

    // PARTS
  // SPECIFICATION = PART.INGEPLANDCOLLECTION
  // SPECIFICATION = PART.AANBODCOLLECTION
  // SPECIFICATION = PART.NIEUWECUSRISTENCOLLECTION

  return SPECIFICATION
})()







// USECASES VANUIT ‘SPEC’?
/*
  CURSIST bekijkt INSCHRIJVING
  CURSUSBEHEERDER voegt nieuwe CURSUS toe
    - CURSUSBEHEERDER voegt nieuwe CURSUS toe in Spotlight
    - CURSUSBEHEERDER voegt nieuwe CURSUS toe in Cursussen PortalPage (selecteer plus knop op portalpagina, selecteer nieuw pagina)
    - CURSUSBEHEERDER voegt nieuwe CURSUS toe in CURSUS CollectionPage
  CURSUSBEHEERDER voegt nieuwe CURSUSINPLANNING toe
    - CURSUSBEHEERDER voegt nieuwe CURSUSINPLANNING toe in Spotlight
    - CURSUSBEHEERDER maakt nieuw CURSUSINPLANNING aan in Cursussen PortalPage
    - CURSUSBEHEERDER maakt nieuw CURSUSINPLANNING aan in CURSUSINPLANNING CollectionPage
    - CURSUSBEHEERDER maakt nieuw CURSUSINPLANNING aan in AANBOD DetaiPage CURSUSINPLANNING Tab
  CURSUSBEHEERDER plant nieuwe INGEPLAND in
  CURSUSBEHEERDER schrijft CURSIST in
*/
