const consonants = ["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "z"];
const vowels = ["a", "i", "o", "u"];

const consonantMap: Record<string, number> = Object.fromEntries(consonants.map((c, i) => [c, i]));
const vowelMap: Record<string, number> = Object.fromEntries(vowels.map((v, i) => [v, i]));

export function fromProquint(proquint: string): number {
    if (proquint.length !== 5) throw new Error("Formato inválido. Debe ser CVCVC.");

    return (
        (consonantMap[proquint[0]] << 12) |
        (vowelMap[proquint[1]] << 10) |
        (consonantMap[proquint[2]] << 6) |
        (vowelMap[proquint[3]] << 4) |
        consonantMap[proquint[4]]
    );
}

export function toProquint(number: number): string {
    number = number & 0xFFFF;

    const c1 = consonants[(number >> 12) & 0b1111];
    const v1 = vowels[(number >> 10) & 0b11];
    const c2 = consonants[(number >> 6) & 0b1111];
    const v2 = vowels[(number >> 4) & 0b11];
    const c3 = consonants[number & 0b1111];

    return `${c1}${v1}${c2}${v2}${c3}`;

}


const exampleFrom = fromProquint('katas')
const exampleTo = toProquint(exampleFrom)
console.log(exampleFrom, exampleTo);