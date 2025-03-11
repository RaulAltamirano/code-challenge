function jumpingOnClouds(c, k) {
    let life = 100;
    let n = c.length;
    let currentPosition = 0;

    do {
        currentPosition = (currentPosition + k) % n;
        life--;
      
        if (c[currentPosition] === 1) life -= 2;

    } while (currentPosition !== 0); 

    return life;
}





const c = [0, 0, 1, 0, 0, 1, 1, 0]
jumpingOnClouds(c, 2)


const second = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
99