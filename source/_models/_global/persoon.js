
module.exports = (deep) => {

  let model = {
    title: 'Persoon',
    titlePlural: 'Personen',
    sampleTitle: 'Timo Hofmeijer',
    data: [{
      title: 'Naam',
      sampleData: 'name'
    }]
  }

  if (deep) {
    const ORGANISATIE = require('./organisatie.js')()
    model.data = model.data.concat([
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
    ])
  }

  return model
}
