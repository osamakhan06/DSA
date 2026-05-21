const LinkedList = require('./addTailToLinklist')

class LinklistQueue {
    constructor(){
    this.list = new LinkedList
    }

    enqueue(value){
        return this.list.append(value)
    }
    dequeue(){
    return this.list.removeFromFront()  
}
    isEmpty(){
        return this.list.isEmpty()
    }
    peek(){
       return  this.list.head.value
    }
    getsize(){
        return this.list.getSize()
    }
    print(){
      return   this.list.print()
    }
}

const q1 = new LinklistQueue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)
q1.print()
q1.dequeue()
q1.print()