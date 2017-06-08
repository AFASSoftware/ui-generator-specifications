
module.exports = (deep) => {

  let model = {
    title: 'Ruimte',
    titlePlural: 'Ruimtes',
    sampleTitle: 'Wattzaal 2.04',
    data: [{
      title: 'Naam',
      sampleData: '_location_space'
    }]
  }

  if (deep) {
    model.data = model.data.concat([
      {
        title: 'Capaciteit',
        sampleData: ['integer', { min: 5, max: 80 }, [ '', ' personen' ]]
      }
    ])
  }

  return model
}
