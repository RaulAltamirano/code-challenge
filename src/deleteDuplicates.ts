import { ListNode } from "./mergeTwoLists";

function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;

    const resSet = new Set<number>();
    const ar: number[] = [];
    let current: ListNode | null = head;


    while (current !== null) {
        const val = current.val;
        if (!resSet.has(val)) {
            resSet.add(val);
            ar.push(val);
        }
        current = current.next;
    }
    let newHead: ListNode | null = null;
    let tail: ListNode | null = null;

    for (const val of ar) {
        const newNode = new ListNode(val);
        if (!newHead) {
            newHead = newNode;
            tail = newNode;
        } else {
            tail!.next = newNode;
            tail = newNode;
        }
    }
    console.log(newHead);
    return newHead;
}



const head = createLinkedList([1, 1, 2, 3, 3]);
deleteDuplicates(head)
