function lengthOfLastWord(s: string): number {
    const res = s.replace(/\s+/g, " ").trim().split(" ");
    console.log({res});
    let result = res[res.length - 1].length
    console.log({ result }, res);
    return result
};


// lengthOfLastWord('luffy is still joyboy')
lengthOfLastWord("   fly me   to   the moon  ")


// ["fly", "me", "to", "the"," moon"]