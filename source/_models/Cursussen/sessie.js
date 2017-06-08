
module.exports = (deep) => {

  let model = {
    title: 'Sessie',
    titlePlural: 'Sessies',
    sampleTitle: 'Sessie 1',
    data: [{
      title: 'Naam',
      sampleData: ['time', { min: 1, max: 8 }, ['Sessie ', '']]
    }]
  }

  if (deep) {
    const DOCENT = require('./docent.js')()
    const RUIMTE = require('./../_global/ruimte.js')()
    model.data = model.data.concat([
      {
        title: 'Begintijd',
        sampleData: ['time', { min: 9, max: 18 }]
      },
      {
        title: 'Eintijd',
        sampleData: ['time', { min: 8, max: 18 }]
      },
      {
        relation: DOCENT,
        relationType: 'single'
      },
      {
        relation: RUIMTE,
        relationType: 'single'
      },
      {
        title: 'Omschrijving',
        sampleData: ['paragraph', { sentences: 1 }]
      }
    ])
  }

  return model
}
