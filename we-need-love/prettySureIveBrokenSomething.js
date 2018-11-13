asyncFunc1((err, result1) => {
  asyncFunc2();
});

asyncFunc2(result1, (err, result2) => {
  asyncFunc3();
})
asyncFunc3(result2, (err, result3) => {
  console.log()
})