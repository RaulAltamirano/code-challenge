function climbingLeaderboard(ranked: number[], player: number[]): number[] {
    const rankAr = [...new Set(ranked)].sort((a, b) => b - a);
    const res: number[] = [];
    let index = rankAr.length - 1;

    for (let i = 0; i < player.length; i++) {
        const currentScore = player[i];
        console.log({ currentScore });
        while (index >= 0 && currentScore >= rankAr[index]) {
            index--;
            console.log(index);
        }
        const sum = index + 2
        console.log({sum});
        res.push(sum);
    }
    console.log(res);
    return res;
}

const rank2 = [100, 100, 50, 40, 40, 20, 10]
const player2 = [5, 25, 50, 120]

climbingLeaderboard(rank2, player2)