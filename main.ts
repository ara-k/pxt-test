//plenbit.ts

/**
 * Blocks for PLEN:bit
 */
//% weight=100 color=#ffd700 icon="\uf0a0" block="PLEN:bitExtend"
namespace plenbitExtend {
  export enum LedLr {
    //% block="A button"
    AButtonSide = 8,
    //% block="B button"
    BButtonSide = 16
}
  /**
   * Check mic
   * @param num - pins
   * @param value - Threshold , Max: 1023 - 'Standard Value'
   * @param adjust - Standard value
   */
  // Threshold "しきい値"
  //% block="Side %num, Mic Value %value, InitValue $adjust"
  //% value.min=0 value.max=511 value.defl=150
  //% adjust.min=0 adjust.max=1023 adjust.defl=550
  //% weight=78
  export function checkMic(num: LedLr,value:number,adjust:number){
      let n = (num == 16) ? AnalogPin.P2 : AnalogPin.P0;
      return ( pins.analogReadPin(n) <= (adjust-value) || (adjust+value) <= pins.analogReadPin(n) ) ? true:false;
  }
}