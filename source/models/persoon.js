const ORGANISATIE = require('./organisatie.js')

module.exports =  {
  title: 'Persoon',
  titlePlural: 'Personen',
  sampleTitle: 'Timo Hofmeijer',
  data: [
    {
      title: 'Naam',
      sampleData: 'name'
    },
    {
      title: 'Geslacht',
      sampleData: 'gender'
    },
    {
      title: 'Geboortedatum',
      sampleData: 'date'
    },
    {
      relation: ORGANISATIE,
      relationType: 'single'
    }
  ]
}
