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
 // add the node in the begining of the list 
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

    // add the node in the last of the node

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            return this.head = node
        }else{
            let prev = this.head
            while(prev.next ){
                prev = prev.next 

            }
            prev.next = node 
        }
        this.size++

    }
    //add the node in any where 
    insert(value,index){
        
        if(index<0 || index >this.size){
            return
        }
        if(index == 0){
           return  this.prepend()
        }else{
            let node = new Node(value)
            let prev = this.head
            for(let i =0;i<index-1;i++){
                 prev = prev.next
            }
            node.next = prev.next
            prev.next = node 
            this.size++
        }

    }

    // reomve the node from the linklist using the index
    removeFrom(index) {

    // invalid index
    if (index < 0 || index >= this.size) {
        return null
    }

    let removeNode

    // removing first node
    if (index === 0) {
        removeNode = this.head
        this.head = this.head.next
    } else {

        let prev = this.head

        // move to node before target
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        }

        removeNode = prev.next

        // skip/remove node
        prev.next = removeNode.next
    }

    this.size--

    return removeNode.value
}

// remove the node using the value 

     removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value== value){
            this.head = this.head.next 
            this.size--
            return value
        }
        let prev = this.head
        if(prev.next && prev.next.value != value){
            prev = prev.next
        }
        if(prev.next){
            let removeNode = prev.next
            prev.next = removeNode.next
            this.size--

        }

     }

     
     // search the value using the index 
     search(value){
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value == value){
                return i
            }
            curr = curr.next
            i++
            

        }
        return -1

     }

     // we want  to reverse the linklist
     reverse(){
        let prev = null
        let curr = this.head
        while(curr)
            {
             let   next = curr.next
                curr.next = prev
              prev = curr
              curr = next 
            }
            this.head = prev

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

list.append(50)
list.print()

list.insert(12,3)
list.print()

list.removeFrom(2)
list.print()

// list.removeValue(30)
// list.print()

console.log(list.search(20))

list.reverse()
list.print()

