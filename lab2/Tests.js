const assert = require("assert").strict;
const { MyList } = require("./ListRealization.js");

const testList = new MyList();

{
  //test.Clear 
  const testList = new MyList();
  testList.append("1");
  testList.append("2");
  testList.append("3");
  assert.strictEqual(testList.length(), 3);
  testList.clear();
  assert.strictEqual(testList.length(), 0);
}

{
  //test.Append 
  testList.clear();
  try {
    testList.append(20);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(error.message, "Помилочка, треба стрінг");
  }
  testList.append("a");
  testList.append("b");
  assert.strictEqual(testList.length(), 2);
  assert.strictEqual(testList.get(0), "a");
  assert.strictEqual(testList.get(1), "b");
}

{
  //test.Insert 
  testList.clear();
  try {
    testList.insert("a", 100);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Помилочка, некоректний індекс"
    );
  }
  try {
    testList.insert(20, 1);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(error.message, "Помилочка, треба стрінг");
  }
  try {
    testList.insert("abc", -5);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Помилочка, некоректний індекс"
    );
  }
  testList.insert("a", 0);
  testList.insert("b", 1);
  testList.insert("c", 1); 
  testList.insert("d", 2); 
  assert.strictEqual(testList.length(), 4);
  assert.strictEqual(testList.get(1), "c");
  assert.strictEqual(testList.get(2), "d");
  assert.strictEqual(testList.get(3), "b");
}

{
  //test.Delete 
  testList.clear();
  try {
    testList.delete(15);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Помилочка, некоректний індекс"
    );
  }
  try {
    testList.delete(-100);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Помилочка, некоректний індекс"
    );
  }

  testList.append("a");
  testList.append("b");
  testList.append("c");
  testList.delete(0);
  assert.strictEqual(testList.length(), 2);
  assert.strictEqual(testList.get(0), "b");
  assert.strictEqual(testList.get(1), "c");
  testList.delete(1); 
  testList.delete(0); 
  assert.strictEqual(testList.length(), 0);
}

{
  //test.DeleteAll 
  testList.clear();
  try {
    testList.deleteAll(75);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(error.message, "Помилочка, треба стрінг");
  }
  testList.insert("a", 0);
  testList.insert("b", 1);
  testList.insert("a", 2);
  testList.insert("b", 3);
  testList.insert("a", 4);
  assert.strictEqual(testList.length(), 5);
  assert.strictEqual(testList.get(0), "a");
  assert.strictEqual(testList.get(2), "a");
  assert.strictEqual(testList.get(4), "a");
  testList.deleteAll("a"); 
  assert.strictEqual(testList.get(0), "b");
  assert.strictEqual(testList.get(1), "b");
  testList.deleteAll("b");
  assert.strictEqual(testList.length(), 0);
}

{
  //test.Get 
  testList.clear();
  try {
    testList.get(13);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Помилочка, некоректний індекс"
    );
  }
  try {
    testList.get(-1);
    assert.fail("Очікувалася помилка");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Помилочка, некоректний індекс"
    );
  }
  
  testList.append("a");
  testList.append("b");
  assert.strictEqual(testList.get(0), "a");
  assert.strictEqual(testList.get(1), "b");
}

{
  //test.Clone 
  testList.clear();
  testList.append("a");
  testList.append("b");
  let cloneL = testList.clone();
  assert.strictEqual(cloneL.length(), 2);
  assert.strictEqual(cloneL.get(0), "a");
  assert.strictEqual(cloneL.get(1), "b");
  cloneL.delete(0);
  assert.strictEqual(testList.length(), 2);
  assert.strictEqual(cloneL.length(), 1);
}

{
  //test.Reverse 
  testList.clear();
  testList.append("a");
  testList.append("b");
  testList.append("c");
  testList.reverse();
  assert.strictEqual(testList.get(0), "c");
  assert.strictEqual(testList.get(1), "b");
  assert.strictEqual(testList.get(2), "a");
}

{
  //test.FindFirst 
  testList.clear();
  testList.append("a");
  testList.append("b");
  testList.append("c");
  testList.append("a");
  assert.strictEqual(testList.findFirst("a"), 0);
  assert.strictEqual(testList.findFirst("c"), 2);
}

{
  //test.FindLast 
  testList.clear();
  testList.append("a");
  testList.append("b");
  testList.append("c");
  testList.append("a");
  assert.strictEqual(testList.findLast("a"), 3);
  assert.strictEqual(testList.findLast("c"), 2);
}

{
  //test.Extend 
  testList.clear();
  const list2 = new MyList();
  testList.append("a");
  testList.append("b");
  list2.append("1");
  list2.append("2");
  list2.append("3");
  testList.extend(list2);
  assert.strictEqual(testList.length(), 5);
  assert.strictEqual(testList.get(0), "a");
  assert.strictEqual(testList.get(1), "b");
  assert.strictEqual(testList.get(2), "1");
  assert.strictEqual(testList.get(3), "2");
  assert.strictEqual(testList.get(4), "3");
}