function hasAllCodes(s: string, k: number): boolean {
    
    let hs = new Set<string>(), arr: string[] = new Array();

    for(let i = 0 ; i < k ; i++) {
        arr[i] = s[i];
    }
    hs.add(arr.join(""));

    for(let i = k ; i < s.length ; i++) {
        arr.shift();
        arr.push(s[i]);
        hs.add(arr.join(""));
    }

    return hs.size === Math.pow(2, k);
};