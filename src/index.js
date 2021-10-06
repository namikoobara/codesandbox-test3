/**
 * const let等の変数宣言
 */

// var val1="var変数";
// console.log(val1);
// //var変数は上書き可能
// val1="var変数は上書き";
// console.log(val1);
// //var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

//

// const val3="const変数";
// console.log(val3);

// // val3="const overwritten";

// const val3="const redeclared";

// const val4={
//   name:"じゃけえ",
//   age:26,
// };
// val4.name ="jak";
// console.log(val4);

// const val5=['dog','cat'];
// val5[0]='bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "じゃけえ";
//  const age = 28;
//  const message1="私の名前は"+ name+ "です。年齢は"+age+ "です。";
//  console.log(message1);

// function func1(str){
// return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) =>{
//   return str;
// }
// console.log(func2("func2desu"));

// const func3 =(num1, num2) => num1 + num2

// console.log(func3(10,20));

// const myProfile = {
//   name:"じゃけえ",
//   age:28,
// };

// const {name,age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["じゃけえ", 28];

// // const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const sayHallo = (name="ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHallo();

// const arry1=[1,2];
// // console.log(arry1);
// // console.log(...arry1);

// const sumFunc=(num1,num2)=>console.log (num1+num2);
// sumFunc(arry1[0],arry1[1]);
// sumFunc(...arry1);

// const arry2=[1,2,3,4,5];
// const [num1,num2, ...arry3] = arry2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

// const arry4 = [10,20];
// const arry5 = [30,40];

// const arry6 = [...arry4];
// arry6[0] =100;
// console.log(arry6);
// console.log(arry4);

// const arry7 = [...arry4,...arry5];
// console.log(arry7);

const nameArry = ["tanaka", "yamada", "jyake"];
// for (let index=0; index<nameArry.length; index++){
//   console.log(`${index+1}番目は${nameArry[index]}です。`);
// }

// const nameArry2 = nameArry.map((name)=>{
//   return(name)
// })
// console.log(nameArry2);

// nameArry.map ((name, index) => console.log (`${index+1}番目は${name}です`));

// const numArry = [1,2,3,4,5];
// const newnumArry = numArry.filter((num)=>{
//   return num % 2 === 1;
// });

// console.log(newnumArry);

// const newNameArry =nameArry.map ((name)=>{
//   if (name === "jyake"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArry);

//
// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';

// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1+num2 > 100 ? '100を超えています！！'　: '許容範囲内です';
// }
// console.log(checkSum(50,40));

// const flag1= true ;
// const flag2= true ;

// if (flag1 || flag2){
//   console.log("１か２はtrueになります");
// }

// if (flag1 && flag2 ){
//   console.log("１も２もtrueになります");
// }

// const num = null;
// const fee = num||"金額未設定です";
// console.log(fee);

const num2 = null;
const fee2 = num2 && "何か設定されています";
console.log(fee2);
