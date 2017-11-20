
module.exports = (deep) => {

  const AANBOD = require('./aanbod.js')()
  let model = {
    title: 'Ingeplande cursus',
    titlePlural: 'Ingeplande cursussen',
    sampleTitle: 'HRM Basis - 20 juni',
    data: [{
      relation: AANBOD,
      relationType: 'single'
    }]
  }

  if (deep) {
    const SESSIE = require('./sessie.js')()
    const DOCENT = require('./docent.js')()
    const CURSIST = require('./deelnemer.js')()
    const RUIMTE = require('./../_global/ruimte.js')()
    const FACTUURREGEL = require('./../_global/factuurregel.js')()
    model.data = model.data.concat([
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
        relation: CURSIST,
        relationType: 'many'
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
    ])
  }

  return model
}
