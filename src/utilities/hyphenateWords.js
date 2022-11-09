function hyphenateWords(str) {

  let word = str.toLowerCase().replace(/\s/g, "-")
  return word
}

export {hyphenateWords}