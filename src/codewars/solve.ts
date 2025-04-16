
const vowelCodes = [1, 5, 9, 15, 21];

export function solve(s: string) {
    const vowels = /[aeiou]+/;
    const consonantGroups = s.split(vowels);
    console.log(consonantGroups);
    let maxValue = 0;

    for (const group of consonantGroups) {
        let groupValue = 0;

        for (const char of group) {
            groupValue += char.charCodeAt(0) - 96;
        }

        if (groupValue > maxValue) {
            maxValue = groupValue;
        }
    }

    return maxValue;
}



// solve('zodiac')
solve('strength')