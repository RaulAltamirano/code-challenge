function validIPAddress(queryIP: string): string {
    if (queryIP.includes('.')) {
        const parts = queryIP.split('.');
        if (parts.length !== 4) return 'Neither';
        
        for (let part of parts) {
            if (!/^\d+$/.test(part)) return 'Neither';
            const num = Number(part);
            if (num < 0 || num > 255 || (part.length > 1 && part[0] === '0')) {
                return 'Neither';
            }
        }
        return 'IPv4';
    }
    
    if (queryIP.includes(':')) {
        const parts = queryIP.split(':');        
        if (parts.length !== 8) return 'Neither';
        for (let part of parts) {
            if (!/^[0-9a-fA-F]{1,4}$/.test(part)) return 'Neither';
        }
        return 'IPv6';
    }
    
    return 'Neither';
};


const exampleQueryOne = "172.16.254.1"
const validIPAddress2 = validIPAddress(exampleQueryOne)
console.log({validIPAddress2});

const exampleQuerySecond = "01.01.01.01"
const validIPAddress1 = validIPAddress(exampleQuerySecond)
console.log({ validIPAddress1 });