var isIsomorphic = function(s: string, t: string): boolean {

    const h1 = new Map<string, number>();
    const h2 = new Map<string, number>();

    for(let i = 0 ; i < s.length ; i++) {

        if(!(s[i] in h1)) h1[s[i]] = i;
        if(!(t[i] in h2)) h2[t[i]] = i;

        if(h1[s[i]] !== h2[t[i]]) return false;
    }
    return true;
};