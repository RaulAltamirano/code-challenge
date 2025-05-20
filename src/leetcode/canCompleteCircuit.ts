function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalTank = 0;
    let currentTank = 0;
    let startStation = 0;

    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currentTank += gas[i] - cost[i];
        console.log(totalTank, currentTank);

        if (currentTank < 0) {
            startStation = i + 1;
            currentTank = 0;
        }
    }
    const res = totalTank >= 0 ? startStation : -1;
    return res
}


canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])