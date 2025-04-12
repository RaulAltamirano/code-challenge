export function duplicated(arr: any[], keys: string[]): any[] {
    const filteredObjs = arr.filter((obj: any) => keys.every(key => key in obj));
    const map = new Map();

    filteredObjs.forEach(obj => {
        const keyValues = keys.map(key => obj[key]).join('|'); 
        if (!map.has(keyValues)) {
            map.set(keyValues, []);
        }
        map.get(keyValues).push(obj);
    });



    const duplicates = [];
    const orderedKeys = [...map.keys()]; 

    orderedKeys.forEach(key => {
        const group = map.get(key);
        if (group.length > 1) {
            duplicates.push(...group);
        }
    });

    console.log(duplicates);
    return duplicates;
}

duplicated([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 1, z: 1 },
    { x: 1, y: 1, z: 3 },
],
    ['x', 'y']
)