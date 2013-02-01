// fizz buzz test - numbers 1 to 100 - multiples of 3 print "Fizz" - multiples of 5 print 'Buzz'. multiples of both 3 and 5 print 'FizzBuzz'.


for(i=1;i<=100;i++)
if (i%3===0){
console.log('Fizz')
}
else if (i%5===0){
console.log('Buzz')
}
else if (i%3===0 & i%5===0){
console.log('FizzBuzz')
}
else
console.log(i)

