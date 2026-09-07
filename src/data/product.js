const products = [
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    brand: "Apple",
    price: 59999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    description:
      "The iPhone 15 features a powerful camera system, a vibrant display and the A16 Bionic chip.",
    variants: [
      {
        id: "black-128",
        color: "Black",
        storage: "128 GB",
        price: 59999,
      },
      {
        id: "blue-128",
        color: "Blue",
        storage: "128 GB",
        price: 59999,
      },
      {
        id: "pink-256",
        color: "Pink",
        storage: "256 GB",
        price: 69999,
      },
    ],
  },

  {
    id: "samsung-s24",
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    price: 74999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
    description:
      "A premium smartphone with an advanced camera system and high-performance processor.",
    variants: [
      {
        id: "gray-256",
        color: "Gray",
        storage: "256 GB",
        price: 74999,
      },
      {
        id: "violet-256",
        color: "Violet",
        storage: "256 GB",
        price: 74999,
      },
    ],
  },

  {
    id: "sony-headphones",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 29990,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    description:
      "Premium wireless headphones with industry-leading noise cancellation.",
    variants: [
      {
        id: "black",
        color: "Black",
        storage: null,
        price: 29990,
      },
      {
        id: "silver",
        color: "Silver",
        storage: null,
        price: 29990,
      },
    ],
  },

  {
    id: "macbook-air",
    name: "Apple MacBook Air",
    brand: "Apple",
    price: 99990,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description:
      "A lightweight laptop designed for everyday productivity with powerful performance.",
    variants: [
      {
        id: "silver-256",
        color: "Silver",
        storage: "256 GB",
        price: 99990,
      },
      {
        id: "space-gray-512",
        color: "Space Gray",
        storage: "512 GB",
        price: 119990,
      },
    ],
  },

  {
    id: "boat-earbuds",
    name: "boAt Airdopes",
    brand: "boAt",
    price: 2999,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    description:
      "Wireless earbuds with immersive sound and a compact charging case.",
    variants: [
      {
        id: "black",
        color: "Black",
        storage: null,
        price: 2999,
      },
      {
        id: "white",
        color: "White",
        storage: null,
        price: 2999,
      },
    ],
  },

  {
    id: "dyson-airwrap",
    name: "Dyson Airwrap",
    brand: "Dyson",
    price: 49900,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da",
    description:
      "A versatile styling tool designed for creating curls, waves and smooth styles.",
    variants: [
      {
        id: "nickel-copper",
        color: "Nickel / Copper",
        storage: null,
        price: 49900,
      },
    ],
  },
];

export default products;