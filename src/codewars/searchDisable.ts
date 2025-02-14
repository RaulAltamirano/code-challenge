function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export function searchDisable(log: string): string {
    const logArray = log.split(' ');
    const frequencyMap: { [key: string]: number } = {};

    for (const num of logArray) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    let count = 0;
    for (const num in frequencyMap) {
        if (
            num.length === 4 &&
            isPrime(Number(num)) &&
            (num[2] === '2' || num[2] === '3') &&
            frequencyMap[num] > 3
        ) {
            count += frequencyMap[num];
        }
    }
    if (count > 50) {
        return "match disable bot";
    }
    return "no match continue";
}

let log1 = "1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031";
let log2 = '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923';

// searchDisable(log1)
const example = searchDisable(log2)
console.log(example);