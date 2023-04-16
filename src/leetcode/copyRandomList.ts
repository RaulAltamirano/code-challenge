class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}
// Nodo 0
const node0 = new _Node(3);
const node2 = new _Node(3);
const node1 = new _Node(3);
node0.random = null;
node0.next = node1;
node1.random = node0;
node1.next = node2;
node2.next = null;
node2.random = null;

// Nodo 1

// Nodo 2

// La cabeza de la lista es node0
const head = node0;

function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null
    const map = new Map<_Node, _Node>();

    let current: _Node | null = head;
    while (current) {
        map.set(current, new _Node(current.val));
        current = current.next;
    }

    current = head;
    while (current) {
        const copiedNode = map.get(current)!;
        if (current.next) {
            copiedNode.next = map.get(current.next) || null;
        }
        if (current.random) {
            copiedNode.random = map.get(current.random) || null;
        }
        current = current.next;
    }
    const res = map.get(head) || null;
    return res
};


copyRandomList(node0)