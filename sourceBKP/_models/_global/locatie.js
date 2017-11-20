
module.exports = (deep) => {

  let model = {
    title: 'Locatie',
    titlePlural: 'Locaties',
    sampleTitle: 'AFAS Live',
    data: [{
      title: 'Naam',
      sampleData: '_locatie'
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
