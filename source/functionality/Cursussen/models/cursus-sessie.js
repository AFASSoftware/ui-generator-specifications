const DOCENT = require('./cursus-docent.js')
const RUIMTE = require('./../../../models/ruimte.js')

module.exports = {
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
      reference: DOCENT
    },
    {
      reference: RUIMTE
    },
    {
      title: 'Omschrijving',
      sampleData: ['paragraph', { sentences: 1 }]
    }
  ]
}
