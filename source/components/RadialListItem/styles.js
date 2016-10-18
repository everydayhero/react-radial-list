const transition = 'transform 0.2s ease-in-out'

export default {
  list: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80%',
    height: 20,
    margin: 0,
    padding: 0,
    listStyle: 'none',
    transformOrigin: '0% 50%',
    transition
  },
  label: {
    display: 'block',
    position: 'absolute',
    top: 0,
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
    transition
  },
  selected: {
    zIndex: 3
  }
}
