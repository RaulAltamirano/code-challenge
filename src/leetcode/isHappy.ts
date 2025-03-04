function isHappy(n: number): boolean {
    const getNext = (num: number): number => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;  
            num = Math.floor(num / 10); 
        }
        return sum;
    };

    const seen = new Set<number>(); 
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1; 
}

// Ejemplo de uso
console.log(isHappy(19)); // true
console.log(isHappy(2));  // false
console.log(isHappy(3));  // false



isHappy(2)
isHappy(9)
isHappy(3)