import cxs from 'cxsync'
import { shallow } from 'enzyme'
import escapeStringRegexp from 'escape-string-regexp'

export const hasStyle = (classNameKeys, key, value) => {
  return styles(classNameKeys, key)
    .filter(rule => rule.css.includes(key))
    .reduce((prev, current) => {
      const keyValPat = `${escapeStringRegexp(key)}\\s*:\\s*${escapeStringRegexp(value)}`
      return prev || !!current.css.match(new RegExp(keyValPat))
    }, false)
}

export const styles = (classNameKeys) =>
  cxs.rules
    .filter(rule => classNameKeys.includes(rule.id))

export const cxsClassNames = classNames => {
  return classNames.split(' ').filter(cn => cn.includes('cxsync-'))
}

export const renderAndExtractClassnames = (element, selector = 'li') => {
  const wrapper = shallow(element)
  return cxsClassNames(wrapper.find(selector).prop('className'))
}
