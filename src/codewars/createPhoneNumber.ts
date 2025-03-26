
function createPhoneNumber(numbers: number[]): string {
    if (numbers.length !== 10)
        throw new Error("El array debe contener exactamente 10 números");

    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');

    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

const success = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"      
console.log({ success });