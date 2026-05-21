class Node {
    constructor(value){
        this.value = value    // ✅ fix
        this.next = null      // ✅ fix
    }
}

class LinkedList {
    constructor(){            // ✅ fix
        this.head = null      // ✅ fix
        this.tail = null      // ✅ fix
        this.size = 0
    }

    isEmpty(){
        return this.size === 0  // ✅ fix
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head   // ✅ fix
            this.head = node        // ✅ fix
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node   // ✅ fix
            this.tail = node        // ✅ fix
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromLast(){
        if(this.isEmpty()){
            return null             // ✅ fix
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
            this.size--
            return
        }
        let prev = this.head        // ✅ fix
        while(prev.next !== this.tail){
            prev = prev.next
        }
        prev.next = null
        this.tail = prev
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
            return
        }
        let curr = this.head
        let result = ''
        while(curr){
            result += `${curr.value} -> `
            curr = curr.next
        }
        result += 'null'
        console.log(result)
    }
}

// Test
let list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.print()     
           
list.append(70)
list.print()
list.removeFromLast()
list.print()
list.removeFromFront()
list.print()

module.exports = LinkedList