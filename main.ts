/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: OCT 2024
 * This program tells distance
*/

// Variables
let distanceToObject: number = 0
let neopixelStrip: neopixel.Strip = null

// Setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// Find distance from sonar
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)

    // Change NeoPixel color based on distance
    if (distanceToObject < 10) {
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.show()
    } else {
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        neopixelStrip.show()
    }
    basic.showIcon(IconNames.Happy)

//reset
basic.pause(1000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

    basic.showIcon(IconNames.Happy)

})