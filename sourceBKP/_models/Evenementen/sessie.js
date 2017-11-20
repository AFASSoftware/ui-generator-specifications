
module.exports = (deep) => {

  let model = {
    title: 'Sessie',
    titlePlural: 'Sessies',
    sampleTitle: 'Sessie 1',
    data: [
      {
        title: 'Naam',
        sampleData: 'word'
      }
    ]
  }

  if (deep) {
    model.data = model.data.concat([
      {
        title: 'Begintijd',
        sampleData: ['time', { min: 9, max: 18 }]
      },
      {
        title: 'Eintijd',
        sampleData: ['time', { min: 8, max: 18 }]
      },
      {
        title: 'Omschrijving',
        sampleData: ['paragraph', { sentences: 1 }]
      }
    ])
  }

  return model
}
