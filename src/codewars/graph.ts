export function graph(arr: number[]): string {
    if (arr.length === 0) return '';
    if (arr.length === 1 && arr[0] === 0) return ' ____  ^ 0';

    const max = Math.max(...arr);
    const result: string[] = [];

    const CELL_WIDTH = 6; // Cada bloque tiene 6 caracteres de ancho

    for (let level = max; level >= 0; level--) {
        const lineParts = arr.map((value) => {
            if (value === level) return ' ____ ';
            if (value > level) return '|    |';
            return '      '; // espacio vacío del mismo ancho
        });

        const levelLabel = level === max ? ` ^ ${level}` : ` | ${level}`;
        result.push(lineParts.join('') + levelLabel);
    }

    return result.join('\n');
}



console.log(graph([16,12,37,20,25,33,34,36,35,17,36,7,11,15,43,30,26,43]));
