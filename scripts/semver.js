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
    nextVersion = semver.inc(content.version, 'patch')
  }
  console.log(nextVersion)
}