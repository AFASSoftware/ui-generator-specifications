// const ORGANISATIE = require('./../../_models/_global/organisatie.js')(true)
module.exports = {
  sizes: [
    [900, 400],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Collection.Table',
      pageTitle: 'M.01 - Code van een rol kunnen inrichten [1]',
      model: {
        title: 'Code',
        titlePlural: 'Codes',
        sampleTitle: 'Relatiecode',
        data: [
          {
            title: 'Bron',
            sampleData: []
          },
          {
            title: 'Omschrijving1',
            sampleData: 'Releatiecode'
          },
          {
            title: 'Omschrijving2',
            sampleData: 'Releatiecode'
          },
          {
            title: 'Lengte',
            sampleData: 'integer'
          },
          {
            title: 'Autonummering',
            sampleData: 'boolean'
          },
          {
            title: 'Verloop',
            sampleData: 'integer'
          },
          {
            title: 'Huidige waarde',
            sampleData: 'integer'
          },
        ]
      },
      collection: {
        // actions: []
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Code bij een rol aan- of uitzetten [1]',
      model: {
        title: 'Code',
        titlePlural: 'Codes',
        sampleTitle: 'Relatiecode',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'Releatiecode'
          },
          {
            title: 'Relatiecode gebruiken',
            sampleData: false
          }
        ]
      },
      detail: {
        // tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Code bij een rol aan- of uitzetten [2]',
      model: {
        title: 'Code',
        titlePlural: 'Codes',
        sampleTitle: 'Relatiecode',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'Releatiecode'
          },
          {
            title: 'Relatiecode gebruiken',
            sampleData: true
          },
          {
            title: 'Lengte',
            sampleData: '6'
          }
        ]
      },
      detail: {
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Rol van Organisatie/Persoon [1]',
      model: {
        title: 'Nieuw persoon toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'John Doe (0162)',
        data: [
          {
            title: 'Naam',
            sampleData: 'John Doe'
          },
          {
            title: 'Relatienummer',
            sampleData: '0162'
          },
          {
            title: 'Medewerker',
            sampleData: false
          },
          {
            title: 'Klant',
            sampleData: true
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Rol van Organisatie/Persoon [2]',
      model: {
        title: 'Nieuw persoon toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'John Doe (JDE)',
        data: [
          {
            title: 'Naam',
            sampleData: 'John Doe'
          },
          {
            title: 'Interne code',
            sampleData: 'JDE'
          },
          {
            title: 'Medewerker',
            sampleData: true
          },
          {
            title: 'Klant',
            sampleData: false
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Rol van Organisatie/Persoon [3]',
      model: {
        title: 'Nieuw persoon toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'John Doe (JDE)',
        data: [
          {
            title: 'Naam',
            sampleData: 'John Doe'
          },
          {
            title: 'Interne code',
            sampleData: 'JDE'
          },
          {
            title: 'Relatienummer',
            sampleData: '0162'
          },
          {
            title: 'Medewerker',
            sampleData: true
          },
          {
            title: 'Klant',
            sampleData: true
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Rol van Goed [1]',
      model: {
        title: 'Nieuw artikel toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'DVD Writer (145078)',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'DVD Writer'
          },
          {
            title: 'Referentienummer',
            sampleData: '145078'
          },
          {
            title: 'Verkoopartikel',
            sampleData: true
          },
          {
            title: 'Vast Actief',
            sampleData: false
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Rol van Goed [2]',
      model: {
        title: 'Nieuw artikel toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'DVD Writer (12)',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'DVD Writer'
          },
          {
            title: 'Interne code',
            sampleData: '12'
          },
          {
            title: 'Verkoopartikel',
            sampleData: false
          },
          {
            title: 'Vast Actief',
            sampleData: true
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Rol van Goed [3]',
      model: {
        title: 'Nieuw artikel toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'DVD Writer (145078)',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'DVD Writer'
          },
          {
            title: 'Verkoopartikel',
            sampleData: '145078'
          },
          {
            title: 'Interne code',
            sampleData: '12'
          },
          {
            title: 'Verkoopartikel',
            sampleData: true
          },
          {
            title: 'Vast Actief',
            sampleData: true
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Handmatig code invullen - Profiel [1]',
      model: {
        title: 'Nieuwe reden verlof toevoegen',
        titlePlural: 'Codes',
        sampleTitle: 'Vakantie (V)',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'Vakantie'
          },
          {
            title: 'Code reden verlof',
            sampleData: 'V'
          }
        ]
      },
      detail: {
        tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Tonen van het code-veld [1]',
      model: {
        title: 'Persoon',
        titlePlural: 'Personen',
        sampleTitle: 'John Doe (JDE)',
        data: [
          {
            title: 'Naam',
            sampleData: 'John Doe'
          },
          {
            title: 'Relatiecode',
            sampleData: '0162'
          },
          {
            title: 'Interne code',
            sampleData: 'JDE'
          },
          {
            title: 'Medewerker',
            sampleData: true
          },
          {
            title: 'Klant',
            sampleData: true
          }
        ]
      },
      detail: {
        // tabs: false,
        // state: {
        //   isEdit: true
        // },
        // actions: [
        //   [],
        //   ['Opslaan', 'checkmark', 'positive'],
        //   ['Anuleren', 'close', 'default']
        // ],
      }
    },
    {
      type: 'Page.Collection.Table',
      pageTitle: 'M.01 - Tonen van het code-veld [2]',
      model: {
        title: 'Persoon',
        titlePlural: 'Personen',
        data: [
          {
            title: 'Naam',
            sampleData: 'name'
          },
          {
            title: 'Relatiecode',
            sampleData: 'JDO'
          },
          {
            title: 'Interne code',
            sampleData: '0162'
          },
          {
            title: 'Geslacht',
            sampleData: 'gender'
          }
        ]
      },
      collection: {
        // actions: []
      }
    },
    {
      type: 'Page.Collection.Table',
      pageTitle: 'M.01 - Tonen van het code-veld [3]',
      model: {
        title: 'Persoon',
        titlePlural: 'Personen',
        data: [
          {
            title: 'Naam',
            sampleData: 'name'
          },
          {
            title: 'Relatiecode',
            sampleData: 'JDO'
          },
          {
            title: 'Interne code',
            sampleData: '0162'
          },
          {
            title: 'Geslacht',
            sampleData: 'gender'
          }
        ]
      },
      collection: {
        // actions: []
      }
    },
    {
      type: 'Page.Collection.Table',
      pageTitle: 'M.01 - Tonen van het code-veld [4]',
      model: {
        title: 'Persoon',
        titlePlural: 'Personen',
        data: [
          {
            title: 'Naam',
            sampleData: 'name'
          },
          {
            title: 'Relatiecode',
            sampleData: 'JDO'
          },
          {
            title: 'Interne code',
            sampleData: '0162'
          },
          {
            title: 'Geslacht',
            sampleData: 'gender'
          }
        ]
      },
      collection: {
        // actions: []
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 - Wijzigen van het code-veld [1]',
      model: {
        title: 'Persoon',
        titlePlural: 'Personen',
        sampleTitle: 'John Doe (JDE)',
        data: [
          {
            title: 'Naam',
            sampleData: 'John Doe'
          },
          {
            title: 'Relatiecode',
            sampleData: '0162'
          },
          {
            title: 'Interne code',
            sampleData: 'JDE'
          },
          {
            title: 'Medewerker',
            sampleData: true
          },
          {
            title: 'Klant',
            sampleData: true
          }
        ]
      },
      detail: {
        // tabs: false,
        state: {
          isEdit: true
        },
        actions: [
          [],
          ['Opslaan', 'checkmark', 'positive'],
          ['Anuleren', 'close', 'default']
        ],
      }
    },
  ]
}
