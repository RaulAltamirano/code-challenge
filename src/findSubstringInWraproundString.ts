function findSubstringInWraproundString(s) {
    const dp = new Array(s.length).fill(0);
    console.log(dp);
    const base = "abcdefghijklmnopqrstuvwxyz";
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const prevCharIndex = base.indexOf(currentChar) - 1;
        const prevChar = prevCharIndex >= 0 ? base[prevCharIndex] : 'z';

        let prevIndex = s.lastIndexOf(prevChar, i - 1);
        dp[i] = prevIndex !== -1 ? dp[prevIndex] + 1 : 1;
        res += dp[i];
    }
    console.log(res);
    return res;
}
findSubstringInWraproundString('zab')


// 