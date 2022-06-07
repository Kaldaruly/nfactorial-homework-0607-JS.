const Dalidas_Store_name = "Made by Dalida" 
const Address = "Almaty"
const sellerName = "Zhanna"
let StoreCount = 50
let clothesCount = 2000
let warehouse = (StoreCount > 10) ? true : false   // true

let cashier = (warehouse) ? null : undefined     // null

let movers = (clothesCount < 1000) ? true : null    // null

// object clothes 
let clothes = {
    T_short : "ck",
    sweater : "louis vuitton",
    jacket : "gucci",
    coat : "chanel",
    jeans : "adidas",
    socks : "zara",
    shorts : "dior"  
}  //clothes {ck, louis vuitton, gucci, chanel, adidas, zara, dior}

clothes.shoes = "nike"   // clothes {ck, louis vuitton, gucci, chanel, adidas, zara, dior, nike}

delete clothes.T_short   // clothes {louis vuitton, gucci, chanel, adidas, zara, dior, nike}

let colors = ["black", "white", "gray", "silver", "maroon", "red", "purple"]  // colors clothes
colors[colors.length] = "aqua"   // adds "aqua" to colors
colors.pop()  // delete "aqua" 
colors.push("qwerty")
colors.pop()

let sum = 0

sum = function add(price){
    return sum + price
}
let cloth = ["T_short", "sweater", "jacket", "coat", "jeans", "socks", "shorts"]

let cnt = 0
let mycolor = colors.filter((colors) => colors === "black")  // filter colors
colors = colors.map((colors) => `${colors} of ${cloth[cnt++]}`)  // map colors


function MENU(...args) { // rest
    let sum = "";
  
    for (let arg of args) sum += arg + " \n";
  
    return sum;
  }
  
  console.log( MENU("A") ); //  A 
  console.log(MENU("A", "B") ); // A \n B \n C
  console.log(MENU("A", "B", "C") ); // A \n B \n C

 // console.log([...cloth]);  // spread


  const prices = [1,2,3,4,5,6,7,8]
  function total(...args){
      let sum = 0;
      args.forEach(element => {
          sum += element
      });
      return sum
  }
  //console.log(total(...prices));  // spread

// цифр - index
//   console.log(cloth.slice(2));   // slice start 2 до конца массива
//   console.log(cloth.slice(2, 4));  // slice от 2 до 4 
//   console.log(cloth.slice(3, 5));   // slice  от 3 до 5 

//   console.log(cloth.length > 2);  // true
//   console.log(cloth.length == 4);  // false
//   console.log(cloth.length != 7);  // false
//   console.log("2" > 1);    // true
//   console.log("01" == 1);  // true
//   console.log("01" === 1); // false
//   console.log("42" == 42);  // true
//   console.log("42" === 42);  // false
//   console.log(null == undefined);  // true
//   console.log(null === undefined);  // false

  let price = 570
  switch(price){
      case 1 : price = 1000; break;
      case 2 : price = 2000; break;
      case 3 : price = 3000; break;
      case 4 : price = 4000; break;
      default : price = 1; 
  }

  let short = "burberry"
  let clos = "ck"
  let answer = short == clos ? "Yes" : "No"
  console.log(answer);

  if(answer){
      console.log("Yes, Buy");
  }else{
      console.log("No");
  }

  for(key in clothes){
      console.log(key);
  }


  console.log("--------------------------------");
  let idx = 0;
  for(let i = 0; i < cloth.length; i++){
      console.log(cloth[i]);
      if(cloth[i] == "socks"){
          idx++;
          break
      }
  }
  console.log("------------------------");
  let pos = 0
  while(pos < idx){
      console.log(cloth[pos] + " this my clothes");
      pos++
  }

  console.log("------------------------");
  let j = 0;
do{
  console.log(`${j+1} my best clothes : ${cloth[j]}`);
  j++
}while(j < cloth.length);


function countCloth(){
    return cloth.length;
  }
  console.log(countCloth());
  
  let couns = function () {
    return cloth.length;
  };
  console.log(counsl());
  
  let getShop_name = () => {
    return Dalidas_Store_name;
  };
  console.log(getShop_name);
  
  export{cloth, getShop_name};
  
  export{cloth as c, getShop_name as gSn};