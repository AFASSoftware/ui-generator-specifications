// IMPORT LOCAL MODELS
const CREWLID = require('./crewlid.js')
const EVENEMENT = require('./evenement.js')

module.exports = {
  title: 'Declaratie',
  titlePlural: 'Declaraties',
  sampleTitle: '2 party-tenten',
  data: [
    {
      title: 'beschrijving',
      sampleData: 'word'
    },
    {
      title: 'bedrag',
      sampleData: 'euro'
    },
    {
      relation: EVENEMENT
    },
    {
      relation: CREWLID
    }
  ]
}
