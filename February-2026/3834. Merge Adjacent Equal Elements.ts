function mergeAdjacent(arr: number[]): number[] {
    let ans: number[] = [], n = arr.length, i = 0;

    while(i < n) {
        let j = i + 1;

        if(ans.length > 0 && arr[i] === ans[ans.length - 1]) {
            ans.pop(); ans.push(arr[i] * 2);
            i++;
        }
        else if(j === n || arr[i] !== arr[j]) {
            ans.push(arr[i]);
            i++;
        }
        else {
            let left = arr[i], right = arr[j];

            while(left === right) {
                let sum = left + right;
                left = sum;

                while(ans.length > 0 && left === ans[ans.length - 1]) {
                    ans.pop();
                    left = left * 2;
                }
                
                right = j + 1 < n ? arr[j + 1] : -1;
                j++;
            }
            ans.push(left);
            i = j;
        }
    }

    return ans;
};