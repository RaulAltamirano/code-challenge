export function getCellAddresses(range: string): string[] {
    const regex = /^([A-Z])(\d+):([A-Z])(\d+)$/;
    const match = range.match(regex);
    if (!match) return [];

    const [, startCol, startRow, endCol, endRow] = match;
    const startCharCode = startCol.charCodeAt(0);
    const endCharCode = endCol.charCodeAt(0);
    const startNum = parseInt(startRow, 10);
    const endNum = parseInt(endRow, 10);

    if (startCharCode > endCharCode || startNum > endNum) return [];
    if (startCharCode === endCharCode && startNum === endNum) return [];

    const res = [];
    for (let num = startNum; num <= endNum; num++) {
        for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
            res.push(`${String.fromCharCode(charCode)}${num}`);
        }
    }
    console.log({ res });
    return res;
}


getCellAddresses('B1:H5')