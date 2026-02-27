function countSubarrays(arr: number[], k: number): number {
    
    let n = arr.length, l = 0, r = 0, min: number[] = [], max: number[] = [], maxSt = 0, minSt = 0, ans = 0;

    while(r < n) {
        
        while(max.length > maxSt && arr[r] >= arr[max[max.length - 1]]) max.pop();
        max.push(r);

        while(min.length > minSt && arr[r] <= arr[min[min.length - 1]]) min.pop();
        min.push(r);

        while(l <= r && (arr[max[maxSt]] - arr[min[minSt]]) * (r - l + 1) > k) {
            if(max[maxSt] === l) maxSt++;
            if(min[minSt] === l) minSt++;
            l++;
        }
        ans += r - l + 1;
        r++;
    }
    return ans;
}