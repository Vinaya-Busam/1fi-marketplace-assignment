import emiPlans from "../data/emiPlans";

export function getEmiPlans(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const plans = emiPlans[productId];

      if (plans) {
        resolve(plans);
      } else {
        reject(new Error("EMI plans not available"));
      }
    }, 600);
  });
}