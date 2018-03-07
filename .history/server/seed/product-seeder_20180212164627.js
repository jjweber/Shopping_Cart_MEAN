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
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg',
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
        imagePath: 'https://i.pinimg.com/736x/f6/41/91/f641916d95f0d8aac11121fdb4d90d63--haul-video-games.jpg',
        title: 'Call Of Duty Black Ops',
        description: 'Call of Duty: Black Ops is a first-person shooter video game, developed by Treyarch and published by Activision.',
        price: 15
    }),
    new Product({
        imagePath: 'http://tsuts.tskoli.is/hopar/GRU_H5/GRU/gta.jpg',
        title: 'Grand Theft Auto 5',
        description: 'Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games.',
        price: 15
    }),
    new Product({
        imagePath: '../../src/assets/images/Uncharted4.jpg',
        title: 'Uncharted 4',
        description: 'Uncharted 4: A Thiefs End is an action-adventure video game developed by Naughty Dog and published by Sony Computer Entertainment for PlayStation 4. It was released worldwide on May 10, 2016.',
        price: 15
    }),
];