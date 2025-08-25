// const node = new Node();

const { List } = require("@mui/material");



/**
 * 
 * 
 * 
 * 
 */

const newNode = { node: {val: 10, next: {val: 15, next: {val: 17}}}}

const isLinkedList = (head) => {
    const temp = head;
    let current = head.next;

    while(current && current.next) {
        console.log(current)
        if(current === temp)return true
        current = current.next
    }
    return false;
}

const fasterSolution = (head) => {
    let slow = head
    let fast = head.next

    while(fast && fast.next) {
        if(slow === fast) return true

        slow = slow.next
        fast = fast.next.next;
    }
    return false
}

console.log('is this circular?', isLinkedList(newNode.node))

const val1 = 10; //referenced by memory since its a primitive data type
const val2 = 10; //referenced by memory since its a primitive data type

const arr1 = [1,2,3,4] //3 - referenced by memory address, not value
const arr2 = [1,2,3,4] //15 - referenced by memory address, not value
const b = arr1

console.log(val1 === val2);
console.log(arr1 === arr2);
console.log(arr1 === b);


class ListNode {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }

    insert(newVal, currentNode) {
        let tmp = currentNode;
        currentNode = newVal;
        currentNode.next = tmp;
        return currentNode
    }
}

const node1 = new ListNode(5, new ListNode(10,20));
const node2 = new ListNode(60)

console.log('original linkedList', node1);
console.log(node2);


const node3 = node1.insert(node2, node1)

console.log(node3);