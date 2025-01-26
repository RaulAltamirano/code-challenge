function integerReplacement(n: number): number {
    let count = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            if (n === 3 || (n & 3) === 1) {
                n--;
            } else {
                n++;
            }
        }
        console.log(n, count, 'steps');
        count++;
    }
    console.log(count);
    return count;
}


// integerReplacement(8)
integerReplacement(65535)