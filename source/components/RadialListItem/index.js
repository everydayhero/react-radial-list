import React from 'react'
import css from 'cxsync'

import { xOffset, yOffset } from '../../lib/utils'
import styles from './styles'

const NORTH = -90

const RadialListItem = ({
  radius,
  item,
  index,
  count,
  arc = 360,
  offsetDegrees = -90,
  itemStyles = {},
  selected = false,
  collapsed = false
}) => {
  const rotation = collapsed ? NORTH : (offsetDegrees + NORTH + (arc / count * index))
  const listItemStyles = css(
    styles.list,
    (selected && styles.selected),
    itemStyles,
    { transform: `rotate(${rotation}deg)` }
  )
  const labelStyles = css(styles.label, { transform: `rotate(${rotation * -1}deg) translate(${xOffset(radius, rotation)}, ${yOffset(radius, rotation)})` })

  return (
    <li className={`radial-list-item ${listItemStyles}`}>
      <span className={`radial-list-item-content ${labelStyles}`}>
        {item}
      </span>
    </li>
  )
}

RadialListItem.propTypes = {
  item: React.PropTypes.node.isRequired,
  index: React.PropTypes.number.isRequired,
  count: React.PropTypes.number.isRequired,
  itemStyles: React.PropTypes.object,
  offsetDegrees: React.PropTypes.number,
  selected: React.PropTypes.bool,
  collapsed: React.PropTypes.bool
}

export default RadialListItem
