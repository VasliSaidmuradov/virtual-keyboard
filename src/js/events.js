import renderKeybord from './template'
import creatKeyboard from './renderKeyboard'

export const store = window.localStorage
if (store.lang === 'ru') {
  renderKeybord()
  creatKeyboard('ru')
} else {
  renderKeybord()
  creatKeyboard('en')
}

export function lightOn() {
  const allKeys = document.querySelectorAll('.keyboard__key')
  allKeys.forEach((el) => el.classList.toggle('keyboard__key_light-on'))
}

function getPressedKey(event) {
  let output

  if (
    event.code.includes('Numpad')
    || event.code.includes('Shift')
    || event.code.includes('Space')
    || event.code.includes('Backspace')
    || event.code.includes('Control')
    || event.code.includes('Alt')
    || event.code.includes('Meta')
  ) {
    output = event.code
  } else {
    output = event.keyCode
  }
  return output
}

export function keyDown(e) {
  const pressedKey = getPressedKey(e)
  const allKeys = document.querySelectorAll('.keyboard__key')
  allKeys.forEach((el) => {
    if (el.getAttribute('data-code') === `${pressedKey}`) {
      el.classList.add('keyboard__key_active')
    }
  })
}

export function keyUp(e) {
  const pressedKey = getPressedKey(e)
  const allKeys = document.querySelectorAll('.keyboard__key')
  allKeys.forEach((el) => {
    if (el.getAttribute('data-code') === `${pressedKey}`) {
      el.classList.remove('keyboard__key_active')
    }
  })
}

export function capsLock() {
  const capsLockkeyCode = 20
  const allKeys = document.querySelectorAll('.keyboard__key')
  allKeys.forEach((el) => {
    el.classList.toggle('keyboard__key_caps')
    if (el.getAttribute('data-code') === `${capsLockkeyCode}`) {
      el.classList.toggle('keyboard__key_caps-on')
    }
  })
}

export function changeLang(lang) {
  creatKeyboard(lang)
}
