// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

for (const item of inventory) {
  if (item.name === "Apple") {
    item.quantity = 200;
    break;
  }
}

inventory.push({name: "Orange", price: 20, quantity: 300});

let totalInventory = 0;

for (const item of inventory) {
  totalInventory += item.price * item.quantity;
}

//console.log(inventory);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalInventory} บาท`);
