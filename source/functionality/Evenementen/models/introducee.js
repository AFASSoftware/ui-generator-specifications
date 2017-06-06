// IMPORT GLOBAL MODELS
const PERSOON = require('./../../../models/persoon.js')

// IMPORT LOCAL MODELS
const DEELNEMER = require('./../models/deelnemer.js')

module.exports = {
  title: 'Introducee',
  titlePlural: 'Introducees',
  sampleTitle: 'Jane Doe',
  data: [
    ...PERSOON.data,
    {
      title: 'Aantal bezochte evenementen',
      sampleData: 'integer'
    },
    {
      relation: DEELNEMER
    }
  ]
}
