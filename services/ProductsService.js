const PRODUCTS = [
    {
        id: 1,
        name: 'JET NOIR',
        price: 260.50,
        image: require('../assets/products/watch1.jpg'),
        description: 'The Jet Noir takes on a sharp black and silver colorway, pulled from jet black leathers in California modern design. Italian tanned leather straps, a matte face and domed crystal complete this 41mm stainless steel case. A special exhibition case back reveals the dynamic intricacies of the automatic movement.'
    },
    {
        id: 2,
        name: 'LION GOLD',
        price: 203.94,
        image: require('../assets/products/watch2.jpg'),
        description: "Be the man of the hour. The Lion Gold balances the sophistication of a dress watch with the soul of tomorrow's entrepreneur.Featuring gold steel mesh and a black dial."
    },
    {
        id: 3,
        name: 'ELEMENT CERAMIC',
        price: 2,
        image: require('../assets/products/watch3.jpg'),
        description: 'Dress in rare form. The best selling Element watch meets the smooth, highly resistant sheen of white ceramic.'
    },
    {
        id: 4,
        name: 'SIGNATURE WATCH POUCH',
        price: 400.00,
        image: require('../assets/products/leathercase1.jpg'),
        description: 'A travel-ready Italian camel leather watch pouch embossed with MVMT’s signature hourglass logo. Holds one watch and is sealed with a snap closure.'
    },
    {
        id: 5,
        name: 'PLATFORM CUFF',
        price: 233.94,
        image: require('../assets/products/jewelery1.jpg'),
        description: "A modern take on a timeless men'ss jewelry piece that signifies power and valor."
    },
    {
        id: 6,
        name: 'MODERN CHAIN BRACELET',
        price: 55.39,
        image: require('../assets/products/jewelery2.jpg'),
        description: 'A minimalist curb chain with the ideal balance of sleekness and edge.'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}