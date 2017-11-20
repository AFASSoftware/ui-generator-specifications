const ORGANISATIE = require('./../../_models/_global/organisatie.js')(true)
const GEBEURTENIS_LEVEREN = require('./../../_models/_global/gebeurtenis-leveren.js')(true)

module.exports = {
  sizes: [
    [1024, 700],
    [375, 667]
  ],
  pages: [
    {
      type: 'Page.Collection',
      model: ORGANISATIE,
      collection: {
        switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
      },
      pages: [
        {
          type: 'Page.Collection',
          pageTitle: 'Nieuwe Organisatie',
          model: ORGANISATIE,
          collection: {
            state: { isEdit: true },
            switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
          },
          pages: [
            {
              type: 'Page.Detail',
              pageTitle: 'Organisatie met adres (readMode)',
              model: ORGANISATIE,
              detail: {
                tabs: [
                  {
                    title: 'Algemeen',
                    active: true
                  }
                ]
              },
              pages: [
                {
                  type: 'Page.Detail',
                  pageTitle: 'Organisatie met adres (editMode)',
                  model: ORGANISATIE,
                  detail: {
                    state: { isEdit: true },
                    tabs: [
                      {
                        title: 'Algemeen',
                        active: true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    // GEBEURTENIS_LEVEREN nieuw, met adress keuze van partij
    // GEBEURTENIS_LEVEREN nieuw, met nieuw adres overlay
    // GEBEURTENIS_LEVEREN readMode
    // GELEVERD met adres in kop
    {
      type: 'Page.Collection',
      model: GEBEURTENIS_LEVEREN,
      collection: {

      },
      pages: [
        {
          type: 'Page.Collection',
          pageTitle: 'Gebeurtenis Nieuw',
          model: GEBEURTENIS_LEVEREN,
          collection: {
            state: { isEdit: true }
          },
          pages: [
            {
              type: 'Page.Detail',
              model: GEBEURTENIS_LEVEREN,
              detail: {
                tabs: [
                  {
                    title: 'Algemeen',
                    active: true
                  }
                ]
              },
              pages: [
                {
                  type: 'Page.Detail',
                  pageTitle: 'Gebeurtenis (Edit Mode)',
                  model: GEBEURTENIS_LEVEREN,
                  detail: {
                    state: { isEdit: true },
                    tabs: [
                      {
                        title: 'Algemeen',
                        active: true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
