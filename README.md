# common

[![RR0](https://circleci.com/gh/RR0/common.svg?style=svg)](https://app.circleci.com/pipelines/github/RR0/common)

Common and utility classes

## Installation

```
npm install @rr0/common --save
```

## API

### KeyValue
- `KeyValue<T>` defines a type whole all fields are of type `T`.

### Object
- `ObjectUtils.isUndefined(val)` checks if `val` is strictly `undefined`.
- `ObjectUtils.isDefined(val)` checks if `val` is strictly anything but `undefined`.
- `ObjectUtils.isUnset(val)` checks if `val` is strictly `undefined` or `null`.
- `ObjectUtils.isSet(val)` checks if `val` is strictly anything but `undefined` nor `null`.

### String
- `StringUtils.toString(val)` returns a string representation of `val`, enclosed in quotes if `val` is a `string`.

### Gender
- `Gender` is an enumeration to qualify things' gender.
