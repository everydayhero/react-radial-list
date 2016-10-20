import React from 'react'
import css from 'cxsync'

import styles from './styles'
import RadialListItem from '../RadialListItem'

const RadialList = ({
  items,
  selectedItemIndex,
  diameter = 240, // By default renders around circle with a diameter of 240px
  offsetDegrees = 0, // Positions the first item at 12 o'clock
  arc = 360,
  listStyles = {},
  itemStyles = {},
  collapsed = false
}) => {
  const radius = collapsed ? 20 : diameter / 2
  const liStyles = css(styles.list, {
    width: radius * 2,
    height: radius * 2
  }, listStyles)

  return (
    <ul className={`radial-list ${liStyles}`}>
      {items.map((item, i) => (
        <RadialListItem
          key={i}
          radius={radius}
          item={item}
          index={i}
          count={items.length}
          arc={arc}
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
