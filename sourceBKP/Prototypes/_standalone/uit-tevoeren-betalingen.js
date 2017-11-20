
module.exports = {
  type: 'Page.Collection',
  collection: {
    actions: [
      ['Inschrijven', 'arrowRight', 'primary']
    ],
    count: 3,
    model: {
      title: 'Uit te voeren betaling',
      titlePlural: 'Uit te voeren betalingen',
      data: [
        {
          title: 'Datum',
          sampleData: 'date'
        },
        {
          title: 'Crediteur',
          sampleData: '_organisatie'
        },
        {
          title: 'Bron',
          sampleData: ['integer', {min: 10000, max: 99999}, ['Verkoopfactuur ']]
        },
        {
          title: 'Totaal',
          sampleData: ['euro', {min: 100, max: 9999}]
        },
        {
          title: 'Betaald',
          sampleData: ['euro', {min: 100, max: 9999}]
        },
        {
          title: 'Saldo',
          sampleData: ['euro', {min: 100, max: 9999}]
        }
      ]
    }
  }
}
