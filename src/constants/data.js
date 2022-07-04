import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '€12',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '€9',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '€9',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '€7',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '€6',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '€9',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Pisco Sour",
    price: '€11',
    tags: 'Pisco | Lime |Cinnamon | Large egg white',
  },
  {
    title: 'Daiquiri',
    price: '€10',
    tags: 'Rum | Citrus juie | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '€10',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '€12',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
