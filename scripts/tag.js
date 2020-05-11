#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const semver = require('semver')

const pathToPackageJson = path.join(__dirname, '../package.json')

const source = fs.readFileSync(pathToPackageJson)

const { version } = JSON.parse(source.toString())

const nextVersion = semver.inc(version, 'release')

fs.writeFileSync(pathToPackageJson, JSON.stringify({
  ...content,
  version: nextVersion
}, null, 2))