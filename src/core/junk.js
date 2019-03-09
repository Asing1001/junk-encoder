import nouns from "../data/nouns.js";
import verbs from "../data/verbs.js";

const encodeBase64ToJunk = (b64text) => {
  let junk = ''
  b64text.split('').forEach((char, index) => {
    const isLastOne = index === b64text.length - 1
    if (index % 3 === 0) {
      const matched = getMatchedbyValue(nouns, char)
      junk += matched ? matched.key : '$'
    } else if (index % 3 === 1) {
      const matched = getMatchedbyValue(verbs, char)
      junk += matched ? matched.key : '$'
    } else {
      const matched = getMatchedbyValue(nouns, char)
      junk += matched ? matched.key : '$'
      junk += isLastOne ? '' : '，'
    }
    junk += isLastOne ? '。' : ''
  })
  return junk
}

const decodeJunkToBase64 = (junk) => {
  const cleanText = junk.replace(/，|。/g, '')
  const arrCleanText = cleanText.split('')
  let result = ''
  let dictionary, keyword, matched
  for (let i = 0; i < cleanText.length / 2; i++) {
    keyword = arrCleanText.splice(0, 2).join('')
    dictionary = i % 3 === 1 ? verbs : nouns
    matched = getMatchedbyKey(dictionary, keyword)
    result += matched ? matched.value : ''
  }
  return result
}

const getMatchedbyKey = (dictionary, keyword) => dictionary.find(({ key }) => key === keyword)
const getMatchedbyValue = (dictionary, char) => dictionary.find(({ value }) => value === char)

export { encodeBase64ToJunk, decodeJunkToBase64 }