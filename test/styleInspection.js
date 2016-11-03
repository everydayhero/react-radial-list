import cxs from 'cxsync'
import { shallow } from 'enzyme'
import escapeStringRegexp from 'escape-string-regexp'

export const hasStyle = (classNameKeys, key, value) => {
  return cxs.rules
    .filter(rule => classNameKeys.includes(rule.id) && rule.css.includes(key))
    .reduce((prev, current) => {
      const keyValPat = `${escapeStringRegexp(key)}\\s*:\\s*${escapeStringRegexp(value)}`
      return prev || !!current.css.match(new RegExp(keyValPat))
    }, false)
}

export const cxsClassNames = classNames => {
  return classNames.split(' ').filter(cn => cn.includes('cxs-'))
}

export const renderAndExtractClassnames = (element, selector = 'li') => {
  const wrapper = shallow(element)
  return cxsClassNames(wrapper.find(selector).prop('className'))
}
