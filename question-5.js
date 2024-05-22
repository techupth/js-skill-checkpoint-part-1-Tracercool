// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
//const promotionCode = "SALE20";
//const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  const totalPrice = products.reduce((total, product) => {
    return total + (product.price * product.quantity); 
  }, 0); //คำนวณราคารวมของสินค้า

  //การให้โปรโมชั่น
  let discount = 0;
  if (promotionCode === "SALE20") {
    discount = totalPrice * 0.2;
  } else if (promotionCode === "SALE50") {
    discount = totalPrice * 0.5;
  }

  const updatePrice = totalPrice - discount;
  return updatePrice;
}

const totalPrice = calculateTotalPrice(products, promotionCode);
console.log(totalPrice);