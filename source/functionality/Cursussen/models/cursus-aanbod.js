const RUIMTE = require('./../../../models/ruimte.js')

module.exports = {
  title: 'Cursus aanbod',
  titlePlural: 'Cursus aanbod',
  sampleTitle: 'Basiscursus HRM',
  data: [
    {
      title: 'Naam',
      sampleData: '_course',
      sort: true
    },
    {
      title: 'Onderwerp',
      sampleData: '_courseTopic'
    },
    {
      title: 'Prijs',
      sampleData: ['euro', { min: 60, max: 300 }],
    },
    {
      title: 'Aantal Cursisten',
      sampleData: ['x..y', { min: 5, maxmin: 10, max: 25, minmax: 15, seperator: '-' }]
    },
    {
      reference: RUIMTE
    },
    {
      title: 'Beschrijving',
      sampleData: ['paragraph', { sentences: 1 }]
    }
  ]
}
