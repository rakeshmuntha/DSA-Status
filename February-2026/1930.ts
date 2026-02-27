function countPalindromicSubsequence(s: string): number {
    
    let h = new Map<string, number[]>(), ans = 0;

    for(let i = 0 ; i < s.length ; i++) {
        if(!h.has(s[i])) h.set(s[i], new Array());
        h.get(s[i]).push(i);
    }

    for(let [k, v] of h) {
        
        if(v.length > 1) {
            let hs = new Set(), first = v[0], last = v[v.length - 1];

            for(let i = first + 1 ; i < last ; i++) {
                hs.add(s[i]);
            }
            ans += hs.size;
        }
    }

    return ans;
};