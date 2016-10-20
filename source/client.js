import React from 'react'
import { render } from 'react-dom'

import RadialList from './components/RadialList'

const mount = document.getElementById('mount')

const items = [
  <div>0</div>,
  <div>1</div>,
  <div>2</div>,
  <div>3</div>,
  <div>4</div>,
  <div>5</div>,
  <div>6</div>,
  <div>7</div>,
  <div>8</div>,
  <div>9</div>,
  <div>10</div>
]

render(<RadialList items={items} offsetDegrees={196.5} />, mount)
