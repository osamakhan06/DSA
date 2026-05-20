class Queue{
    constructor(){
        this.items =[]
    }
enqueue(...elements){
    this.items.push(...elements) // spread operator use for the add the all elements into the array 

}
dequeue(){
    this.items.shift()
}
isEmpty(){
    return this.items.length==0
}
peek(){
    if(!this.isEmpty()){
        return this.items[0]
    }
    return null
}
size(){
   return  this.items.length
}
}

const q1 = new Queue
q1.enqueue(10,20)
console.log(q1.items)
q1.dequeue()
console.log(q1.items)
q1.isEmpty()

console.log(q1.items)
console.log(q1.size())


