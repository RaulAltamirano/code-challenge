class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const list1 = new ListNode();
const list2 = new ListNode();


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;

    const firstListAr: number[] = [];
    const secondListAr: number[] = [];
    const first = getArrList(list1, firstListAr);
    const second = getArrList(list2, secondListAr);
    const mergeArr = new Array(...first, ...second).sort((a, b) => a - b);

    const head = new ListNode(mergeArr[0]);
    let current = head;
    for (let index = 1; index < mergeArr.length; index++) {
        current.next = new ListNode(mergeArr[index]);
        current = current.next;
    }

    return head;
}

function getArrList(list: ListNode | null, arr: number[]): number[] {
    if (!list) return arr;
    arr.push(list.val); 
    if (list.next) getArrList(list.next, arr); 
    return arr;
}

const res = mergeTwoLists(list1, list2)
console.log({res});