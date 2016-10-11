import React from 'react'
import cxs from 'cxs'

const BASE_STYLES = {
  display: 'block',
  zIndex: 2,
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '80%',
  height: 20,
  margin: 0,
  padding: 0,
  listStyle: 'none',
  transformOrigin: '0% 50%'
}

const SPAN_STYLES = {
  display: 'block',
  position: 'absolute',
  top: 0,
  width: '100%',
  textAlign: 'center'
}

const RadialListItem = ({
  item,
  index,
  count,
  offsetDegrees,
  itemStyles
}) => {
  const rotation = offsetDegrees + (360 / count * index)
  const listItemStyles = Object.assign({}, BASE_STYLES, itemStyles, {
    transform: `rotate(${rotation}deg)`
  })
  const spanStyles = Object.assign({}, SPAN_STYLES, {
    transform: `rotate(${-rotation}deg)`
  })

  return (
    <li className={`radial-list-item ${cxs(listItemStyles)}`}>
      <span className={`radial-list-item-content ${cxs(spanStyles)}`}>
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
  offsetDegrees: React.PropTypes.number
}

RadialListItem.defaultProps = {
  itemStyles: {},
  offsetDegrees: 0
}

export default RadialListItem
