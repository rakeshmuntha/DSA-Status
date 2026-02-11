/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(arr1: number[], n: number, arr2: number[], m: number): void {

    let i = n, j = m, k = m + n - 1;

    while(i >= 0 && j >= 0) {

        if(arr1[i] > arr2[j]) {
            let temp = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = temp;
            i--;
        }
        j--;
    }


    for(let i = n ; i < n + m ; i++) {
        arr1[i] = arr2[i - n];
    } 
};