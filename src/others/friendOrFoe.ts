function friend(friends: string[]): string[] {
    //your code here
    const realFriends = []

    for (const element of friends) {
        const lengthWord = element.length
        if (lengthWord < 5 && validation && lengthWord > 2 )
            realFriends.push(element)
    }
    console.log({ realFriends });
    return realFriends
}

friend(["Ryan", "Kieran", "Jason", "Yous"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])
friend(['Hell', 'Is', 'a', 'badd', 'word'])

function validation(str: any) {
    return !isNaN(parseFloat(str)) && isFinite(str);

}