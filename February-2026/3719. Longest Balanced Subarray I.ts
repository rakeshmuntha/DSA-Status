function longestBalanced(arr: number[]): number {
    
    let max = 0, n = arr.length;

    for(let i = 0 ; i < n ; i++) {
        let even = new Set<number>(), odd = new Set<number>();

        for(let j = i ; j < n ; j++) {
            if(arr[j] % 2 == 0) even.add(arr[j]);
            else odd.add(arr[j]);

            if(even.size == odd.size) {
                max = Math.max(max, j - i + 1);
            }
        }
    }
    return max;
};