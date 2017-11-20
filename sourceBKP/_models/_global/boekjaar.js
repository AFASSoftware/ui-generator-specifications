/*
Omschrijving
  Boekjaar 2015
Kalender voor jaarkalender goederenstroom
  *weekkalender op basis van kalenderjaar
Begindatum
  Donderdag 1 januari 2015
Einddatum
  Donderdag 31 december 2015
Aantal perioden
  52
*/

module.exports = (deep) => {

  let model = {
    title: 'Boekjaar',
    titlePlural: 'Boekjaar',
    sampleTitle: 'Boekjaar 2015 (weekkalender op basis van kalenderjaar)',
    data: [{
      title: 'Omschrijving',
      sampleData: 'Boekjaar 2015 (weekkalender op basis van kalenderjaar)'
    }]
  }

  if (deep) {
    const KALENDER = require('./boekjaar.js')()

    model.data = model.data.concat([
      {
        title: 'Kalender voor jaarkalender goederenstroom',
        relation: KALENDER,
        relationType: 'single'
      },
      {
        title: 'Begindatum',
        sampleData: 'date'
      },
      {
        title: 'Einddatum',
        sampleData: 'date'
      },
      {
        title: 'Aantal perioden',
        sampleData: '52'
      }
    ])
  }

  return model
}
