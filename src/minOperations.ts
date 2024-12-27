function minOperations(nums: number[], queries: number[]): number[] {
	nums.sort((a, b) => a - b);

	const n = nums.length;
	const prefixSum = new Array(n).fill(0);
	prefixSum[0] = nums[0];
	for (let i = 1; i < n; i++) {
			prefixSum[i] = prefixSum[i - 1] + nums[i];
	}

	const results = new Array(queries.length);
	for (let i = 0; i < queries.length; i++) {
			const query = queries[i];
			const idx = binarySearch(nums, query);
			const leftCost = idx > 0 ? query * idx - prefixSum[idx - 1] : 0;
			const rightCost =
					idx < n
							? prefixSum[n - 1] - (idx > 0 ? prefixSum[idx - 1] : 0) - query * (n - idx)
							: 0;
			results[i] = leftCost + rightCost;
	}

	return results;
}

function binarySearch(nums: number[], target: number): number {
	let low = 0, high = nums.length;
	while (low < high) {
			const mid = Math.floor((low + high) / 2);
			if (nums[mid] < target) {
					low = mid + 1;
			} else {
					high = mid;
			}
	}
	return low;
}


minOperations([3, 1, 6, 8], [1, 5])
