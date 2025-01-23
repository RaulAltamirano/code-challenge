type arr = arr[];

export function repSet(n: number): arr {
    // your code
    let res = []
    if (n === 0) return res

    const ar = new Array(n).fill(0)
    for (let index = 0; index < ar.length; index++) {
        res = [...res, res];


    }
    console.log(res);
    return res
}


repSet(2)

// []
// [[]]
// [[],[[]]]
// [[],[[],[[],[[]]]]]