
module.exports = (deep) => {

  let model = {
    title: 'Notificatie',
    titlePlural: 'Notificaties',
    sampleTitle: 'Nieuw bericht van Michelle Veldhoen',
    data: [{
      title: 'Omschrijving',
      sampleData: '_notificatie'
    }]
  }

  if (deep) {
    model.data = model.data.concat([
      {
        title: 'Bron',
        sampleData: '_teLeverenPakbonRegels'
      },
      {
        title: 'Datum',
        sampleData: 'date'
      }
    ])
  }

  return model
}
