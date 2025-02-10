export const quine = (): string => {
    const source = `export const quine = (): string => {
    return \`${quine.toString().replace(/exports\./g, '')}\`;
};`;
    return source;
};




quine()
// expected '() => {\n    let sourceCode = exports.quine.toString().replace(/\"/g, \'\\\"\');\n    console.log({ sourceCode });\n    return sourceCode;\n}' 
// to equal 'export const quine = (): string => {\n    let sourceCode = quine.toString().replace(/"/g, \'\\"\');\n\n    console.log({sourceCode});\n    return sourceCode\n};'