function extraLongFactorials(n: number): void {
    let result = BigInt(n);
    let index = n - 1
    while (index > 0) {
        console.log(index);
        result *= BigInt(index)
        index--
    }

    console.log(result.toString());
}

extraLongFactorials(30)