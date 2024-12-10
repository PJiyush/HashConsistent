interface NodeInterface {
    value: string;
    hashValue: number;
    next?: NodeInterface | null;
}

export class node implements NodeInterface {
    constructor(
        public value: string,
        public hashValue: number,
        public next: node | null = null
    ) {}
}

export class HashConsistent{
    private head: node | null = null;
    constructor(node:node|null=null){
        this.head = node
    }
    addNode(node: node): void{
        if(this.head == null){
            this.head = node
            return;
        }
        let traverse = this.head;
        if(node.hashValue<traverse.hashValue){
            node.next = traverse;
            this.head = node;
        }else{
            while(traverse != null && node.hashValue>traverse.hashValue){
                if(traverse.next == null) break;
                if(node.hashValue<traverse.next.hashValue) break;
                traverse = traverse.next;
            }
            node.next = traverse.next;
            traverse.next = node;
        }
    }
    findValue(hashValue: number):string{
        if(this.head==null) return "Linked List Not created"
        let traverse = this.head
        while (traverse != null) {
            if (hashValue <= traverse.hashValue) return traverse.value;
            if (traverse.next === null) break;
            traverse = traverse.next;
        }
        return this.head.value
    }
    print(): void{
        if(this.head==null){
            console.log("Linked List Not created")
            return
        }
        let traverse = this.head
        while(traverse!=null){
            console.log(`-----> ${traverse.value} : ${traverse.hashValue}`)
            if(traverse.next==null) break
            traverse = traverse.next
        }
    }
}