{
  "Collection": {
    "model": {
      "title": "Organisatie",
      "titlePlural": "Organisaties",
      "sampleTitle": "ACME Corp",
      "data": [
        {
          "title": "Naam",
          "sampleData": "_organisatie"
        },
        {
          "title": "Adres",
          "sampleData": "address"
        },
        {
          "title": "Medewerkers",
          "sampleData": [
            "integer",
            {
              "min": 1,
              "max": 1500
            }
          ]
        },
        {
          "title": "Contactpersoon",
          "relation": {
            "title": "Persoon",
            "titlePlural": "Personen",
            "sampleTitle": "Timo Hofmeijer",
            "data": [
              {
                "title": "Naam",
                "sampleData": "name"
              }
            ]
          },
          "relationType": "single"
        }
      ]
    },
    "switcher": [
      "Alle ingeplande cursussen",
      "Aankomend",
      "Historie"
    ],
    "Table": {}
  }
}