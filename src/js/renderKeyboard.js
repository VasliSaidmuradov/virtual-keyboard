import renderKeys from './keys'
import KeyboardLayouts from './keyLayouts'

export default function creatKeyboard(lang, shift) {
  const keyboard = document.querySelector('.keyboard')
  const keyboardLayout = new KeyboardLayouts()
  const keyArray = keyboardLayout.get(lang)

  while (keyboard.firstChild) {
    keyboard.removeChild(keyboard.firstChild)
  }

  for (let i = 0; i < 5; i++) {
    const keyRow = document.createElement('div')
    keyRow.classList.add('keyboard__row', `keyboard__row-${i + 1}`)
    if (shift) {
      keyArray.shift[i].forEach((el) => {
        keyRow.appendChild(renderKeys(el))
      })
    } else {
      keyArray.default[i].forEach((el) => {
        keyRow.appendChild(renderKeys(el))
      })
    }

    keyboard.appendChild(keyRow)
  }
}
