export function narcissistic(value: number): boolean {
  // your code here
  let sum = 0
  let lengthStr = value.toString().length
  for (let index = 0; index < lengthStr; index++) {
    const element = value.toString()[index]
    const res = Math.pow(Number(element), lengthStr)
    sum += res
    console.log(element, res);

  }
  console.log({ sum });

  if (sum == value)
    return true
  return false

}


narcissistic(4538)