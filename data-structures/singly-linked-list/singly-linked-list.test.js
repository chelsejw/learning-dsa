const {Node, SinglyLinkedList, makeLinkedList} = require('./main')

const empty = makeLinkedList()
const oneItem = makeLinkedList("Hello")
const twoItems = makeLinkedList("Hello there")
const threeItems = makeLinkedList("Hello there Chelsea")

// test("Popping an empty list should return undefined", ()=> {
//     expect(empty.pop()).toBe(undefined)
// })
// test("Shifting an empty list should return undefined", () => {
//     expect(empty.pop()).toBe(undefined);
// });

// test("Popping oneItem should return the node with value 'Hello'", ()=> {
//     expect(oneItem.pop().value).toBe("Hello")
// })
// test("Shifting oneItem should return the node with value 'Hello'", () => {
//     expect(makeLinkedList("Hello").shift().value).toBe("Hello");
// });
// test("twoItem.shift() should return the node with value 'Hello'", () => {
//     expect(makeLinkedList("Hello there").shift().value).toBe("Hello");
// });
// test("After twoItem.shift(), the head and tail node of twoItem should be the string there", () => {
//     let list = makeLinkedList("Hello there");
//     list.shift();
//     expect(list.tail.value).toBe("there");
// });

// test("twoItem.unshift('Heyhey')'s head value should be Heyhey", () => {
//     expect(makeLinkedList("Hello there").unshift("Heyhey").head.value).toBe("Heyhey");
// });

// test("twoItem.unshift('Heyhey')'s second value should be Hello", () => {
//     twoItems.unshift("Heyhey");
//     expect(makeLinkedList("Hello there").unshift("Heyhey").head.next.value).toBe("Hello");
// });

const longString = makeLinkedList("Hello there my name is Chelsea");

// TESTS FOR .GET METHOD

test("longString.get(4) should return node with a value of 'is'", ()=> {
    expect(longString.get(4).value).toBe("is")
})
test("longString.get(0) should return node with a value of 'Hello'", () => {
  expect(longString.get(0).value).toBe("Hello");
});
test("longString.get(-1) should return null", () => {
  expect(longString.get(-1)).toBe(null);
});
test("longString.get(6) should return null", () => {
  expect(longString.get(6)).toBe(null);
});

// TESTS FOR .SET METHOD

test("longString.set(5, 'Misty')'s tail value should be 'Misty'.", ()=> {
    let temp = longString
    temp.set(5, 'Misty')
    expect(temp.tail.value).toBe('Misty')
})


test("longString.set(5, 'Misty') should return true", () => {
  expect(longString.set(5, "Misty")).toBe(true);
});

test("longString.set(0, 'Hey')'s head value should be 'Hey'.", () => {
    let temp = longString;
    temp.set(0, "Hey");
    expect(temp.head.value).toBe("Hey");
});

test("longString.set(1, 'hello')'s value at position 1 should be 'hello'.", () => {
    let temp = longString;
    temp.set(1, "hello");
    expect(temp.get(1).value).toBe("hello");
});

test("longString.set(6, 'hello') should return false", () => {
  expect(longString.set(6, "hello")).toBe(false);
});


test("longString.set(-3, 'hello') should return null", () => {
  expect(longString.set(-3, "hello")).toBe(false);
});
