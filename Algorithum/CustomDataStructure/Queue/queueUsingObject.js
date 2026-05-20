class Queue{
    constructor(){
        this.items ={}
        this.front =0 // these are the pointers i-e they only stores the position 
        this.rear = 0
    }

    enqueue(elements){
        this.items[this.rear]= elements
        this.rear++
    }
    dequeue(){
       delete this.items[this.front]
        this.front++
        return this.items
    }
    isEmpty(){
        return this.rear-this.front === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear -this.front
    }
}

const q1 = new Queue

q1.enqueue(10)
q1.enqueue(20)

console.log(q1.items)
q1.dequeue()
console.log(q1.items)
console.log(q1.isEmpty())
console.log(q1.peek())
console.log(q1.size())