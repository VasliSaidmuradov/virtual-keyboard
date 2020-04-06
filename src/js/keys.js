/* eslint-disable no-console */
export default function renderKeys(obj) {
  const key = document.createElement('div')
  const arr = Object.entries(obj)
  const keyText = arr[0][0]
  const keyCode = arr[0][1]
  const keyOn = document.createElement('span')
  key.classList.add('keyboard__key', `keyboard__${keyCode}`)
  key.setAttribute('data-code', `${keyCode}`)
  keyOn.innerHTML = keyText
  key.appendChild(keyOn)
  return key
}
