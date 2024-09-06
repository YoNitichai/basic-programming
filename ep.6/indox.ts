const animals: string = 'หมา*เเมว*กระต่าย*หมุ'
const animalsarray: string[]= animals.split('*')

console.log('เติม:',animalsarray)

animalsarray.pop()// ดึงตัวสุดท้ายออก
 console.log('ดึงตัวท้าย:' ,animalsarray)

animalsarray.push('กาบีบาร่า')

console.log('ใส่ใหม่:' , animalsarray)

animalsarray.shift()

console.log('ดึงตัวหน้า:' ,animalsarray)

animalsarray.unshift('เเรด')

console.log('ใส่ตัวหน้า:', animalsarray)

console.log('เรื่องก-ฮ:', animalsarray.sort())

console.log('เรื่องก-ฮ:', animalsarray.reverse())

console.log('slice0.2:', animalsarray.slice(0.2))





const fruits = ["banana","orange","apple","mango"];
fruits.sort();//เรื่องa-z
console.log(fruits)//["banana","orange","apple","mango"]

