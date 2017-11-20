
module.exports = (deep) => {

  let model = {
    title: 'Taak',
    titlePlural: 'Actuele Taken',
    sampleTitle: 'Loonberekening voor Arno Brehler accorderen',
    data: [{
      title: 'Omschrijving',
      sampleData: '_taak'
    }]
  }

  if (deep) {
    const PERSOON = require('./persoon.js')()
    model.data = [
      {
        title: 'Taak',
        sampleData: '_taak'
      },
      {
        title: 'Datum',
        sampleData: 'date'
      },
      {
        title: 'Type',
        sampleData: '_gebeurtenis'
      },
      {
        title: 'Verantwoordelijke',
        relation: PERSOON,
        relationType: 'single'
      },
      {
        title: 'Afgehandeld door',
        relation: PERSOON,
        relationType: 'single'
      },
      {
        title: 'Afhandel datum',
        sampleData: 'date'
      }
    ]
  }

  return model
}
