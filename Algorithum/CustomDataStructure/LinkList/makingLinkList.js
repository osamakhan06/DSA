class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {

        // create new node
        const node = new Node(value)

        // if list is empty
        if(this.isEmpty()) {
            this.head = node
        } 
        
        // if list already has nodes
        else {
            node.next = this.head
            this.head = node
        }

        this.size++
    }

    print() {

        if(this.isEmpty()) {
            console.log('List is empty')
            return
        }

        let curr = this.head
        let listValues = ''

        while(curr) {
            listValues += `${curr.value} -> `
            curr = curr.next
        }

        listValues += 'null'

        console.log(listValues)
    }
}


// create linked list
const list = new LinkedList()

console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())

list.print()

// add nodes
list.prepend(10)
list.print()

list.prepend(20)
list.print()

list.prepend(30)
list.print()