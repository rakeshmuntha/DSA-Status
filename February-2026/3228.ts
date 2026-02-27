function maxOperations(s: string): number {
    
    let ones = 0, n = s.length, ans = 0, i = 0;

    while(i < n) {
        while(i < n && s[i] === '0') {
            i++;
        }

        ans += ones;    

        while(i < n && s[i] === '1') {
            ones++; i++;
        }
    }

    return ans;
};