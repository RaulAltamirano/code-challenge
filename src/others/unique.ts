export function unique(arr: any[], keys: string[]) {
    const uniqueObjects = [];
    const combinationSet = new Set();

    for (const currentElement of arr) {
        const keyValues = keys.map(key => currentElement[key] ?? undefined);

        const keyString = JSON.stringify(keyValues);
        console.log(keyValues, currentElement, keyString);

        if (!combinationSet.has(keyString)) {
            combinationSet.add(keyString);
            uniqueObjects.push(currentElement);
        }
    }
    console.log(uniqueObjects);
    return uniqueObjects;
}




const objs = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 1, z: 1 },
    { x: 1, y: 1, z: 3 },
];
const keys = ['x', 'y'];
unique(objs, keys)