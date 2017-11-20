
module.exports = (deep) => {

  let model = {
    title: 'Programma',
    titlePlural: 'Programmas',
    sampleTitle: 'Programma AFAS Live 2017',
    data: [
      {
        title: 'Naam',
        sampleData: 'name'
      }
    ]
  }

  if (deep) {
    model.data = model.data.concat([
      //
    ])
  }

  return model
}
