import React from 'react'
import cxs from 'cxs'

import RadialListItem from '../RadialListItem'

const BASE_STYLES = {
  display: 'block',
  position: 'relative',
  margin: 0,
  padding: 0
}

const RadialList = ({
  items,
  diameter = 240, // By default renders around circle with a diameter of 240px
  offsetDegrees = -90, // Positions the first item at 12 o'clock
  listStyles = {},
  itemStyles = {}
}) => {
  const styles = Object.assign({}, BASE_STYLES, {
    width: diameter,
    height: diameter
  }, listStyles)

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
  diameter: React.PropTypes.oneOf([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  offsetDegrees: React.PropTypes.number,
  listStyles: React.PropTypes.object,
  itemStyles: React.PropTypes.object
}

export default RadialList
