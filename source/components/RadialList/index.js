import React from 'react'
import cxs from 'cxs'

import RadialListItem from '../RadialListItem'

const BASE_STYLES = {
  display: 'block',
  position: 'relative',
  // width: '100%',
  // height: '100%'
  width: '240px',
  height: '240px',
  margin: 0,
  padding: 0
}

const RadialList = ({
  items,
  offsetDegrees,
  listStyles,
  itemStyles
}) => {
  const styles = Object.assign({}, BASE_STYLES, listStyles)

  return (
    <ul className={`radial-list ${cxs(styles)}`}>
      {items.map((item, i) => (
        <RadialListItem
          key={i}
          item={item}
          index={i}
          count={items.length}
          offsetDegrees={offsetDegrees}
          itemStyles={itemStyles}
        />
      ))}
    </ul>
  )
}

RadialList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  offsetDegrees: React.PropTypes.number,
  listStyles: React.PropTypes.object,
  itemStyles: React.PropTypes.object
}

RadialList.defaultProps = {
  offsetDegrees: -90, // Positions the first item at 12 o'clock
  listStyles: {},
  itemStyles: {}
}

export default RadialList
