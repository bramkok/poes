#!/usr/bin/env node

require('fs').readFile(process.argv[2], (err, data) => {
  if (err) {
    throw err
  }
  process.stdout.write(data)
})
