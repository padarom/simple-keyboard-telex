import { cleanChar, addAccent } from '../src/utils'

test('cleanChar()', () => {
  expect(cleanChar('à')).toBe('a')
  expect(cleanChar('Ằ')).toBe('A')
  expect(cleanChar('ê')).toBe('e')
  expect(cleanChar('ư')).toBe('u')
  expect(cleanChar('w')).toBe('w')
})

test('addAccent()', () => {
  expect(addAccent('a', 'f')).toBe('à')
})

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
