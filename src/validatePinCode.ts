export class Kata {
    static validatePin(pin: string): boolean {
        console.log(pin.length, 'for ping ', pin);
        if (pin.length === 4 || pin.length === 6) {
            const regexNum = /^[0-9]+$/;
            const res = regexNum.test(pin)
            return res

        } else return false
    }
}

const kata1 = Kata.validatePin('1')
const kata2 = Kata.validatePin('12345')
const kata3 = Kata.validatePin('a234')

console.log(kata1);
console.log(kata2);
console.log(kata3); 