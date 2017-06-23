_Yet another "react minus jsx" thing_

`git clone https://github.com/pbrandt1/react-experiment.git && cd react-experiment`
`yarn`
`yarn start`


```javascript
div.row(
  div.four.columns(
    img.style({width: '100%'}).src('https://avatars1.githubusercontent.com/u/3056518?v=3&s=460')
  ),
  div.eight.columns(
    "Testing text that has ",
    a.href('https://www.google.com')('some link'),
    " in it. Weird."
  )
)
```
