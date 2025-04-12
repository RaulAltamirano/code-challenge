function catAndMouse(x: number, y: number, z: number) {
    const catsA = Math.abs(x - z)
    const catsB = Math.abs(y - z)
    if(catsA > catsB) return 'Cat B'
    else if(catsA === catsB) return 'Mouse C'
    else return 'Cat A'
}


catAndMouse(1, 2, 3)
catAndMouse(1, 3, 2)