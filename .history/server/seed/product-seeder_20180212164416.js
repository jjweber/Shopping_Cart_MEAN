const Product = require('../models/product');

const products = [
    new Product({
        imagePath: '../../src/assets/images/Dishonored2.jpg',
        title: 'Dishonored 2',
        description: 'Dishonored 2 is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks.',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/Destiny2.jpg',
        title: 'Destiny 2',
        description: 'Destiny 2 is an online-only multiplayer first-person shooter video game developed by Bungie and published by Activision.',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/Batman_Arkham.jpg',
        title: 'Batman Arkham',
        description: 'Batman: Arkham Asylum is a 2009 action-adventure video game developed by Rocksteady Studios and published by Eidos Interactive in conjunction with Warner Bros..',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/Fallout_4.jpg',
        title: 'Fallout 4',
        description: 'Fallout 4 is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/CallOfDuty_BO.jpg',
        title: 'Call Of Duty Black Ops',
        description: 'Call of Duty: Black Ops is a first-person shooter video game, developed by Treyarch and published by Activision.',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/gta.jpg',
        title: 'Grand Theft Auto 5',
        description: 'Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games.',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/Uncharted4.jpg',
        title: 'Uncharted 4',
        description: '',
        price: 15
    }),
];