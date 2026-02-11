function numSubarrayProductLessThanK(arr: number[], k: number): number {
    
    let l = 0, r = 0, n = arr.length, product = 1, ans = 0;

    while(r < n && l <= r) {

        product *= arr[r];
        while(l < n && product >= k) {
            product /= arr[l];
            l++;
        }

        if(product < k && l <= r) ans += r - l + 1;
        r++;
    }
    return ans;
};