let firstnums = 0
let secondnums = 0


function luck_check(str) {
 if (str === NaN) {
   return "please enter a valid number"}
 else {
  let digits = str.split('')
  for (i = 0 ; i < (digits.length / 2); i++) {
    firstnums += parseInt(digits[i])
    console.log(digits[i])
  }
  console.log('-----')
  for (i = (digits.length / 2); i<digits.length ; i++) {
             secondnums += parseInt(digits[i])
             console.log(digits[i])

         }
     return (firstnums === secondnums)
     }
   }

  console.log(luck_check('003111'))
  console.log(luck_check('5673111'))
