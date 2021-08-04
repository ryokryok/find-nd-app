import { CaptureSetting } from './types'

export function calculateExposureValue(setting: CaptureSetting): number {
  const { iso, shutterSpeed, fNumber } = setting
  const evs = Math.log2(fNumber ** 2 * shutterSpeed)
  const correctionEv = Math.log2(iso / 100)
  return round(evs - correctionEv, 2)
}

export function calculateNDValue(
  userSetting: CaptureSetting,
  referenceSetting: CaptureSetting
): number {
  const diffND = calculateExposureValue(referenceSetting) - calculateExposureValue(userSetting)
  return round(2 ** diffND, 2)
}

export function round(value: number, digits = 0): number {
  return parseFloat(value.toFixed(digits))
}
