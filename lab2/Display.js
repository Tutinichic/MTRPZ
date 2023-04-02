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
dList.showAllElements();
console.log(`Length after appending: ${dList.length()} \n`);

console.log('"insert" method');
dList.insert("4", 2);
dList.showAllElements();
console.log(`Length after inserting: ${dList.length()} \n`);

console.log('"delete" method');
dList.delete("2");
dList.showAllElements();
console.log(`Length after deleted: ${dList.length()} \n`);

console.log('"deleteAll" method');
dList.deleteAll("3");
dList.showAllElements();
console.log(`Length after deleted: ${dList.length()} \n`);

console.log('"get" method');
console.log(`Element[0]: ${dList.get(0)} \n`); // 1

console.log('"clone" method');
const clonedList = dList.clone();
dList.showAllElements();
console.log(`Original list length: ${dList.length()}`);
clonedList.showAllElements();
console.log(`Clone list length: ${clonedList.length()} \n`);

console.log('"reverse" method');
dList.showAllElements();
dList.reverse();
dList.showAllElements();
console.log(`\n`);

console.log('"findFirst", "findLast" methods');
dList.showAllElements();
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
firstList.showAllElements();
const secondList = new MyList();
secondList.append("2");
secondList.append("9");
secondList.showAllElements();
firstList.extend(secondList);
firstList.showAllElements();