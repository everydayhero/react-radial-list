import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { hasStyle, renderAndExtractClassnames, styles } from '../../../../test/styleInspection'
import RadialListItem from '../'

test('renders the item inside a list/span container', t => {
  const item = <div className='test-item'>Test Item</div>
  const wrapper = shallow(
    <RadialListItem
      item={item}
      index={0}
      count={6}
    />
  )

  const listItem = wrapper.find('li.radial-list-item')
  t.true(listItem.length === 1)
  t.true(listItem.find('span').length === 1)
  t.true(listItem.find('span').contains(item))
})

test('sets the transform offset styles so the li will rotate around a central point', t => {
  let item = radialListItem(<div className='test-item'>Test Item</div>, 0, 6)
  let classNames = renderAndExtractClassnames(item, 'li')

  t.true(hasStyle(classNames, 'transform', 'rotate(-240deg)'))

  item = radialListItem(<div className='test-item'>Test Item</div>, 1, 6)
  classNames = renderAndExtractClassnames(item)
  t.true(hasStyle(classNames, 'transform', 'rotate(-180deg)'))

  item = radialListItem(<div className='test-item'>Test Item</div>, 2, 6)
  classNames = renderAndExtractClassnames(item)
  t.true(hasStyle(classNames, 'transform', 'rotate(-120deg)'))
})

test('counter-rotates the internal span so the elements render upright', t => {
  let item = radialListItem(<div className='test-item'>Test Item</div>, 1, 6)

  let classNames = renderAndExtractClassnames(item, '.radial-list-item-content')
  t.true(hasStyle(classNames, 'transform', 'rotate(180deg)'))

  item = radialListItem(<div className='test-item'>Test Item</div>, 2, 6)
  classNames = renderAndExtractClassnames(item, '.radial-list-item-content')
  t.true(hasStyle(classNames, 'transform', 'rotate(120deg)'))
})

const radialListItem = (item, index, count) => (
  <RadialListItem
    item={item}
    index={index}
    count={count}
  />
)
