// IMPORT GLOBAL MODELS
const PERSOON = require('./../../../models/persoon.js')

// IMPORT LOCAL MODELS
const INTRODUCEE = require('./introducee.js')

module.exports = {
  title: 'Deelnemer',
  titlePlural: 'Deelnemers',
  sampleTitle: 'John Doe',
  data: [
    ...PERSOON.data,
    {
      title: 'Aantal bezochte evenementen',
      sampleData: 'integer'
    },
    {
      relation: INTRODUCEE
    }
  ]
}
