module.exports = (deep) => {

  let model = {
    title: 'Evenement',
    titlePlural: 'Evenementen',
    sampleTitle: 'AFAS Open 2017',
    data: [
      {
        title: 'Naam',
        sampleData: 'word'
      }
    ]
  }

  if (deep) {
    // IMPORT GLOBAL MODELS
    const LOCATIE = require('./../../../models/locatie.js')()

    // IMPORT LOCAL MODELS
    const SESSIE = require('./sessie.js')()
    const DEELNEMER = require('./deelnemer.js')()
    const INTRODUCEE = require('./introducee.js')()
    const PROGRAMMA = require('./programma.js')()
    const DRAAIBOEK = require('./draaiboek.js')()
    const CREWLID = require('./crewlid.js')()
    const DECLARATIE = require('./declaratie.js')()

    model.data = model.data.concat([
      {
        title: 'Datum',
        sampleData: 'date'
      },
      {
        title: 'Verantwoordelijke',
        sampleData: 'date'
      },
      {
        title: 'Ruimte',
        relation: LOCATIE,
        relationType: 'single'
      },
      {
        title: 'Budget',
        sampleData: 'euro'
      },
      {
        title: 'Kosten',
        sampleData: 'euro'
      },
      {
        title: 'Omschrijving',
        sampleData: 'integer'
      },
      {
        relation: PROGRAMMA,
        relationType: 'single'
      },
      {
        relation: DRAAIBOEK,
        relationType: 'single'
      },
      {
        relation: SESSIE,
        relationType: 'many'
      },
      {
        relation: DEELNEMER,
        relationType: 'many'
      },
      {
        relation: CREWLID,
        relationType: 'many'
      },
      {
        relation: DECLARATIE,
        relationType: 'many'
      },
      {
        title: 'Deelnemer minimum',
        sampleData: 'integer'
      },
      {
        title: 'Deelnemer maximum',
        sampleData: 'integer'
        /* Per:
          - leeftijd
          - organisatie
          - klant
          - max aantal inschrijvingen per persoon
          - max aantal inschrijvingen per persoon, per periode
          ...
        */
      },
      {
        title: 'Introducees toestaan',
        sampleData: 'yesno'
      },
      {
        title: 'Introducees vastleggen',
        sampleData: 'yesno'
      },
      {
        title: 'Inschrijving open per',
        sampleData: 'date'
      }
    ])
  }

  return model
}
