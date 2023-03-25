const { MyList } = require("./ListRealization.js");
const dList = new MyList();

console.log('"length" method');
console.log(`Length: ${dList.length()} \n`);

console.log('"append" method');
dList.append("1");
dList.append("7");
dList.append("3");
dList.append("2");
dList.append("3");
dList.append("7");
console.log(`Length after appending: ${dList.length()}`);
console.log(`List after appending: ${dList.myElements} \n`);

console.log('"insert" method');
dList.insert("4", 2);
console.log(`Length after inserting : ${dList.length()}`);
console.log(`List after inserting: ${dList.myElements} \n`);

console.log('"delete" method');
dList.delete("2");
console.log(`Length after deleted: ${dList.length()}`);
console.log(`List after deleted: ${dList.myElements} \n`);

console.log('"deleteAll" method');
dList.deleteAll("3");
console.log(`Length after deleted: ${dList.length()}`);
console.log(`List after deleted: ${dList.myElements} \n`);

console.log('"get" method');
console.log(`Element[0]: ${dList.get(0)} \n`); // 1

console.log('"clone" method');
const clonedList = dList.clone();
console.log(`List: ${dList.myElements}`);
console.log(`Clone: ${clonedList.myElements} \n`);

console.log('"reverse" method');
dList.reverse();
console.log(`Reverse: ${dList.myElements} \n`);

console.log('"findFirst", "findLast" methods');
console.log(`First 7 index: ${dList.findFirst("7")}`);
console.log(`Last 7 index: ${dList.findLast("7")} \n`);

console.log('"clear" method');
console.log(`Length before clearing: ${dList.length()}`);
dList.clear();
console.log(`Length after clearing: ${dList.length()} \n`);

console.log('"extend" method');
const firstList = new MyList();
firstList.append("5");
firstList.append("7");
console.log(`1 list: ${firstList.myElements}`);
const secondList = new MyList();
secondList.append("2");
secondList.append("9");
console.log(`2 list: ${secondList.myElements}`);
const extendedList = firstList.extend(secondList);
console.log(`Extended list: ${extendedList}`);