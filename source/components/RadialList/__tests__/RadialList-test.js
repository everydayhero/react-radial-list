import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { renderAndExtractClassnames, hasStyle } from '../../../../test/styleInspection'
import RadialListItem from '../../RadialListItem'
import RadialList from '../'

const TEST_ITEMS = [
  <div id='item-1'>Item One</div>,
  <div id='item-2'>Item Two</div>,
  <div id='item-3'>Item Three</div>,
  <div id='item-4'>Item Four</div>,
  <div id='item-5'>Item Five</div>
]

test('Renders as an unordered list', t => {
  const wrapper = shallow(<RadialList items={TEST_ITEMS} />)

  t.true(wrapper.is('ul.radial-list'))
})

test('Renders a RadialListItem for each of props.items', t => {
  const wrapper = shallow(<RadialList items={TEST_ITEMS} />)
  const radialListItems = wrapper.find(RadialListItem)

  t.is(radialListItems.length, 5)
})

test('Provides the correct props to each RadialListItem', t => {
  const wrapper = shallow(
    <RadialList
      items={TEST_ITEMS}
      offsetDegrees={180}
    />
  )
  const radialListItems = wrapper.find(RadialListItem)

  radialListItems.forEach((node, index) => {
    t.is(node.prop('item'), TEST_ITEMS[index])
    t.is(node.prop('index'), index)
    t.is(node.prop('count'), TEST_ITEMS.length)
    t.is(node.prop('offsetDegrees'), 180)
  })
})

test('Passes optional itemStyles onto each RadialListItem', t => {
  const testStyles = {
    color: 'red',
    border: '1px solid red'
  }
  const wrapper = shallow(
    <RadialList
      items={TEST_ITEMS}
      itemStyles={testStyles}
    />
  )
  const radialListItems = wrapper.find(RadialListItem)

  radialListItems.forEach((node, index) => {
    t.is(node.prop('itemStyles'), testStyles)
  })
})

test('Renders optional listStyles onto the list', t => {
  const testStyles = {
    color: 'red',
    border: '1px solid red'
  }
  const radialList = <RadialList items={TEST_ITEMS} listStyles={testStyles} />
  const classNames = renderAndExtractClassnames(radialList, 'ul')

  t.true(hasStyle(classNames, 'color', 'red'))
  t.true(hasStyle(classNames, 'border', '1px solid red'))
})
