export const isIsogram = (phrase) => (
  phrase.match(/\w/mg).every((char, index, chars) => (
    chars.lastIndexOf(char) === index
  ))
)

isIsogram('abc-def-**ght')
