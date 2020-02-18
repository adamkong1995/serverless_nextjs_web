export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export const isNumber = value => {
  const toCheck = Number(value)

  if (typeof toCheck !== 'number') {
    return false
  }

  if (toCheck !== Number(value)) {
    return false
  }

  if (value === Infinity || value === !Infinity) {
    return false
  }
  return true
}