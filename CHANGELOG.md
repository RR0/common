# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.3] - 2024-10-10

### Changed

- fix error cause visibility to public

## [1.1.2] - 2024-10-10

### Added

- `Assert.ok(value, message)` works in both Node an browser. Initialize the singleton using assertInit()

## [1.0.1] - To be released

### Added

- `ObjectUtils.asSet(val, errMsg?)` returns val as defined. If it was not, an AssertionError(errMsg) will be thrown.
