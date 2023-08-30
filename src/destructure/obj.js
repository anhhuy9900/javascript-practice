let obj = {
  fruit: "Apple",
  vegetable: "Bean Sprouts",
  //diary:'Cheese'
};

// let {fruit,vegetable,diary='Milk'} = obj

//let {fruit:fruit_name} = obj
let fruit, fruit_name;
({ fruit: fruit_name } = obj);

let info = {
  name: "Tom",
  address: {
    city: "Newcastle",
    street: "Northumberland Street",
    number: 17,
  },
};
let {
  name,
  address: { city, street, number },
} = info;

var num = -123;

let { abs: absolute_value } = Math;

console.log(absolute_value(num));
