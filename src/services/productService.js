import products from "../data/product";

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 700);
  });
}

export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(
        (item) => item.id === productId
      );

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 500);
  });
}