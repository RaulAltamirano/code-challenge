export const digitalRoot = (n: number): number => {
    // your code here
    while (n > 9) {
        const string = n.toString()
        let sum = 0
        for (let index = 0; index < string.length; index++) {
            const element = Number(string[index])

            sum += element
            console.log({ sum });

        }
        n = sum
    }
    console.log(n);
    return n
};

// digitalRoot(16) // 7
digitalRoot(456) // 6 );