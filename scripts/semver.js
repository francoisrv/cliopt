#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const semver = require('semver')

const parts = process.env.GITHUB_REF.split(/\//)

const source = fs.readFileSync(path.join(__dirname, '../package.json'))

const content = JSON.parse(source.toString())

let nextVersion = content.version

if (parts[0] === 'refs' && parts[1] === 'heads') {
  if (parts[2] === 'feature') {
    nextVersion = semver.inc(content.version, 'preminor')
  } else if (parts[2] === 'fix') {
    nextVersion = semver.inc(content.version, 'prepatch')
  } else if (parts[2] === 'develop') {
    nextVersion = semver.inc(content.version, 'release')
  }
}

if (nextVersion !== content.version) {
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify({
    ...content,
    version: nextVersion
  }, null, 2))
}