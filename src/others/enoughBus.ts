function enough(cap: number, on: number, wait: number): number {
	const passenger = on + wait 
	console.log(passenger);
	if(passenger > cap){
		const diff = Math.abs(passenger - cap)
		return diff
	}
	return 0
}

enough(10, 5, 0)
