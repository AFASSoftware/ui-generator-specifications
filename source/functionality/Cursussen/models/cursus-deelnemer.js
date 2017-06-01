const PERSOON = require('./../../../models/persoon.js')

module.exports = {
  title: 'Cursist',
  titlePlural: 'Cursisten',
  sampleTitle: 'Harold Quack',
  data: [
    ...PERSOON.data,
    {
      title: 'Gevolgde cursussen',
      sampleData: ['integer', { min: 0, max: 11 }]
    }
    // {
    //   title: 'Gemiddelde Beoordeling',
    //   sampleData: ['integer', { min: 2, max: 10 }]
    // },
  ]
}
