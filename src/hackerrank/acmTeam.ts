function acmTeam(topic: string[]): number[] {
    let maxTopics = 0;
    let teamCount = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            const knownTopics = countTopics(topic[i], topic[j]);

            if (knownTopics > maxTopics) {
                maxTopics = knownTopics;
                teamCount = 1;
            } else if (knownTopics === maxTopics) {
                teamCount++;
            }
        }
    }

    return [maxTopics, teamCount];
}

function countTopics(p1: string, p2: string): number {
    let count = 0;
    for (let i = 0; i < p1.length; i++) {
        if (p1[i] === '1' || p2[i] === '1') {
            count++;
        }
    }
    return count;
}




const testExample = ['10101', '11110', "00010"]
acmTeam(testExample)
