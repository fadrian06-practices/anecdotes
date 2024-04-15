const random = (/** @type {number} */ min, /** @type {number} */ max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export default random
