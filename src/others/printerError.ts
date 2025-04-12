function printerError(s: string): string {
  const regex = /[^a-m]/g;
  const matchWords = s.match(regex)

  const res = `${matchWords ? matchWords.length : 0}/${s.length}`;
  return res
}


printerError('aaaxbbbbyyhwawiwjjjwwm')
printerError('aaabbbbhaijjjm')
printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')