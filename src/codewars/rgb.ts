export function rgb(r: number, g: number, b: number): string {
    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));

    let hexR = r.toString(16).padStart(2, '0').toUpperCase();
    let hexG = g.toString(16).padStart(2, '0').toUpperCase();
    let hexB = b.toString(16).padStart(2, '0').toUpperCase();

    const word = hexR + hexG + hexB;
    console.log(word);
    return word
}



rgb(0, 0, 0) // "000000"
rgb(300, 255, 255) // "000000"
