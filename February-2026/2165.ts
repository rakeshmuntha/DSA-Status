function smallestNumber(num: number): number {
    
    let flag = true;
    if(num < 0) {
        flag = false;
        num = -num;
    }

    let arr = new String(num).split("");

    arr.sort((a, b) => flag ? Number(a) - Number(b) : Number(b) - Number(a));

    if(!flag) return -Number(arr.join(""));

    let i = 0;
    if(arr[i] === '0') {
        while(arr[i] === '0') i++;

        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp; 
    }

    return Number(arr.join(""));
};