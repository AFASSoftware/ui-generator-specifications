const PERSOON = require('./../../../models/persoon.js')

module.exports = {
  title: 'Docent',
  titlePlural: 'Docenten',
  sampleTitle: 'Piet Hein',
  data: [
    ...PERSOON.data,
    {
      title: 'Gegeven cursussen',
      sampleData: ['integer', { min: 0, max: 120 }]
    }
  ]
}
