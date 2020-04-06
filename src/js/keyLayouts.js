import ru from './ru'
import en from './en'

class KeyboardLayouts {
  constructor() {
    this.layouts = {
      ru,
      en,
    }
  }

  get(layout) {
    return layout ? this.layouts[layout] : this.layouts
  }
}

export default KeyboardLayouts
