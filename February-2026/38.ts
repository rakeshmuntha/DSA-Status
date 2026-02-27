function countAndSay(n: number): string {

    let s = '1';

    for(let i = 1 ; i < n ; i++) {

        let arr: string[] = [];

        for(let j = 0 ; j < s.length ; ) {
            let char = s[j], cnt = 0;

            while(s[j] === char) {
                cnt++;
                j++;
            }

            arr.push(cnt + "", char);
        }

        s = arr.join("");
    }  

    return s;
};