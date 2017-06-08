module.exports = (deep) => {

  let model = {
    title: 'Draaiboek',
    titlePlural: 'Draaiboeken',
    sampleTitle: 'Draaiboek AFAS Live 2017',
    data: [
      {
        title: 'Naam',
        sampleData: ['time', { min: 1, max: 8 }, ['Sessie ', '']]
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
