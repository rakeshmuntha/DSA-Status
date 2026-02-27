function countPrimeSetBits(left: number, right: number): number {

    let ans = 0;

    for(let i = left ; i <= right ; i++) {
        if(isPrime(setBits(i))) ans++;
    }  
    return ans;
};

function setBits(n: number) {

    let cnt = 0;
    while(n > 0) {
        if((n & 1) === 1) cnt++;
        n = n >> 1;
    }
    return cnt;
}

function isPrime(n: number) {

    if(n === 1) return false;
    for(let i = 2 ; i <= Math.sqrt(n) ; i++) {

        if(n % i === 0) return false;
    }
    return true;
}