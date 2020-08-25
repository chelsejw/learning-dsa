const {Node, SinglyLinkedList, makeLinkedList} = require('./singly-linked-list')

const empty = makeLinkedList()
const oneItem = makeLinkedList("Hello")
const twoItems = makeLinkedList("Hello there")
const threeItems = makeLinkedList("Hello there Chelsea")

test("Popping an empty list should return undefined", ()=> {
    expect(empty.pop()).toBe(undefined)
})
test("Shifting an empty list should return undefined", () => {
    expect(empty.pop()).toBe(undefined);
});

test("Popping oneItem should return the node with value 'Hello'", ()=> {
    expect(oneItem.pop().value).toBe("Hello")
})
test("Shifting oneItem should return the node with value 'Hello'", () => {
    expect(makeLinkedList("Hello").shift().value).toBe("Hello");
});
test("twoItem.shift() should return the node with value 'Hello'", () => {
    expect(makeLinkedList("Hello there").shift().value).toBe("Hello");
});
test("After twoItem.shift(), the head and tail node of twoItem should be the string there", () => {
    let list = makeLinkedList("Hello there");
    list.shift();
    expect(list.tail.value).toBe("there");
});

test("twoItem.unshift('Heyhey')'s head value should be Heyhey", () => {
    expect(makeLinkedList("Hello there").unshift("Heyhey").head.value).toBe("Heyhey");
});

test("twoItem.unshift('Heyhey')'s second value should be Hello", () => {
    twoItems.unshift("Heyhey");
    expect(makeLinkedList("Hello there").unshift("Heyhey").head.next.value).toBe("Hello");
});

