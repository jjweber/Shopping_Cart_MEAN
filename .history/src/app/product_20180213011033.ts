export class Product {
    _id: string;
    imagePath: string;
    title: string;
    imageUrl: string;
    videoUrl: string;
    publishedAt: string;
  }

  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}