export const productFib = (prod: number): [number, number, boolean] => {
    const arr = [0, 1];
    let mult = 0;

    for (let index = 0; mult < prod; index++) {
        const next = arr[index + 1];
        const current = arr[index];
        const sum = current + next;
        arr.push(sum);
        mult = current * next;

        if (mult === prod) {
            return [current, next, true];
        } else if (mult > prod) {
            return [current, next, false];
        }
    }
    return [0, 1, false];
};




const res = productFib(4895) // [55, 89, true]
console.log({ res });
// productFib(5895) // [89, 144, false]
// productFib(74049690) // [6765, 10946, true]
// productFib(84049690) // [10946, 17711, false]