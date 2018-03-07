const Product = require('../models/product');
const mongoose = require('mongoose');

// Connect To Database (OLD CODE)
mongoose.connect(config.database, { useMongoClient: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const products = [
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81P22uL4nIL._AC_UL320_SR224,320_.jpg',
        title: 'Dishonored 2',
        description: 'Dishonored 2 is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks.',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Destiny_2_%28artwork%29.jpg/220px-Destiny_2_%28artwork%29.jpg',
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
        imagePath: 'https://vignette.wikia.nocookie.net/fallout/images/e/e9/Fallout_4_box_cover.jpg/revision/latest?cb=20170220211249',
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
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Uncharted_4_box_artwork.jpg/220px-Uncharted_4_box_artwork.jpg',
        title: 'Uncharted 4',
        description: 'Uncharted 4: A Thiefs End is an action-adventure video game developed by Naughty Dog and published by Sony Computer Entertainment for PlayStation 4. It was released worldwide on May 10, 2016.',
        price: 15
    }),
];

let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if
    });
}

function exit () {
   mongoose.disconnect();
}
