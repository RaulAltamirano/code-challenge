function minOperations(nums: number[], queries: number[]): number[] {
	nums.sort((a, b) => a - b);
	const n = nums.length;

	const prefixSum = new Float64Array(n);
	prefixSum[0] = nums[0];
	for (let i = 1; i < n; i++) {
		prefixSum[i] = prefixSum[i - 1] + nums[i];
	}
	return queries.map(query => {
		const idx = binarySearch(nums, query);

		const leftSum = idx > 0 ? prefixSum[idx - 1] : 0;
		const totalSum = prefixSum[n - 1];

		const leftCost = query * idx - leftSum;
		const rightCost = (totalSum - leftSum) - query * (n - idx);

		return leftCost + rightCost;
	});
}

function binarySearch(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length;

	while (left < right) {
		const mid = (left + right) >>> 1;
		nums[mid] < target ? left = mid + 1 : right = mid;
	}

	return left;
}



minOperations([3, 1, 6, 8], [1, 5])
