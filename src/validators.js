import {
  BUTTON_TYPES,
  NAV_ICONS,
  HOURS_IN_A_DAY,
  MIDNIGHT_HOUR,
} from "./constants"

export function isPageValid(page) {
  return Object.keys(NAV_ICONS).includes(page)
}

export function isButtonTypeValid(BUTTON_TYPE_DANGER) {
  return Object.keys(BUTTON_TYPES).includes(type)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_A_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isNotEmptyString(label)
}

export function isUndefined(value) {
  return value === undefined
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNumber(value) {
  return typeof value === "number"
}

function isString(value) {
  return typeof value === "string"
}

function isNull(value) {
  return value === null
}
