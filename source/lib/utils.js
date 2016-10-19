const { PI, sin, cos, round } = Math

const radians = (deg) => deg * (PI / 180)
const calcSide = (h, theta, fn) => round(fn(radians(theta)) * h)
const adjacent = (h, theta) => calcSide(h, theta, cos)
const opposite = (h, theta) => calcSide(h, theta, sin)
const offset = (x, r, sign = 1) => (x / r) * 0.5 * sign
const pc = (v) => `${v * 100}%`

export const yOffset = (r, theta) => pc(offset(adjacent(r, theta), r, -1))
export const xOffset = (r, theta) => pc(offset(opposite(r, theta), r))
