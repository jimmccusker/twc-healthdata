var facets = [
  {'id': 'subjects',
    'facetPredicates': ['dcterms:subject'],
    'facetLabelPredicates': 'skos:prefLabel'
  },
  {'id': 'keywords',
    'facetPredicates': ['dcat:keyword'],
  },
  {'id': 'dates_modified',
    'facetPredicates': ['dcterms:modified'],
    'facetEntityCast': 'xsd:date',
  },
];