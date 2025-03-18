
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
        
    }
    console.log({nums1});
}




// const adios = [1,2,3,4,5,6]
// console.log(adios.slice(0, -1));

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)