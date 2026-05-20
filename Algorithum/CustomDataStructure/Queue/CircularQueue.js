class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    enQueue(element) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.currentLength++;

        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    deQueue() {
        if (this.isEmpty()) {
            return null;
        }

        const removed = this.items[this.front];
        this.items[this.front] = null;

        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;

        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return removed;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.front];
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = "";
        let i = this.front;

        for (let count = 0; count < this.currentLength; count++) {
            result += this.items[i] + " ";
            i = (i + 1) % this.capacity;
        }

        console.log(result.trim());
    }
}


const q1 = new CircularQueue(5);

q1.enQueue(10);
q1.enQueue(20);
q1.enQueue(30);
q1.enQueue(40);
q1.enQueue(50);

console.log(q1.items);
q1.print();

q1.deQueue();
q1.print();