import { cleanChar, addAccent, getAccent, addCharacter } from '../src/utils'

test('addCharacter()', () => {
  // TODO: Add uppercase variants

  const matches = [
    // Modified vowels
    'a',    'w',   'ă',
    'ac',   'w',   'ăc',
    'am',   'w',   'ăm',
    'an',   'w',   'ăn',
    'ang',  'w',   'ăng',
    'ap',   'w',   'ăp',
    'at',   'w',   'ăt',
    'a',    'a',   'â', 
    'ac',   'a',   'âc',
    'am',   'a',   'âm',
    'an',   'a',   'ân',
    'ang',  'a',   'âng',
    'ap',   'a',   'âp',
    'at',   'a',   'ât',
    'e',    'e',   'ê',
    'o',    'o',   'ô',
    'o',    'w',   'ơ',
    'u',    'w',   'ư',
    'ie',   'e',   'iê',
    'oa',   'w',   'oă',
    'ua',   'a',   'uâ',
    'uo',   'o',   'uô',
    'uye',  'e',   'uyê',
    'uo',   'w',   'ươ',
    'ye',   'e',   'yê',

    //
    'ươ',   'o',   'uô',
    'uô',   'w',   'ươ',
    'ưo',   'c',   'ươc', 
    'yen',  'e',   'yên',
    'yem',  'e',   'yêm',
    'yeu',  'e',   'yêu',
  ]



  for (let i = 0; i < matches.length / 3; i++) {
    let [word, character, expected] = matches.slice(i * 3, i * 3 + 3)

    expect(addCharacter(word, character)).toBe(expected)
  }
})

/*
test('cleanChar()', () => {
  expect(cleanChar('à')).toBe('a')
  expect(cleanChar('Ằ')).toBe('A')
  expect(cleanChar('ê')).toBe('e')
  expect(cleanChar('ư')).toBe('u')
  expect(cleanChar('w')).toBe('w')
})

test('addAccent()', () => {
  expect(addAccent('a', 'huyen')).toBe('à')
  expect(addAccent('Y', 'sac')).toBe('Ý')
  expect(addAccent('ư', 'nang')).toBe('ự')
})

test('getAccent()', () => {
  expect(getAccent('a')).toBe(null)
  expect(getAccent('à')).toBe('huyen')
  expect(getAccent('Ỡ')).toBe('nga')
})
*/

/*
import Keyboard from 'simple-keyboard';
import SimpleKeyboardVietnameseTelex from '../src/index';

test('Runs without crashing', () => {
  const div = document.createElement('div');
  
  div.className = "simple-keyboard";
  document.body.appendChild(div);

  let keyboard = new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true,
    useMouseEvents: true,
    autocorrectDict: ["dog", "house"],
    modules: [
      SimpleKeyboardVietnameseTelex
    ]
  });

  keyboard.getButtonElement("d").onclick();
  keyboard.getButtonElement("o").onclick();
  keyboard.getButtonElement("{space}").onclick();
  keyboard.getButtonElement("{bksp}").onclick();

  expect(keyboard.getInput()).toBe("dog");
});
*/
