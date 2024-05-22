// Question #3
let userPassword = "swnalWadqQ";
//let userPassword = "TechUp"
//let userPassword = "abcde"
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
    const userPasswordLength = userPassword.length;

    if (userPasswordLength < 6 ){
        return "Weak";
    } else if (userPasswordLength >= 6 && userPasswordLength <= 9) {
        return "Medium";
    } else {
        return "Strong";
    }
}
const result = checkPasswordStrength(userPassword);
console.log(result);