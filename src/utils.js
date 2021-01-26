const ACCENTED_CHARACTERS = [
  'a á à ã ả ạ ă ắ ằ ẵ ẳ ặ â ấ ầ ẫ ẩ ậ',
  'A Á À Ã Ả Ạ Ă Ắ Ằ Ẵ Ẳ Ặ Â Ấ Ầ Ẫ Ẩ Ậ',
  'd đ', 'D Đ',
  'e é è ẽ ẻ ẹ ê ế ề ễ ể ệ',
  'E É È Ẽ Ẻ Ẹ Ê Ế Ề Ễ Ể Ệ',
  'i í ì ĩ ỉ ị',
  'I Í Ì Ĩ Ỉ Ị',
  'o ó ò õ ỏ ọ ô ố ồ ỗ ổ ộ ơ ớ ờ ỡ ở ợ',
  'O Ó Ò Õ Ỏ Ọ Ô Ố Ồ Ỗ Ổ Ộ Ơ Ớ Ờ Ỡ Ở Ợ',
  'u ú ù ũ ủ ụ ư ứ ừ ữ ử ự',
  'U Ú Ù Ũ Ủ Ụ Ư Ứ Ừ Ữ Ử Ự',
  'y ý ỳ ỹ ỷ ỵ',
  'Y Ý Ỳ Ỹ Ỷ Ỵ',
]

const MODIFIER_MAP = {
  sac:   '\u0301',
  huyen: '\u0300',
  hoi:   '\u0309',
  nga:   '\u0303',
  nang:  '\u0323',
}

const ACCENT_MAP = {
  sac:   'á ắ ấ Á Ắ Ấ é ế É Ế í Í ó ố ớ Ó Ố Ớ ú ứ Ú Ứ ý Ý',
  huyen: 'à ằ ầ À Ằ Ầ è ề È Ề ì Ì ò ồ ờ Ò Ồ Ờ ù ừ Ù Ừ ỳ Ỳ',
  hoi:   'ả ẳ ẩ Ả Ẳ Ẩ ẻ ể Ẻ Ể ỉ Ỉ ỏ ổ ở Ỏ Ổ Ở ủ ử Ủ Ử ỷ Ỷ',
  nga:   'ã ẵ ẫ Ã Ẵ Ẫ ẽ ễ Ẽ Ễ ĩ Ĩ õ ỗ ỡ Õ Ỗ Ỡ ũ ữ Ũ Ữ ỹ Ỹ',
  nang:  'ạ ặ ậ Ạ Ặ Ậ ẹ ệ Ẹ Ệ ị Ị ọ ộ ợ Ọ Ộ Ợ ụ ự Ụ Ự ỵ Ỵ',
}

const VALID_STARTING_CONSONANTS = [
  'b', 'c', 'd', 'đ', 'g', 'gh', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'x',
  'ch', 'gi', 'kh', 'nh', 'ngh', 'ph', 'qu', 'th', 'tr'
]

const VALID_ENDINGS = [
  'c', 'ch', 'm', 'n', 'nh', 'ng', 'p', 't', 'a', 'e', 'ê', 'i', 'o', 'ơ', 'u', 'y'
]

const start = `(${VALID_STARTING_CONSONANTS.join('|')})`
const end = `(${VALID_ENDINGS.join('|')})`
const vowels = Object.values(ACCENTED_CHARACTERS).join('').replace(/ /g, '').replace(/[dđ]/gi, '')

const VALID_WORD = new RegExp(`^${start}?[${vowels}]+${end}?$`)

export const cleanChar = (character) => {
  for (let vowel of ACCENTED_CHARACTERS) {
    let regex = new RegExp(`[${vowel.replace(/ /g, '').slice(1)}]`)

    if (character.match(regex)) return vowel[0]
  }

  return character
}

// NOTE: Unterstützt alle Vokale, aber nur ohne Akzente
export const isVowel = (character) => {
  return 'aăâAĂÂeêEÊiIoôOÔơƠuUưƯyY'.indexOf(character) !== -1
}

export const addAccent = (character, modifier) => {
  if (!isVowel(character)) return character
  if (Object.keys(MODIFIER_MAP).indexOf(modifier) === -1) return character

  return `${character}${MODIFIER_MAP[modifier]}`.normalize()
}

export const getAccent = (word) => {
  for (let accent of Object.keys(ACCENT_MAP)) {
    let accented = ACCENT_MAP[accent]
    let regex = new RegExp(`[${accented.replace(/ /g, '')}]`)
        
    if (word.match(regex)) return accent
  }

  return null
}

export const addCharacter = (word, character) => {
  // Wir brauchen keine Logik, wenn kein Modifikator geklickt wurde
  if ('wsfrxjdoeaWSFRXJDOEA'.indexOf(character) !== -1) return `${word}${character}`

  switch (character) {
    case 'w':
      break
    case 'a':
      break
    case 'e':
      break
    case 'o':
      break
    case 'd':
      break
  }

  if (word.split('').every(character => !isVowel(cleanChar(character)))) return `${word}${character}`

  //
  return `${word}+${character}`
}
