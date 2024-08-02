import './style.css'

class Component<T extends HTMLElement> {
  container: T

  constructor(container: T) {
    this.container = container
  }

  add(component: Component<T>) {
    this.container.appendChild(component.container)
  }
}

class App extends Component<HTMLDivElement> {
  constructor() {
    super(document.querySelector<HTMLDivElement>('#app')!)

    const { style } = this.container

    style.backgroundColor = 'black'
    style.width = '100%'
    style.height = '100%'
    style.display = 'flex'
    style.alignItems = 'center'
    style.justifyContent = 'center'
  }
}

class Emoji extends Component<HTMLDivElement> {
  image: string

  constructor(image: string) {
    super(document.createElement('div'))

    this.image = image

    this.container.innerText = this.image

    const { style } = this.container

    style.cursor = 'pointer'
    style.backgroundColor = 'red'
    style.height = '.1rem'
    style.width = '.1rem'
    style.display = 'flex'
    style.alignItems = 'center'
    style.justifyContent = 'center'
    style.userSelect = 'none'

    this.container.onmousedown = () => this.container.innerText = '😄'

    this.container.onmouseup = () => this.container.innerText = this.image
  }
}

class Smiley extends Emoji {
  constructor() {
    super('😊')
  }
}

const app = new App

const smiley = new Smiley()

app.add(smiley)



