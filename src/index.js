import * as $ from './js/events'

const textArea = document.querySelector('.text-area')
const shiftAndAlt = {
  shift: false,
  ctrl: false,
}
function mouseActive() {
  const allKeysList = document.querySelectorAll('.keyboard__key')
  allKeysList.forEach((el) => {
    el.addEventListener('mousedown', (e) => {
      e.preventDefault()
      el.classList.add('keyboard__key_active')
      const char = e.toElement.innerText
      if (char === 'Tab') textArea.value += '\t'
      else if (char === 'Enter') textArea.value += '\n'
      else if (char === '') textArea.value += ' '
      else if (char === 'Backspace') textArea.value = [...textArea.value].slice(0, -1).join('')
      else if (char === 'Capslock') $.capsLock()
      else if (char === 'Alt' || char === 'Ctrl' || char === 'Win' || char === 'Shift') textArea.value += ''
      else if (char === 'Fn') $.lightOn()
      else textArea.value += char
    })

    el.addEventListener('mouseup', () => el.classList.remove('keyboard__key_active'))
  })
}
mouseActive()

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  $.keyDown(e)
  if (e.code === 'ShiftLeft') {
    shiftAndAlt.shift = true
  } else if (e.code === 'AltLeft') {
    shiftAndAlt.ctrl = true
  }
  if (shiftAndAlt.shift && shiftAndAlt.ctrl) {
    if ($.store.lang === 'ru') {
      $.changeLang('en')
      $.store.setItem('lang', 'en')
    } else {
      $.changeLang('ru')
      $.store.setItem('lang', 'ru')
    }
    mouseActive()
  }
})

document.addEventListener('keyup', (e) => {
  e.preventDefault()
  $.keyUp(e)
  const keyCode = e.code
  if (e.code === 'ShiftLeft') {
    shiftAndAlt.shift = false
  } else if (e.code === 'AltLeft') {
    shiftAndAlt.ctrl = false
  }
  if (keyCode === 'Tab') {
    textArea.value += '\t'
  } else if (keyCode === 'Enter') {
    textArea.value += '\n'
  } else if (keyCode === 'Space') {
    textArea.value += ' '
  } else if (keyCode === 'Backspace') {
    textArea.value = [...textArea.value].slice(0, -1).join('')
  } else if (keyCode === 'CapsLock') {
    $.capsLock(e)
  } else if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    textArea.value += ''
  } else if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    textArea.value += ''
  } else if (keyCode === 'MetaLeft') {
    textArea.value += ''
  } else if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    textArea.value += ''
  } else if (keyCode === 'WakeUp') {
    $.lightOn()
  } else if (keyCode === 'ArrowLeft' || keyCode === 'ArrowRight' || keyCode === 'ArrowUp' || keyCode === 'ArrowDown') {
    if (keyCode === 'ArrowLeft') textArea.value += '←'
    if (keyCode === 'ArrowRight') textArea.value += '→'
    if (keyCode === 'ArrowUp') textArea.value += '↑'
    if (keyCode === 'ArrowDown') textArea.value += '↓'
  } else {
    textArea.value += e.key
  }
})

// eslint-disable-next-line no-console
console.log('KEEP THE CONSOLE CLEAN :)')
