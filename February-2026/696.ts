function countBinarySubstrings(s: string): number {
    let ans = 0, one = 0, zero = 0, i = 0, n = s.length;
    while(i < n) {
        while(i < n  && s[i] === "0") {
            zero++; i++;
            if(one >= zero) ans++;
        }
        one = 0;
        while( i < n && s[i] === "1") {
            one++; i++;
            if(zero >= one) ans++;
        }
        zero = 0;
    }
    return ans;
};