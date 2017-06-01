const AANBOD = require('./cursus-aanbod.js')
const DOCENT = require('./cursus-docent.js')
const RUIMTE = require('./../../../models/ruimte.js')

module.exports = {
  type: 'gebeurtenis',
  title: 'Ingeplande cursus',
  titlePlural: 'Ingeplande cursussen',
  sampleTitle: 'HRM Basis - 20 juni',
  data: [
    {
      reference: AANBOD
    },
    {
      title: 'Datum',
      sampleData: 'date',
      sort: true
    },
    {
      reference: DOCENT
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
      reference: RUIMTE
    },
    {
      title: 'Beschrijving',
      sampleData: 'paragraph'
    }
  ]
}
