import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import cxs from 'cxs'
import escapeStringRegexp from 'escape-string-regexp'

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
  const item = <div className='test-item'>Test Item</div>
  let classNames = renderAndExtractClassnames(item, 0, 6)
  t.true(hasStyle(classNames, 'transform', 'rotate(0deg)'))

  classNames = renderAndExtractClassnames(item, 1, 6)
  t.true(hasStyle(classNames, 'transform', 'rotate(60deg)'))

  classNames = renderAndExtractClassnames(item, 2, 6)
  t.true(hasStyle(classNames, 'transform', 'rotate(120deg)'))
})

test('counter-rotates the internal span so the elements render upright', t => {
  const item = <div className='test-item'>Test Item</div>

  let classNames = renderAndExtractClassnames(item, 1, 6, '.radial-list-item-content')
  t.true(hasStyle(classNames, 'transform', 'rotate(-60deg)'))

  classNames = renderAndExtractClassnames(item, 2, 6, '.radial-list-item-content')
  t.true(hasStyle(classNames, 'transform', 'rotate(-120deg)'))
})

const hasStyle = (classNameKeys, key, value) => {
  return cxs.rules
    .filter(rule => classNameKeys.includes(rule.id) && rule.css.includes(key))
    .reduce((prev, current) => {
      const keyValPat = `${escapeStringRegexp(key)}\\s*:\\s*${escapeStringRegexp(value)}`
      return prev || !!current.css.match(new RegExp(keyValPat))
    }, false)
}

const cxsClassNames = classNames => {
  return classNames.split(' ').filter(cn => cn.includes('cxs-'))
}

const renderAndExtractClassnames = (item, index, count, selector = 'li') => {
  const wrapper = shallow(
    <RadialListItem
      item={item}
      index={index}
      count={count}
    />
  )
  return cxsClassNames(wrapper.find(selector).prop('className'))
}
