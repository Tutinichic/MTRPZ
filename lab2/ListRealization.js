class Element {
  constructor(value) {
    this.next = null;
    this.previousious = null;
    this.value = value;
  }
}

class MyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.myLength = 0;
  }

  length() {
    return this.myLength;
  }

  append(element) {
    if (typeof element != "string") {
      throw new Error("Помилочка, треба стрінг");
    }
    const value = new Element(element);
    if(this.myLength !== 0) {
      value.previous = this.tail;
      this.tail.next = value;
      this.tail = value;
    } else {
      this.head = value;
      this.tail = value;
    }
    this.myLength++;
  }

  insert(element, index) {
    if (typeof element != "string") {
      throw new Error("Помилочка, треба стрінг");
    }
    if(index < 0 || index > this.myLength)
      throw new Error('Помилочка, некоректний індекс');
    const value = new Element(element);
    let next = this.head;
    let previous = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      previous = next;
      next = next.next;
      currentIndex++;
    }
    value.previous = previous;
    value.next = next;
    if(previous) previous.next = value;
    else this.head = value;
    if(next) next.previous = value;
    else this.tail = value;
    this.myLength++;
  }

  delete(index) {
    if(index < 0 || index > this.myLength)
      throw new Error('Помилочка, некоректний індекс');
    let currentElement = this.head;
    let previous = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      previous = currentElement;
      currentElement = currentElement.next;
      currentIndex++;
    }
    if (previous) previous.next = currentElement.next;
    else this.head = currentElement.next;
    if (currentElement.next) currentElement.next.previous = previous;
    else this.tail = previous;
    currentElement.previous = null;
    currentElement.next = null;
    
    this.myLength--;
    return currentElement.value;
  }

  deleteAll(element) {
    if (typeof element != "string") {
      throw new Error("Помилочка, треба стрінг");
    }
    let previous = null;
    let currentElement = this.head;
    let next = currentElement.next;
    while (currentElement) {
      if(currentElement.value === element) {
        if (previous) previous.next = next;
        else this.head = next;
        if (next) next.previous = previous;
        else this.tail = previous;
        currentElement.previous = null;
        currentElement.next = null;
        
        this.myLength--;
      } 
      previous = currentElement;
      currentElement = next;
      if(next) next = next.next;
    }
  }
  
  get(index) {
    if(index < 0 || index > this.myLength)
      throw new Error('Помилочка, некоректний індекс');
    let currentElement = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentElement = currentElement.next;
      currentIndex++;
    }
    return currentElement.value;
  }

  clone() {
    const list = new MyList();
    let element = null;
    let currentElement = this.head;
    while (currentElement) {
      element = new Element(currentElement.value);
      list.append(element.value);
      currentElement = currentElement.next;
    }
    return list;
  }

  reverse () {
    let right = this.tail;
    let left = this.head;
    let temp = null;
    for (let i = 0; i < this.myLength / 2; i++) {
      temp = right.value;
      right.value = left.value;
      left.value = temp;
      right = right.previous;
      left = left.next;
    }
  }

  findFirst(element) {
    let currentElement = this.head;
    let currentIndex = 0;
    while(currentElement) {
      if(currentElement.value === element) return currentIndex;
      currentElement = currentElement.next;
      currentIndex++;
    }
    return -1;
  }

  findLast(element) {
    let currentElement = this.tail;
    let currentIndex = this.myLength - 1;
    while(currentElement) {
      if(currentElement.value === element) return currentIndex;
      currentElement = currentElement.previous;
      currentIndex--;
    }
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.myLength = 0;
  }

  extend(list) {
    let currentElement = list.head;
    while(currentElement) {
      this.append(currentElement.value);
      currentElement = currentElement.next;
    }
  }

  showAllElements() {
    let currentElement = this.head;
    let output = '';
    while(currentElement) {
      output += currentElement.value + ' ';
      currentElement = currentElement.next;
    }
    return output.slice(0, -1);
  }
}

exports.MyList = MyList;