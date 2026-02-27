function binaryGap(n: number): number {
    
    let cnt = 0, max = 0;

    while(n > 0) {
        if((n & 1) === 0) n = n >> 1;
        else {
            cnt = 0;
            n = n >> 1;
            while(n > 0 && (n & 1) === 0) {
                cnt++; 
                n = n >> 1;
            }
            if(n > 0) max = Math.max(cnt + 1, max);
        }
    }

    return max;
};