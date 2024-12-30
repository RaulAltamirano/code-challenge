function countingValleys(steps: number, path: string | string[]): number {
	let level = 0; 
	let valleys = 0;
	let inValley = false;

	for (let i = 0; i < steps; i++) {
		if (path[i] === 'U') {
			level++;
		} else {
			level--;
		}

		if (level < 0 && !inValley) {
			inValley = true;
		} else if (level === 0 && inValley) {
			valleys++;
			inValley = false;
		}
	}
	console.log(valleys);	
	return valleys;
}

countingValleys(10, 'UDUUUDUDDD')
countingValleys(12, 'DDUUDDUDUUUD')