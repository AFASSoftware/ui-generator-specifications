const TAAK = require('./../../_models/_global/taak.js')(true)
const LOONBEREKENING = require('./../../_models/Misc/loonberekening.js')(true)
const PAKBONREGEL = require('./../../_models/Misc/pakbonregel.js')(true)
const NOTIFICATIE = require('./../../_models/_global/notificatie.js')(true)
const VERKOOPORDER = require('./../../_models/Misc/verkooporder.js')(true)

module.exports = {
  sizes: [
    [1024, 700],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Collection.Table',
      model: VERKOOPORDER,
      pageTitle: 'Verkooporders (Klant Laura maakt verkooporder aan)',
      collection: {
        count: 5
      },
      pages: [
        {
          type: 'Page.Space',
          pages: [
            {
              type: 'Page',
              pageTitle: 'Willekeurige Pagina (Klant Laura ontvangt Pakbon notificatie)',
              navigationBar: {
                state: 'notificationsSemiActive',
                notificationsBadge: 'primary'
              },
              NotificationPanel: {
                // _active: true,
                Items: [
                  { dayTitle: 'Vandaag' },
                  {
                    itemText: 'De door jouw geplaatste verkooporder (TCA32772) is geleverd.',
                    itemTime: '1 uur geleden', // defaults to '1 uur geleden'
                    itemRead: 'unRead', // [read, unRead] defaults to read
                    itemHover: 'default' // [default, hover] defaults to default
                  }
                ]
              },
              pages: [
                {
                  type: 'Page',
                  pageTitle: 'Pagina (Klant Laura ontvangt Factuur notificatie)',
                  navigationBar: {
                    state: 'notificationsSemiActive',
                    notificationsBadge: 'primary'
                  },
                  NotificationPanel: {
                    // _active: true,
                    Items: [
                      { dayTitle: 'Vandaag' },
                      {
                        itemText: 'De door jouw geplaatste verkooporder (TCA32772) is gefactureerd.',
                        itemTime: '15 minuten geleden', // defaults to '1 uur geleden'
                        itemRead: 'unRead', // [read, unRead] defaults to read
                        itemHover: 'default' // [default, hover] defaults to default
                      },
                      { dayTitle: 'Gisteren' },
                      {
                        itemText: 'Michelle heeft gereageerd op de geleverde verkooporder (TCA32772).',
                        itemTime: 'gisteren 15:47', // defaults to '1 uur geleden'
                        itemRead: 'read', // [read, unRead] defaults to read
                        itemHover: 'default' // [default, hover] defaults to default
                      },
                      {
                        itemText: 'De door jouw geplaatste verkooporder (TCA32772) is geleverd.',
                        itemTime: 'gisteren 11:20', // defaults to '1 uur geleden'
                        itemRead: 'read', // [read, unRead] defaults to read
                        itemHover: 'default' // [default, hover] defaults to default
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'Page',
          pageTitle: 'Willekeurige Pagina (Michelle van sales ontvangt notificatie)',
          navigationBar: {
            state: 'notificationsSemiActive',
            notificationsBadge: 'primary'
          },
          NotificationPanel: {
            // _active: true,
            Items: [
              { dayTitle: 'Vandaag' },
              {
                itemText: 'Laura van Accento heeft een nieuwe verkooporder aangemaakt.',
                itemTime: '1 uur geleden', // defaults to '1 uur geleden'
                itemRead: 'unRead', // [read, unRead] defaults to read
                itemHover: 'default' // [default, hover] defaults to default
              }
            ]
          }
        },
        {
          type: 'Page.Collection.Table',
          model: TAAK,
          pageTitle: 'Mijn Taken (Wouter van het magazijn ontvangt pakbon taak)',
          navigationBar: {
            state: 'tasksRouteActive',
            tasksBadge: 'primary'
          },
          collection: {
            title: 'Actuele taak',
            titlePlural: 'Actuele taken',
            count: 1,
            include: ['Taak', 'Type', 'Datum', 'Verantwoordelijke'],
            isSelectable: true,
            switcher: [
              ['checkMark', 'Actuele taken', 1],
              ['blanco', 'Overige taken', 87],
              ['blanco', 'Afgeronde taken', 172]
            ],
          }
        },
        {
          type: 'Page.Space',
          pages: [
            {
              type: 'Page.Collection.Table',
              model: TAAK,
              pageTitle: 'Actuele taken (Kees van administratie ontvangt Factuur taak)',
              navigationBar: {
                state: 'tasksRouteActive',
                tasksBadge: 'primary'
              },
              collection: {
                title: 'Actuele taken',
                isSelectable: true,
                count: 1,
                include: ['Taak', 'Type', 'Datum', 'Verantwoordelijke'],
                actions: [
                  // ['Factureren', 'arrowRight', 'primary']
                ],
                switcher: [
                  ['checkMark', 'Actuele taken', 1],
                  ['blanco', 'Overige taken', 24],
                  ['blanco', 'Afgeronde taken', 95]
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
