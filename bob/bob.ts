import { stringify } from "querystring"

class Bob {
  hey(inputWords: string): string {
    // Your code here
    const hasnocaps: boolean = inputWords.toLowerCase() === inputWords ? true : false
    let words: string = inputWords.replace(/\s+/g, '')
    words = `A${words}`
    if (hasnocaps) {
      words = words.replace(/\d+/g, 'a')
    }
    else {
      words = words.replace(/\d+/g, 'A')
    }

    // Empty
    if (words.length === 1) {
      return 'Fine. Be that way!'
    }

    // Shouting Question
    if (words.toUpperCase() === words && words.slice(-1) === '?') {
      return 'Calm down, I know what I\'m doing!'
    }

    // Shouting
    if (words.toUpperCase() === words) {
      return 'Whoa, chill out!'
    }

    // Statments
    if (words.slice(-1) === '.' || words.slice(-1) === '!') {
      return 'Whatever.'
    }

    // Questions
    if (words.slice(-1) === '?') {
      return 'Sure.'
    }

    return 'Whatever.'

  }
}

export default Bob
