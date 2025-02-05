

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// Ejemplo de uso
const node1 = new ListNode(1); 
const node2 = new ListNode(2); 
const node3 = new ListNode(3); 

// Enlazar los nodos
node1.next = node2;
node2.next = node3;


function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head.next) return null
    console.log(head);

};


deleteDuplicates(node1)