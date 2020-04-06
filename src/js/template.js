export default function renderKeybord() {
  const app = document.getElementById('app')
  const main = document.createElement('div')
  main.classList.add('main')

  // Creat textarea section
  const containerTextArea = document.createElement('div')
  containerTextArea.classList.add('container', 'container__text-area')
  const textArea = document.createElement('textarea')
  textArea.classList.add('text-area')
  containerTextArea.appendChild(textArea)

  main.appendChild(containerTextArea)

  // Creat keyboard section
  const containerKeybord = document.createElement('div')
  containerKeybord.classList.add('container', 'container__keyboard')

  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  containerKeybord.appendChild(keyboard)
  main.appendChild(containerKeybord)

  // Creat note list
  const noteWrap = document.createElement('div')
  noteWrap.classList.add('note-wrap')
  const noteList = document.createElement('ul')
  noteList.classList.add('note-wrap__list')

  const text = ['Смены языка ввода: <b>SHIFT + ALT</b> (слева)', 'Включить подсветку клавиатуры: <b>Fn</>', '<span style="color: red;">*</span> ОС Windows']
  for (let i = 0; i < text.length; i++) {
    const noteItem = document.createElement('li')
    noteItem.classList.add('note-wrap__item')
    noteItem.innerHTML = text[i]
    noteList.append(noteItem)
  }

  noteWrap.appendChild(noteList)

  app.appendChild(main)
  app.appendChild(noteWrap)
}
