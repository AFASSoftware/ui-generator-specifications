
module.exports = (deep) => {

  let model = {
    title: 'Organisatie',
    titlePlural: 'Organisaties',
    sampleTitle: 'ACME Corp',
    data: [{
      title: 'Naam',
      sampleData: '_organisation'
    }]
  }

  if (deep) {
    model.data = model.data.concat([
      {
        title: 'Adres',
        sampleData: 'address'
      },
      {
        title: 'Medewerkers',
        sampleData: ['integer', { min: 1, max: 1500 }]
      }
    ])
  }

  return model
}
