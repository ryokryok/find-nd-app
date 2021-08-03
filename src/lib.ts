export function calculateExposureValue(iso: number, shutterSpeed: number, fNumber: number): number {
  const evs = Math.log2(fNumber ** 2 * shutterSpeed)
  const correctionEv = Math.log2(iso / 100)
  return evs - correctionEv
}

type Setting = {
  iso: number
  shutterSpeed: number
  fNumber: number
}

export function calculateNDValue(userSetting: Setting, referenceSetting: Setting): number {
  const diffND = Math.abs(
    calculateExposureValue(
      referenceSetting.iso,
      referenceSetting.shutterSpeed,
      referenceSetting.fNumber
    ) - calculateExposureValue(userSetting.iso, userSetting.shutterSpeed, userSetting.fNumber)
  )
  return 2 ** diffND
}
