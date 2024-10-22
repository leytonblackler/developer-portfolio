import { type IconType } from "react-icons";
import {
  WiDayCloudy,
  WiDayCloudyGusts,
  WiDayFog,
  WiDayHail,
  WiDayHaze,
  WiDayRain,
  WiDayRainMix,
  WiDayShowers,
  WiDaySleet,
  WiDaySnow,
  WiDaySprinkle,
  WiDayStormShowers,
  WiDaySunny,
  WiDayThunderstorm,
  WiDust,
  WiHot,
  WiHurricane,
  WiNightAltCloudy,
  WiNightAltCloudyGusts,
  WiNightAltHail,
  WiNightAltRain,
  WiNightAltRainMix,
  WiNightAltShowers,
  WiNightAltSleet,
  WiNightAltSnow,
  WiNightAltSprinkle,
  WiNightAltStormShowers,
  WiNightAltThunderstorm,
  WiNightClear,
  WiNightFog,
  WiSandstorm,
  WiSmog,
  WiSmoke,
  WiSnowflakeCold,
  WiStrongWind,
  WiTornado,
} from "react-icons/wi";

type IconResolver = (isDaytime: boolean) => IconType;

type IconMapping = Record<number, IconResolver>;

// TODO: Lazy load specific icon
export const iconMapping: IconMapping = {
  /**
   * 200 → 210
   */
  200: (isDaytime) => (isDaytime ? WiDayStormShowers : WiNightAltStormShowers),
  /**
   * 211 → 221
   */
  211: (isDaytime) => (isDaytime ? WiDayThunderstorm : WiNightAltThunderstorm),
  /**
   * 230 → 232
   */
  230: (isDaytime) => (isDaytime ? WiDayStormShowers : WiNightAltStormShowers),
  /**
   * 300 → 321
   */
  300: (isDaytime) => (isDaytime ? WiDaySprinkle : WiNightAltSprinkle),
  /**
   * 500 → 504
   */
  500: (isDaytime) => (isDaytime ? WiDayRain : WiNightAltRain),
  /**
   * 511
   */
  511: (isDaytime) => (isDaytime ? WiDayRainMix : WiNightAltRainMix),
  /**
   * 520 → 531
   */
  520: (isDaytime) => (isDaytime ? WiDayShowers : WiNightAltShowers),
  /**
   * 600 → 602
   */
  600: (isDaytime) => (isDaytime ? WiDaySnow : WiNightAltSnow),
  /**
   * 611 → 612
   */
  611: (isDaytime) => (isDaytime ? WiDaySleet : WiNightAltSleet),
  /**
   * 615 → 622
   */
  615: (isDaytime) => (isDaytime ? WiDayRainMix : WiNightAltRainMix),
  /**
   * 701
   */
  701: (isDaytime) => (isDaytime ? WiDaySprinkle : WiNightAltSprinkle),
  /**
   * 711
   */
  711: () => WiSmoke,
  /**
   * 721
   */
  721: () => WiDayHaze,
  /**
   * 731
   */
  731: (isDaytime) => (isDaytime ? WiDayCloudyGusts : WiNightAltCloudyGusts),
  /**
   * 741
   */
  741: (isDaytime) => (isDaytime ? WiDayFog : WiNightFog),
  /**
   * 751
   */
  751: () => WiSandstorm,
  /**
   * 761
   */
  761: () => WiDust,
  /**
   * 762
   */
  762: () => WiSmog,
  /**
   * 771
   */
  771: () => WiStrongWind,
  /**
   * 781
   */
  781: () => WiTornado,
  /**
   * 800
   */
  800: (isDaytime) => (isDaytime ? WiDaySunny : WiNightClear),
  /**
   * 801 → 804
   */
  801: (isDaytime) => (isDaytime ? WiDayCloudy : WiNightAltCloudy),
  /**
   * 900
   */
  900: () => WiTornado,
  /**
   * 901 → 902
   */
  901: () => WiHurricane,
  /**
   * 903
   */
  903: () => WiSnowflakeCold,
  /**
   * 904
   */
  904: () => WiHot,
  /**
   * 905
   */
  905: () => WiStrongWind,
  /**
   * 906
   */
  906: (isDaytime) => (isDaytime ? WiDayHail : WiNightAltHail),
  /**
   * 951
   */
  951: (isDaytime) => (isDaytime ? WiDaySunny : WiNightClear),
  /**
   * 952 → 959
   */
  952: (isDaytime) => (isDaytime ? WiDayCloudyGusts : WiNightAltCloudyGusts),
  /**
   * 960 → 961
   */
  960: (isDaytime) => (isDaytime ? WiDayThunderstorm : WiNightAltThunderstorm),
  /**
   * 962
   */
  962: () => WiHurricane,
};
