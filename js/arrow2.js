const res = (a,b) => a + b;

console.log(res(1,2));


// 커링 펑션은 파라미터를 순차적으로 입력하는 것

const res2 = a => b => a+b;

console.log(res2(1)(2));

const res3 =  a => b => c => a + b + c;
console.log(res3(1)(2)(3))