const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.reverse = isReverse;
  }

  encrypt(str, key, decrypt = false) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    let res = [];
    const NUM_OF_LETTERS = 26;
    let i = 0;
    let diff, sum;
    let strCaps, keyCaps;
    [strCaps, keyCaps] = [str, key].map((el) => el.toUpperCase());

    for (let letter of strCaps) {
      const charStrCapsUnicodeOrdinal = letter.charCodeAt(0);

      if (charStrCapsUnicodeOrdinal >= 65 && charStrCapsUnicodeOrdinal <= 90) {
        const charKeyCapsUnicodeOrdinal =
          keyCaps[i++ % keyCaps.length].charCodeAt(0);
        sum = charKeyCapsUnicodeOrdinal + charStrCapsUnicodeOrdinal;

        if (!decrypt) {
          diff = charKeyCapsUnicodeOrdinal + charStrCapsUnicodeOrdinal;
        } else {
          diff = charStrCapsUnicodeOrdinal - charKeyCapsUnicodeOrdinal;
        }

        let newCharUnicode =
          diff >= 0 ? (diff % NUM_OF_LETTERS) + 65 : diff + NUM_OF_LETTERS + 65;

        let newChar = String.fromCharCode(newCharUnicode);

        res.push(newChar);
      } else {
        // * Not char

        res.push(letter);
      }
    }

    return (this.reverse ? res : res.reverse()).join("");
  }

  decrypt(str, key) {
    return this.encrypt(str, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
