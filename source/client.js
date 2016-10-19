import React from 'react'
import { render } from 'react-dom'

import RadialList from './components/RadialList'

const mount = document.getElementById('mount')

const items = [
  <div id='item-1'>0</div>,
  <div id='item-1'>1</div>,
  <div id='item-1'>2</div>,
  <div id='item-1'>3</div>,
  <div id='item-1'>4</div>,
  <div id='item-1'>5</div>,
  <div id='item-1'>6</div>,
  <div id='item-1'>7</div>,
  <div id='item-1'>8</div>,
  <div id='item-1'>9</div>,
  <div id='item-1'>10</div>
]

render(<RadialList items={items} offsetDegrees={196.5} />, mount)
