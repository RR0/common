import {ObjectUtils} from "util/ObjectUtils";

test('check undefined', () => {
  expect(ObjectUtils.isUndefined(undefined)).toBe(true)
  expect(ObjectUtils.isUndefined(null)).toBe(false)
  expect(ObjectUtils.isUndefined('')).toBe(false)
  expect(ObjectUtils.isUndefined(0)).toBe(false)
})

test('check defined', () => {
  expect(ObjectUtils.isDefined(undefined)).toBe(false)
  expect(ObjectUtils.isDefined(null)).toBe(true)
  expect(ObjectUtils.isDefined('')).toBe(true)
  expect(ObjectUtils.isDefined(0)).toBe(true)
})

test('check not set', () => {
  expect(ObjectUtils.isNotSet(undefined)).toBe(true)
  expect(ObjectUtils.isNotSet(null)).toBe(true)
  expect(ObjectUtils.isNotSet('')).toBe(false)
  expect(ObjectUtils.isNotSet(0)).toBe(false)
})

test('check set', () => {
  expect(ObjectUtils.isSet(undefined)).toBe(false)
  expect(ObjectUtils.isSet(null)).toBe(false)
  expect(ObjectUtils.isSet('')).toBe(true)
  expect(ObjectUtils.isSet(0)).toBe(true)
})
