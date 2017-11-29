//@flow
import type { Specification } from './../type-definition'
const ORGANISATIE = require('./../_models/_global/organisatie.js')(true)
const GEBEURTENIS_LEVEREN = require('./../_models/_global/gebeurtenis-leveren.js')(true)

const specification: Specification = {
  layoutSizes: [
    [1024, 700],
    [375, 667]
  ],
  layoutDirection: 'vertical',
  pages: [
    [
      {
        model: GEBEURTENIS_LEVEREN,
        Collection: {
          // switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
        }
      },
      {
        model: GEBEURTENIS_LEVEREN,
        pageTitle: 'Geb > Nieuw',
        Collection: {
          mode: 'new',
          // switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
        }
      }
    ],
    [
      {
        model: ORGANISATIE,
        pageTitle: 'Organisaties',
        Collection: {
          // switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
        }
      },
      {
        model: ORGANISATIE,
        pageTitle: 'Organisaties > Nieuw',
        Collection: {
          mode: 'new',
          // switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie']
        }
      }
    ]
  ]
}
