import cxs from 'cxs'
import prefixer from 'inline-style-prefixer/static'

export default ...rest => cxs(prefixer(Object.assign({}, ...rest)))
