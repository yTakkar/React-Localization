import LocalizedStrings from 'react-localization'

const strings = new LocalizedStrings({
  en: {
    helloWorld: 'Hello World!!',
    goodMorning: 'Good Morning!!',
    howRU: 'How are you!!'
  },
  hi: {
    helloWorld: 'नमस्ते दुनिया',
    goodMorning: 'शुभ प्रभात',
    howRU: 'क्या हाल है'
  },
  gu: {
    helloWorld: 'હેલ્લો વિશ્વ',
    goodMorning: 'સુપ્રભાત',
    howRU: 'તમે કેમ છો'
  },
  mr: {
    helloWorld: 'हॅलो वर्ल्ड',
    goodMorning: 'शुभ प्रभात',
    howRU: 'तू कसा आहेस'
  }
})

export default strings
