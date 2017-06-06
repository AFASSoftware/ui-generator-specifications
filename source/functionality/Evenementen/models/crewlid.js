
// IMPORT GLOBAL MODELS
const PERSOON = require('./../../../models/persoon.js')

// IMPORT LOCAL MODELS
const DECLARATIE = require('./declaratie.js')

module.exports = {
  title: 'Crewlid',
  titlePlural: 'Crew leden',
  sampleTitle: 'Sara Doe',
  data: [
    ...PERSOON.data,
    {
      title: 'rol',
      sampleData: 'integer'
    },
    // {
    //   relation: DECLARATIE,
    //   relationType: 'many'
    // }
  ]
}
