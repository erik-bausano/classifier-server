/**
 * Node JS file system API that loads files, writes files, lists directories...
 * {@link https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options}
 */
const fs = require('fs')

/**
 * @var {string} file File path relative to project root
 */
const file = 'static/digits.csv'

// Reads file from path and loads its content into the variable.
const contents = fs.readFileSync(file, 'utf8')

/**
 * @var {string[]} lines Splits file content by new line
 */
const lines = contents.split(/\r?\n/)

// Initializes new array that digits are going to be stored in.
const digits = []

// For each line in lines array.
for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
  // Trims whitespace characters.
  const line = lines[lineIndex].trim()

  // We skip empty string.
  if (line === '') {
    continue
  }

  // Splits the line string by comma and parses the string array into integers.
  const inputs = line
    .split(',')
    .map(Number)

  // Adds a new element into the digits output array where target is the last
  // number in the array (the digit classification 0-9) and the rest of the
  // array are the pixels.
  digits.push({
    target: inputs.pop(),
    pixels: inputs,
  })
}

module.exports = digits
