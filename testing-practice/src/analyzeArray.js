/**
 * @param {Array} arr
 */
export default function analyzeArray(arr) {
  return {
    average: arr.reduce((t, c) => t + c, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
