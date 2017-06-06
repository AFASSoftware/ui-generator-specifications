const AANBOD = require('./cursus-aanbod.js')
const SESSIE = require('./cursus-sessie.js')
const DOCENT = require('./cursus-docent.js')
const RUIMTE = require('./../../../models/ruimte.js')
const FACTUURREGEL = require('./../../../models/factuurregel.js')

module.exports = {
  title: 'Ingeplande cursus',
  titlePlural: 'Ingeplande cursussen',
  sampleTitle: 'HRM Basis - 20 juni',
  data: [
    {
      relation: AANBOD,
      relationType: 'single'
    },
    {
      title: 'Datum',
      sampleData: 'date',
      sort: true
    },
    {
      relation: DOCENT,
      relationType: 'single'
    },
    {
      title: 'Bezetting',
      sampleData: ['x..y', { min: 0, max: 26 }]
    },
    {
      title: 'Opening inschrijving',
      sampleData: 'date'
    },
    {
      title: 'Sluiting inschrijving',
      sampleData: 'date'
    },
    {
      relation: RUIMTE,
      relationType: 'single'
    },
    {
      relation: SESSIE,
      relationType: 'many'
    },
    {
      relation: FACTUURREGEL,
      relationType: 'many'
    },
    {
      title: 'Beschrijving',
      sampleData: 'paragraph'
    }
  ]
}
