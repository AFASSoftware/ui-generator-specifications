const RUIMTE = require('./../../../models/ruimte.js')
const SESSIE = require('./cursus-sessie.js')
const INGEPLAND = require('./cursus-ingepland.js')


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
      relation: SESSIE,
      relationType: 'many'
    },
    {
      relation: INGEPLAND,
      relationType: 'many'
    },
    {
      relation: RUIMTE,
      relationType: 'single'
    },
    {
      title: 'Beschrijving',
      sampleData: ['paragraph', { sentences: 1 }]
    }
  ]
}
