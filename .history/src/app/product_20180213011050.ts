export class Product {
    _id: string;
    imagePath: string;
    title: string;
    description: string;
    price: string;
    publishedAt: string;
  }

  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}