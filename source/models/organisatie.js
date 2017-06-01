
module.exports = {
  title: 'Organisatie',
  titlePlural: 'Organisaties',
  sampleTitle: 'ACME Corp',
  data: [
    {
      title: 'Naam',
      sampleData: '_organisation'
    },
    {
      title: 'Adres',
      sampleData: 'address'
    },
    {
      title: 'Medewerkers',
      sampleData: ['integer', { min: 1, max: 1500 }]
    }
  ]
}
