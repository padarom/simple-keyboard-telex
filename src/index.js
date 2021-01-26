import { cleanChar } from "./utils";

class SimpleKeyboardVietnameseTelex {
  init = keyboard => {
    keyboard.registerModule("vietnameseTelex", module => {
      /**
       * If a word cannot be a proper Vietnamese word, we disable telex
       * modification for the rest of the input of this word.
       *
       * An example is any word that contains the letter "w".
       *
       * @param {string} word
       * @return {boolean} whether telex is disabled for the rest of this word
       */
      module.isTelexDisabled = word => {
        if (word.indexOf("w") !== -1 || word.indexOf("W") !== -1) return true;
        return false;
      };

      // uo -> 2 einzelne Vokale
      // uô -> Gruppe (wie einzelner Vokal)
      // ươ -> Gruppe (wie einzelner Vokal)

      // ----       ----
      // Konsonant
      //            Obere Gruppe aus Linns Liste (horizontale Headline)

      // Am Wortende sind nur
      // c - ch - m - n - nh - ng - p - t
      // erlaubt

      module.modifiableVowels = word => {};

      const modifiers = {
        z: "\u0300",
        f: "\u0300", // à, è, ì, ò, ù, ỳ
        s: "\u0301", // á, é, í, ó, ú, ý
        r: "\u0309", // ả, ẻ, ỉ, ỏ, ủ, ỷ
        x: "\u0303", // ã, ẽ, ĩ, õ, ũ, ỹ
        j: "\u0323", // ạ, ẹ, ị, ọ, ụ, ỵ
        w: "\u031b" // ă,       ơ, ư
      };
      const breve = "\u0306";
      const circumflex = "\u0302";

      // a, ă, â, e, ê, i auch wenn von anderem Vokal gefolgt, haengt Modifikator daran
      // huơ, uê Modifikator an zweitem Vokal

      // 1. Akzent an erstem Vokal
      // 2. 3 Vokale: immer 2., ausser bei ê, dann darauf
      // 3. Wenn hintere Vokale Häkchen oder Dach haben (ư oder ê), dann Akzent darauf
      // 3. xoóng (oo, auf 2. Vokal)
      // 4. óo
      // 5. uyt, uych, uynh Akzent auf y (wie bei uya)
      // 6. ê und ơ können nur auf u folgen
      // 7. Nur ein Dach pro Wort
      // 8. Nur
      // 7. Wenn auf t oder p endet, nur uýt und uỵt möglich

      module.fn = {};
      module.fn.onChange = keyboard.options.onChange;

      keyboard.options.onChange = input => {
        const words = input.split(" ");
        const lastWord = words[words.length - 1];

        let newInput = input;
        if (input == "ee") {
          newInput = `e${circumflex}`;
        }
        console.log(input, newInput);

        module.fn.onChange(newInput.normalize());
      };
    });
  };
}

export default SimpleKeyboardVietnameseTelex;
