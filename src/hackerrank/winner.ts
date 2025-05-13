function winner(andrea: number[], maria: number[], startingWord: string): string {
    if (!andrea || !maria || andrea.length !== maria.length) {
        throw new Error("Los mazos deben tener la misma cantidad de cartas");
    }

    if (startingWord !== "Even" && startingWord !== "Odd") {
        throw new Error("La palabra inicial debe ser 'Even' u 'Odd'");
    }

    let andreaScore = 0;
    let mariaScore = 0;

    const andreaCards = [...andrea];
    const mariaCards = [...maria];

    let shouldDiscard = startingWord === "Odd";

    while (andreaCards.length > 0) {
        if (shouldDiscard) {
            andreaCards.shift();
            mariaCards.shift();

            if (andreaCards.length === 0) {
                break;
            }
        }

        const andreaCard = andreaCards.shift() as number;
        const mariaCard = mariaCards.shift() as number;

        andreaScore += andreaCard - mariaCard;
        mariaScore += mariaCard - andreaCard;

        shouldDiscard = true;
    }

    if (andreaScore > mariaScore) {
        return "Andrea";
    } else if (mariaScore > andreaScore) {
        return "Maria";
    } else {
        return "Tie";
    }
}


const secondExample = winner([1, 2, 3], [2, 1, 3], 'Even') //Maria
const firstExample = winner([1, 2, 3], [2, 1, 3], 'Odd') //Andrea
console.log(secondExample);
console.log(firstExample);


