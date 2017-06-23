const elements = require('html-tag-names')
const attrs = require('html-attributes')
const events = {
  onClick: 1,
}

function render(tag, options, contents) {
  // call .render on each if it exists
  if (contents && typeof contents.render === 'function') {
    contents = contents.render()
  } else if (contents instanceof Array) {
    contents = contents.map(c => {
      if (c && typeof c.render === 'function') {
        return c.render()
      } else {
        return c
      }
    })
  }

  if (!contents.length) {
    return React.createElement(tag, options)
  } else {
    return React.createElement(tag, options, contents)
  }
}

function ElementFactory(tag, options) {
  // div.six.columns('hi')
  //                ^ this part
  var renderSelf = function (contents) {
    return render(tag, options, Array.prototype.slice.call(arguments))
  }

  // div.six.columns('hi')
  //     ^   ^ these parts
  return new Proxy(renderSelf, {
    get(target, name, receiver) {
      var newOptions = Object.assign({}, options)

      // add attribute or classNamae
      if (attrs[name] || events[name]) {
        return function(value) {
          newOptions[name] = value
          return ElementFactory(tag, newOptions)
        }
      } else {
        newOptions.className += ' ' + name;
        return ElementFactory(tag, newOptions)
      }
    }
  })
}

elements.map(e => {
  window[e] = ElementFactory(e, { className: '' })
})
