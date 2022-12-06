"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomOptions = void 0;
var core_1 = require("@bigheads/core");
function selectRandomKey(object) {
    return Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)];
}
function getRandomOptions() {
    var skinTone = selectRandomKey(core_1.theme.colors.skin);
    var eyes = selectRandomKey(core_1.eyesMap);
    var eyebrows = selectRandomKey(core_1.eyebrowsMap);
    var mouth = selectRandomKey(core_1.mouthsMap);
    var hair = selectRandomKey(core_1.hairMap);
    var facialHair = selectRandomKey(core_1.facialHairMap);
    var clothing = selectRandomKey(core_1.clothingMap);
    var accessory = selectRandomKey(core_1.accessoryMap);
    var graphic = selectRandomKey(core_1.graphicsMap);
    var hat = selectRandomKey(core_1.hatMap);
    var body = selectRandomKey(core_1.bodyMap);
    var hairColor = selectRandomKey(core_1.theme.colors.hair);
    var clothingColor = selectRandomKey(core_1.theme.colors.clothing);
    var circleColor = selectRandomKey(core_1.theme.colors.bgColors);
    var lipColor = selectRandomKey(core_1.theme.colors.lipColors);
    var hatColor = selectRandomKey(core_1.theme.colors.clothing);
    var faceMaskColor = selectRandomKey(core_1.theme.colors.clothing);
    var mask = true;
    var faceMask = false;
    var lashes = Math.random() > 0.5;
    return {
        skinTone: skinTone,
        eyes: eyes,
        eyebrows: eyebrows,
        mouth: mouth,
        hair: hair,
        facialHair: facialHair,
        clothing: clothing,
        accessory: accessory,
        graphic: graphic,
        hat: hat,
        body: body,
        hairColor: hairColor,
        clothingColor: clothingColor,
        circleColor: circleColor,
        lipColor: lipColor,
        hatColor: hatColor,
        faceMaskColor: faceMaskColor,
        mask: mask,
        faceMask: faceMask,
        lashes: lashes,
    };
}
exports.getRandomOptions = getRandomOptions;
