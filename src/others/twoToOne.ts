function twoToOne(s1: string, s2: string): string {
    const set1 = new Set(s1);
    const set2 = new Set(s2);

    const combinedSet = new Set([...set1, ...set2]);
    const sortedString = [...combinedSet].sort()
    return sortedString.join('')
}





twoToOne("aretheyhere", "yestheyarehere") // "aehrsty"
