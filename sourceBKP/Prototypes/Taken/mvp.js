const TAAK = require('./../../_models/_global/taak.js')(true)
const LOONBEREKENING = require('./../../_models/Misc/loonberekening.js')(true)
const PAKBONREGEL = require('./../../_models/Misc/pakbonregel.js')(true)
const NOTIFICATIE = require('./../../_models/_global/notificatie.js')(true)


module.exports = {
  sizes: [
    [1024, 700],
    // [375, 667]
  ],
  pages: [
    {
      type: 'Page.Collection.Table',
      model: TAAK,
      pageTitle: 'Actuele taken',
      navigationBar: {
        state: 'tasksRouteActive',
        tasksBadge: 'primary'
      },
      collection: {
        actions: [
          // ['Nieuw', 'arrowRight', 'primary']
        ],
        isSelectable: true,
        include: ['Taak', 'Type', 'Datum', 'Verantwoordelijke'],
        sort: 'Datum',
        switcher: [
          ['checkMark', 'Actuele taken', 9],
          ['blanco', 'Overige taken', 138],
          ['blanco', 'Afgeronde taken', 72]
        ],
      },
      pages: [
        {
          type: 'Page.Collection.Table',
          model: PAKBONREGEL,
          collection: {
            isSelectable: true,
            actions: [
              ['Leveren', 'arrowRight', 'primary'],
              ['Nieuw', 'plus', 'default']
            ]
          },
          pages: [
            {
              type: 'Page.Detail',
              model: PAKBONREGEL,
              detail: {
                actions: [
                  ['Leveren', 'arrowRight', 'primary'],
                  ['Wijzigen', 'pencil', 'default']
                ]
              }
            }
          ]
        },
        {
          type: 'Page.Collection.Table',
          model: LOONBEREKENING,
          collection: {
            isSelectable: true,
            actions: [
              ['Uitvoeren', 'arrowRight', 'primary'],
              ['Nieuw', 'plus', 'default']
            ]
          },
          pages: [
            {
              type: 'Page.Detail',
              model: LOONBEREKENING,
              detail: {
                actions: [
                  ['Uitvoeren', 'arrowRight', 'primary'],
                  ['Wijzigen', 'pencil', 'default']
                ]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'Page.Collection.Table',
      model: TAAK,
      pageTitle: 'Overige taken',
      navigationBar: {
        state: 'tasksRouteActive',
        tasksBadge: 'primary'
      },
      collection: {
        title: 'Overige taken',
        count: 14,
        actions: [],
        isSelectable: true,
        // isSelected: true,
        include: ['Taak', 'Type', 'Datum', 'Verantwoordelijke'],
        sort: 'Datum',
        switcher: [
          ['blanco', 'Actuele taken', 9],
          ['checkMark', 'Overige taken', 138],
          ['blanco', 'Afgeronde taken', 72]
        ]
      }
    },
    {
      type: 'Page.Collection.Table',
      model: TAAK,
      pageTitle: 'Afgeronde taken',
      navigationBar: {
        state: 'tasksRouteActive',
        tasksBadge: 'primary'
      },
      collection: {
        title: 'Afgeronde taken',
        count: 4,
        actions: [],
        sort: 'Datum',
        // isSelectable: true,
        // isSelected: true,
        include: ['Taak', 'Type', 'Datum', 'Verantwoordelijke'],
        switcher: [
          ['blanco', 'Actuele taken', 9],
          ['blanco', 'Overige taken', 138],
          ['checkMark', 'Afgeronde taken', 72]
        ]
      }
    },
    // DEEL 1 PAGE
    {
      type: 'Page',
      pageTitle: 'Willekeurige Pagina',
      navigationBar: {
        state: 'notificationsSemiActive',
        notificationsBadge: 'primary'
      },
      NotificationPanel: {
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
      model: NOTIFICATIE,
      navigationBar: {
        state: 'notificationsRouteActive',
        notificationsBadge: 'primary'
      },
      collection: {
        count: 4,
        actions: []
      }
    }
  ]
}
