export const cleanChar = (character) => {
    const accents = [
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
        'Y Ý Ỳ Ỹ Ỷ Ỵ'
    ]

    for (let vowel of accents) {
        let regex = new RegExp(`[${vowel.replace(/ /g, '').slice(1)}]`)
        if (character.match(regex)) {
            return vowel[0]
        }
    }

    return character
}

export const isVowel = (character) => {
    return 'aeiouy'.indexOf(character) !== -1
}

export const addAccent = (character, modifier) => {
    const map = {
        f: "\u0300",
        s: "\u0301",
        r: "\u0309",
        x: "\u0303",
        j: "\u0323",
    }

    if (!isVowel(character)) return character
    if (Object.keys(map).indexOf(modifier) === -1) return character

    return `${character}${map[modifier]}`.normalize()
}
