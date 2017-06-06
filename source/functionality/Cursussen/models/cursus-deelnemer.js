const PERSOON = require('./../../../models/persoon.js')
const INGEPLAND = require('./cursus-ingepland.js')

module.exports = {
  title: 'Cursist',
  titlePlural: 'Cursisten',
  sampleTitle: 'Harold Quack',
  data: [
    ...PERSOON.data,

    // {
    //   title: 'Aantal gevolgde cursussen',
    //   sampleData: ['integer', { min: 0, max: 11 }]
    // },
    {
      title: 'Gevolgde cursussen',
      relation: INGEPLAND,
      relationType: 'many'
    }
    // {
    //   title: 'Gemiddelde Beoordeling',
    //   sampleData: ['integer', { min: 2, max: 10 }]
    // },
  ]
}
