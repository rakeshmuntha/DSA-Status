function sortByBits(arr: number[]): number[] {

    function bits(n: number) {
        let cnt = 0;

        while(n > 0) {
            if((n & 1) === 1) cnt++;
            n = n >> 1;
        }
        return cnt;
    }

    arr.sort((a, b) => {
        let c = bits(a), d = bits(b);
        return c === d ? a - b : c - d;
    })
    return arr;
};