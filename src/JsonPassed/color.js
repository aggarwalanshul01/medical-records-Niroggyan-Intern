//indicators to access the objects
const colorIndicators = { finalCritial: "finalCritial", normal: "normal", oneFromNormal: "oneFromNormal", twoFromNormal: "twoFromNormal", threeFromNormal: "threeFromNormal" };
//change color scheme here for summary.js

// color red #E46B4D, #C26564 , #C47D63 , boderline #D4B268 , green #52BD5F
// color #111 , #333 , #555 , #777 , #999
//
const colorCodes = {
  colored: { normal: "#0F9D58", finalCritial: "#DB4437", oneFromNormal: "#F4B400", twoFromNormal: "#C47D63", threeFromNormal: "#C26564" },
  greyscaled: { normal: "#D2D2D2", finalCritial: "#111111", oneFromNormal: "#969696", twoFromNormal: "#7B7B7B", threeFromNormal: "#444444" },
};
//ordering hierarchy for low normal high in summary.js
const colorOrder = { finalCritial: 0, oneFromNormal: 3, twoFromNormal: 2, threeFromNormal: 1, normal: 10 };
//placeholders used in html
const colorPlaceholder = { finalCritial: "{{FINALCRITICAL}}", normal: "{{NORMAL}}", oneFromNormal: "{{ONEFROMNORMAL}}", twoFromNormal: "{{TWOFROMNORMAL}}", threeFromNormal: "{{THREEFROMNORMAL}}" };

const insertColorValue = template => {
  let colored = template;
  let grayscaled = template;
  for (const key in colorIndicators) {
    if (colorIndicators.hasOwnProperty(key)) {
      const checkExpression = new RegExp(colorPlaceholder[key], "g");
      colored = colored.replace(checkExpression, colorCodes.colored[key]);
      grayscaled = grayscaled.replace(checkExpression, colorCodes.greyscaled[key]);
    }
  }
  return {
    colored,
    grayscaled,
  };
};

const legendNormalBoderlineHigh = () => {
  return `
  <div class='summary-line-item-container' style="justify-content:flex-end">
  <span class="summary-line-item-signal" style=" background:${colorPlaceholder.normal}; margin:0px 1px 0px 8px; "></span>Normal
  <span class="summary-line-item-signal" style=" background:${colorPlaceholder.oneFromNormal}; margin:0px 1px 0px 8px; "></span>Borderline
  <span class="summary-line-item-signal" style=" background:${colorPlaceholder.finalCritial}; margin:0px 1px 0px 8px; "></span>Abnormal&nbsp;&nbsp;&nbsp;
  </div>
`;
};

module.exports = {
  colorIndicators,
  colorCodes,
  colorOrder,
  colorPlaceholder,
  insertColorValue,
  legendNormalBoderlineHigh,
};
