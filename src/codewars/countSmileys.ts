export function countSmileys(arr: string[]): number {
    if (!arr.length) return 0;

    let count = 0;
    
    for (const face of arr) {
        const len = face.length;
        
        if (len !== 2 && len !== 3) continue;
        
        if (!(face[0] === ':' || face[0] === ';')) continue;
        
        if (!(face[len - 1] === ')' || face[len - 1] === 'D')) continue;
        
        if (len === 3 && !(face[1] === '-' || face[1] === '~')) continue;
        
        count++;
    }
    return count;
}


countSmileys([':D', ':~)', ';~D', ':)'])
countSmileys([';]', ':[', ';*', ':$', ';-D']); 
