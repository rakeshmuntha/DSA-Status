function maximizeGreatness(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let j = 0, cnt = 0;

    for(let i = 0 ; i < arr.length ; i++) {

        while(j < arr.length && arr[j] <= arr[i]) j++;
        if(j === arr.length) continue;

        cnt++;
        j++;
    }
    return cnt;
};