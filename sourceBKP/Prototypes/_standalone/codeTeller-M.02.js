// const ORGANISATIE = require('./../../_models/_global/organisatie.js')(true)
module.exports = {
  sizes: [
    [900, 400],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 – Code bij een rol aan- of uitzetten',
      model: {
        title: 'Code',
        titlePlural: 'Codes',
        sampleTitle: 'Relatiecode',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'Releatiecode'
          }, {
            title: 'Relatiecode gebruiken',
            sampleData: 'true'
          },
          {
            title: 'Lengte',
            sampleData: 'number'
          }
        ]
      },
      detail: {
        tabs: [
          {
            title: 'Algemeen',
            active: true
          }
        ]
      }
    },
    {
      type: 'Page.Detail',
      pageTitle: 'M.01 – Handmatig code invullen',
      model: {
        title: 'Code',
        titlePlural: 'Codes',
        sampleTitle: 'Relatiecode',
        data: [
          {
            title: 'Omschrijving',
            sampleData: 'Releatiecode'
          }, {
            title: 'Relatiecode gebruiken',
            sampleData: 'true'
          },
          {
            title: 'Lengte',
            sampleData: 'number'
          }
        ]
      },
      detail: {
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
