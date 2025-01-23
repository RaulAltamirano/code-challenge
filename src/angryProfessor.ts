function angryProfessor(k: number, a: number[]): string {
    let studentsOnTime = 0;
    for (const arrivalTime of a) {
        if (arrivalTime <= 0) {
            studentsOnTime++;
        }
    }
    return studentsOnTime >= k ? 'NO' : 'YES';
}


const a = [-1, -3, 4, 2]
const b = [0, -1, 2, 1]

const res1 = angryProfessor(3, a)
const res2 = angryProfessor(2, b)

console.log(res1);
console.log(res2);