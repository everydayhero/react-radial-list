import React from 'react'

import css from '../../css'
import styles from './styles'

const RadialListItem = ({
  item,
  index,
  count,
  offsetDegrees = -90,
  itemStyles = {},
  selected = false,
  collapsed = false
}) => {
  const rotation = collapsed ? -90 : (offsetDegrees + (360 / count * index))
  const listItemStyles = css(
    styles.list,
    (selected && styles.selected),
    itemStyles,
    { transform: `rotate(${rotation}deg)` }
  )
  const labelStyles = css(styles.label, { transform: `rotate(${rotation * -1}deg) translateY(-50%)` })

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
