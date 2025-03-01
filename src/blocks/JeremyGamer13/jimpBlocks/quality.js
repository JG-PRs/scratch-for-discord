import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_jpgqual";

const blockData = {
    "message0": "Set JPG Quality to %1",
    "args0": [
        {
            "type": "input_value",
            "name": "quality",
            "check": [ "Number", "var", "Env"]
        }
    ],
    "colour": "#a81313",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Scale the image by a number factor. Can only use Numbers, Variables, or Env secrets. Please use the Convert text to number block here!",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const quality = Blockly.JavaScript.valueToCode(block, "quality", Blockly.JavaScript.ORDER_ATOMIC);
    return `image.quality(Number(` + quality + `))\n`;
}

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_JGSAVEIMAGE",
        types: [
            "jg_beginJimp"
        ]
    }
]);