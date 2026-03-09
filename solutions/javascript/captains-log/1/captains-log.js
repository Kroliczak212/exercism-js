// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const min = 1000
  const max = 9999
  let random = Math.floor(min + Math.random()*(max - min))
  return (`NCC-${random}`)
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000.0
  const max = 42000.0
  return min + Math.random()*(max - min)
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planets =["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
  const min = 0
  const max = 10
  return planets[Math.floor(min + Math.random()*(max - min))]
}
