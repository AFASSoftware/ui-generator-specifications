/*
Omschrijving
  Week 18
Boekjaar
  *Boekjaar 2015 (weekkalender op basis van kalenderjaar)
Begindatum
  Maandag 27 april 2015
Einddatum
  Zondag 3 mei 2015
*/
module.exports = (deep) => {

  let model = {
    title: 'Periode',
    titlePlural: 'Perioden',
    sampleTitle: 'Week 18 (Boekjaar 2015 - weekkalender op basis van kalenderjaar)',
    data: [{
      title: 'Omschrijving',
      sampleData: 'Week 18 (Boekjaar 2015 - weekkalender op basis van kalenderjaar)'
    }]
  }

  if (deep) {
    const BOEKJAAR = require('./boekjaar.js')()

    model.data = model.data.concat([
      {
        title: 'Boekjaar',
        relation: BOEKJAAR,
        relationType: 'single'
      },
      {
        title: 'Begindatum',
        sampleData: 'date'
      },
      {
        title: 'Einddatum',
        sampleData: 'date'
      }
    ])
  }

  return model
}
