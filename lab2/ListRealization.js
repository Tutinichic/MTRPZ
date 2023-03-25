class MyList {
    constructor() {
      this.myElements = [];
    }
  
    length() {
      return this.myElements.length;
    }
  
    append(element) {
      if (typeof element != "string") {
        throw new Error("Помилочка, треба стрінг");
      }
      this.myElements.push(element);
    }
  
    insert(element, index) {
      if (typeof element != "string") {
        throw new Error("Помилочка, треба стрінг");
      }
      if (index < 0 || index > this.myElements.length) {
        throw new Error("Помилочка, некоректний індекс");
      }
      this.myElements.splice(index, 0, element);
    }
  
    delete(index) {
      if (index < 0 || index > this.myElements.length) {
        throw new Error("Помилочка, некоректний індекс");
      }
      return this.myElements.splice(index, 1)[0];
    }
  
    deleteAll(element) {
      if (typeof element != "string") {
        throw new Error("Помилочка, треба стрінг");
      }
      this.myElements = this.myElements.filter((currentElement) => currentElement !== element);
    }
  
    get(index) {
      if (index < 0 || index > this.myElements.length) {
        throw new Error("Помилочка, некоректний індекс");
      }
      return this.myElements[index];
    }
  
    clone() {
      const extraList = new MyList();
      this.myElements.forEach((element) => extraList.append(element));
      return extraList;
    }
  
    reverse() {
      this.myElements.reverse();
    }
  
    findFirst(element) {
      if (typeof element != "string") {
        throw new Error("Помилочка, треба стрінг");
      }
      return this.myElements.indexOf(element);
    }
  
    findLast(element) {
      if (typeof element != "string") {
        throw new Error("Помилочка, треба стрінг");
      }
      return this.myElements.lastIndexOf(element);
    }
  
    clear() {
      this.myElements = [];
    }
  
    extend(extraList) {
      const extendedArray = this.myElements.concat(extraList.myElements);
      return extendedArray;
    }
  }
  
  module.exports = { MyList };
  