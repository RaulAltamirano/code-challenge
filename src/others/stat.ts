export const stat = (s: string): string => {
    const ar = s.split(',')
    const list = []

    for (let index = 0; index < ar.length; index++) {
        const element = ar[index].trim().split('|').map(Number);
        console.log({ element });
        const dateNum = element.map(e => e.toString()).join('')
        const formDate = new Date()
        
        console.log(dateNum);
        list.push(dateNum)


    }


    // let avg = averageTime(list)
    // let range = rangeTime(list)
    // console.log({ avg }, { range });


    console.log(list);
    // console.log({ ar });
    return ""
}

// function averageTime(times: [number, number, number][]) {
//     const sum  = times.reduce((acc, date) => acc + date)
//     // const doubledSumOptimized = numbers.reduce((acc, num) => acc + num * 2, 0);

//     console.log(sum);


//     // const hours = ,
//     // const minutes = 
//     // const seconds =

//     return [hours, minutes, seconds];
// }

// function rangeTime(times: [number, number, number][]) {


//     return [hours, minutes, seconds];
// }


function toSeconds(hours: number, minutes: number, seconds: number) {
    return hours * 3600 + minutes * 60 + seconds;
}




stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")