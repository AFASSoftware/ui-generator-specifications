
module.exports = (deep) => {

  let model = {
    title: 'Organisatie',
    titlePlural: 'Organisaties',
    sampleTitle: 'ACME Corp',
    data: [{
      title: 'Naam',
      sampleData: '_organisatie'
    }]
  }

  if (deep) {
    const PERSOON = require('./persoon.js')()
    model.data = model.data.concat([
      {
        title: 'Adres',
        sampleData: 'address'
      },
      {
        title: 'Medewerkers',
        sampleData: ['integer', { min: 1, max: 1500 }]
      },
      {
        title: 'Contactpersoon',
        relation: PERSOON,
        relationType: 'single'
      }
    ])
  }

  return model
}
