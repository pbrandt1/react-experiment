var createReactClass = require('create-react-class')
require('./elements')

var Greeting = createReactClass({
  getInitialState() {
    return {
      excitement: '',
      x: 0,
      y: 0
    }
  },

  generateExcitement() {
    console.log('click' + this.state.excitement)
    var intensity = 6 + 6 * Math.random()
    this.setState({
      excitement: this.state.excitement + '!',
      x: intensity * (-.5 + (Math.random() + 0.5 | 0)),
      y: intensity * (-.5 + (Math.random() + 0.5 | 0))
    })

    setTimeout(() => {
      this.setState({
        x: 0,
        y: 0
      })
    }, 75)
  },

  render() {
    return div.container(
      h1.style({transform: `translate3d(${this.state.x}px, ${this.state.y}px, 0)`})('Hello ' + this.props.toWhat + this.state.excitement),
      div.row(
        div.four.columns(
          img.style({width: '100%'}).src('https://avatars1.githubusercontent.com/u/3056518?v=3&s=460')
        ),
        div.eight.columns(
          "Testing text that has ",
          a.href('https://www.google.com')('some link'),
          " it it. Weird."
        )
      ),
      hr(),
      div.row(
        div.twelve.columns(
          button.onClick(this.generateExcitement)('Click Me', span.style({color: '#aaaaaa'})(' to generate excitement')),

          div.unique_class_name(hr()),
          React.createElement(Toggle, {key: 'climate-change-toggle'}, null)
        )
      )
    )
  }
})

var Toggle = createReactClass({
  getInitialState() {
    return {
      isOn: false
    }
  },

  toggle() {
    this.setState({isOn: !this.state.isOn})
  },

  render() {
    return div(
      label(['off', 'on'][+this.state.isOn]),
      button.onClick(this.toggle)(this.props.label || 'Toggle')
    )
  }
})

ReactDOM.render(
  React.createElement(Greeting, {toWhat: 'World'}, null),
  document.getElementById('root')
)
