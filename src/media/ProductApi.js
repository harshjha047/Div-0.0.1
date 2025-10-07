// import "NikeAirMax" from "./"NikeAirMax"270.jpg";
// import "NikeLogo" from "./"NikeLogo".jpeg";
// import "PumaLogo" from "./puma.jpeg";
// import "AdidasLogo" from "./Adidas.jpeg";
// import "PumaPark" from "./PumaMensParkLifestyleStreetLaceUp.jpeg";
// import "ADIDASVENTO" from "./"ADIDASVENTO".jpg";
const products = {
  All: [
    {
      _id: "66c7f8a1e5bcd12a34f1a001",
      name: "Puma Men's Park Lifestyle Street Lace Up",
      description:
        "Lightweight sneakers with a breathable mesh upper and responsive cushioning.",
      new_price: 14999,
      old_price: 19999,
      unit: 0,
      cost: 0,
      category: "Sneaker",
      brand: "Puma",
      brandLogo: "PumaLogo",
      stock: 25,
      images: [
        {
          url: "PumaPark",
          alt: "Puma Men's Park Lifestyle Street Lace Up",
        },
        {
          url: "https://images-static.nykaa.com/media/catalog/product/f/4/f4bf23139749501_6.jpg?tr=w-500",
          alt: "Puma Men's Park Lifestyle Street Lace Up",
        },
        {
          url: "ADIDASVENTO",
          alt: "Puma Men's Park Lifestyle Street Lace Up",
        },
      ],
      seller: "66c7f0123e5bcd12a34f1001",
      rating: 4.5,
      reviews: [
        {
          user: "66c7f7123e5bcd12a34f1009",
          name: "John Doe",
          comment: "Very comfortable, perfect for running!",
          rating: 1,
          createdAt: "2025-08-20T10:12:45.000Z",
        },
        {
          user: "66c7f7123e5bcd12a34f1009",
          name: "John Doe",
          comment: "Very comfortable, perfect for running!",
          rating: 5,
          createdAt: "2025-08-20T10:12:45.000Z",
        },
        {
          user: "66c7f7123e5bcd12a34f1009",
          name: "John Doe",
          comment: "Very comfortable, perfect for running!",
          rating: 5,
          createdAt: "2025-08-20T10:12:45.000Z",
        },
        {
          user: "66c7f7123e5bcd12a34f1009",
          name: "John Doe",
          comment: "Very comfortable, perfect for running!",
          rating: 1,
          createdAt: "2025-08-20T10:12:45.000Z",
        },
      ],
      variants: [
        { type: "color", value: "black" },
        { type: "color", value: "red" },
        { type: "color", value: "blue" },
        { type: "size", value: "8" },
        { type: "size", value: "9" },
      ],
      isActive: true,
      createdAt: "2004-02-12T10:25:11.000Z",
      updatedAt: "2025-09-08T12:05:42.000Z",
    },
    {
      _id: "66c7f8a1e5bcd12a34f1a002",
      name: "Nike Air Max 270",
      description:
        "Lightweight sneakers with a breathable mesh upper and responsive cushioning.",
      new_price: 14999,
      old_price: 39999,
      unit: 0,
      cost: 0,
      category: "Shoes",
      brand: "Nike",
      brandLogo: "NikeLogo",
      stock: 25,
      images: [
        {
          url: "NikeAirMax",
          alt: "Nike Air Max 270 front view",
        },
      ],
      seller: "66c7f0123e5bcd12a34f1001",
      rating: 4.5,
      numReviews: 12,
      reviews: [
        {
          user: "66c7f7123e5bcd12a34f1009",
          name: "John Doe",
          comment: "Very comfortable, perfect for running!",
          rating: 5,
          createdAt: "2025-08-20T10:12:45.000Z",
        },
      ],
      variants: [
        { type: "size", value: "M", stock: 10 },
        { type: "size", value: "L", stock: 15 },
      ],
      isActive: true,
      createdAt: "2025-08-21T09:25:11.000Z",
      updatedAt: "2025-08-22T12:05:42.000Z",
    },
    {
      _id: "66c7f8a1e5bcd12a34f1a003",
      name: "ADIDAS VENTO",
      description:
        "Lightweight sneakers with a breathable mesh upper and responsive cushioning.",
      new_price: 14999,
      old_price: 19999,
      unit: 0,
      cost: 0,
      category: "Shoes",
      brand: "Adidas",
      brandLogo: "AdidasLogo",
      stock: 25,
      images: [
        {
          url: "ADIDASVENTO",
          alt: "ADIDAS VENTO",
        },
      ],
      seller: "66c7f0123e5bcd12a34f1001",
      rating: 4.5,
      numReviews: 12,
      reviews: [
        {
          user: "66c7f7123e5bcd12a34f1009",
          name: "John Doe",
          comment: "Very comfortable, perfect for running!",
          rating: 5,
          createdAt: "2025-08-20T10:12:45.000Z",
        },
      ],
      variants: [
        { type: "size", value: "M", stock: 10 },
        { type: "size", value: "L", stock: 15 },
      ],
      isActive: true,
      createdAt: "2025-08-21T09:25:11.000Z",
      updatedAt: "2025-08-22T12:05:42.000Z",
    },

  ],
};

export default products;
