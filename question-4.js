// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

const minQuantiyy = inventory.reduce((min, item) => {
  if (item.quantity < min.quantity) {
    return item;
  }
  return min;
}, inventory[0]);

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantiyy.name} ซึ่งมี ${minQuantiyy.quantity} ชิ้น`);  
