export const TomanConvertor = (num: number) => {
  const numString = num.toString()
  const numStringLength = numString.length
  let formattedString = ''
  for (let i = 0; i < numStringLength; i++) {
    formattedString += numString[i]
    if ((numStringLength - i - 1) % 3 === 0 && i !== numStringLength - 1) {
      formattedString += '/'
    }
  }
  return `${formattedString} تومان`
}
