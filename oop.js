// const name = "ahmed hossam";
// const arr = name.split(" ");
//
// console.log(arr); ["ahmed", "hossam"]

const obj = {
  authorization: "Bearer dsajkhdkasjhdjksahdjksahdjkshdajk",
  age: 22,
};

const token = obj["authorization"].split(" ")[1];

console.log(token);