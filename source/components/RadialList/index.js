import React from 'react'
import css from 'cxsync'

import styles from './styles'
import RadialListItem from '../RadialListItem'

const RadialList = ({
  items,
  selectedItemIndex,
  diameter = 240, // By default renders around circle with a diameter of 240px
  offsetDegrees = -90, // Positions the first item at 12 o'clock
  listStyles = {},
  itemStyles = {},
  collapsed = false
}) => {
  const liStyles = css(styles.list, {
    width: diameter,
    height: diameter
  }, listStyles)

  return (
    <ul className={`radial-list ${liStyles}`}>
      {items.map((item, i) => (
        <RadialListItem
          key={i}
          item={item}
          index={i}
          count={items.length}
          offsetDegrees={offsetDegrees}
          itemStyles={itemStyles}
          selected={i === selectedItemIndex}
          collapsed={collapsed}
        />
      ))}
    </ul>
  )
}

RadialList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  selectedItemIndex: React.PropTypes.number,
  diameter: React.PropTypes.oneOf([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  offsetDegrees: React.PropTypes.number,
  listStyles: React.PropTypes.object,
  itemStyles: React.PropTypes.object,
  collapsed: React.PropTypes.bool
}

export default RadialList
