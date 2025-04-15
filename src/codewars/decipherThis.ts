export function decipherThis(str: string): string {
    return str
        .split(' ')
        .map(word => {
            const match = word.match(/^(\d+)([a-zA-Z]*)$/);
            if (!match) return word; 

            const [_, numStr, rest] = match;
            const firstChar = String.fromCharCode(+numStr);

            if (rest.length <= 1) return firstChar + rest;

            const chars = rest.split('');
            [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];

            return firstChar + chars.join('');
        })
        .join(' ');
}


decipherThis('72olle 103doo 100ya')