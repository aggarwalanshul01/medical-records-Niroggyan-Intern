const color = require("./color");

const compactSvg = {
  height: "34",
  width: "313",
};

const getSliderDisplayValue = value => {
  // return the value to be displayed in the slider for numeric values
  let displayResult = value;
  if (value > 100) displayResult = parseInt(value);
  return displayResult;
};

const getMiddleFill = (startRange, endRange) => {
  const middleFill = `${startRange}-${endRange}`;
  if (middleFill.length > 11) return "";
  return middleFill;
};
const compactSvgLNH = (testResultValue, minParameterValue, maxParameterValue) => {
  let youX = 0;
  if (minParameterValue === 0) return compactSvgNH(testResultValue, maxParameterValue);
  if (testResultValue < minParameterValue) {
    youX = (90 / minParameterValue) * testResultValue;
  } else if (testResultValue <= maxParameterValue) {
    youX = 90 + (90 / (maxParameterValue - minParameterValue)) * (testResultValue - minParameterValue);
  } else {
    youX = 180 + (90 / (3 * maxParameterValue - maxParameterValue)) * (testResultValue - maxParameterValue);
  }

  if (youX > 265) youX = 265;
  if (youX < 6) youX = 6;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="compact-svg" height="${compactSvg.height}" width="${compactSvg.width}">
  <path d="M 5 10 L  93 10, 93 20, 5 20 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 97 10 L 183 10, 183 20, 97 20 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 187 10 L 275 10, 275 20, 187 20 z" fill="${color.colorPlaceholder.finalCritial}" />
  
  <circle cx="275" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />
  <circle cx="5" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />

  <text x="5" y="6" class="font-svg-slider-third-width-headtext">low</text>
  <text x="140" y="6" text-anchor="middle" class="font-svg-slider-third-width-headtext">normal</text>
  <text x="275" y="6" text-anchor="end"  y="6" class="font-svg-slider-third-width-headtext">HIGH</text>

  <text x="95" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${minParameterValue}</text>
  <text x="185" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${maxParameterValue}</text>
  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 20 L ${youX + 0.5} 20, ${youX - 3} 25,${youX + 3} 25 z" fill="#000"/>
  <text x="${youX}" y="31" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  </svg>
`;
};
const fullSvgLNH = (testResultValue, minParameterValue, maxParameterValue) => {
  let youX = 0;
  if (testResultValue < minParameterValue) {
    youX = 5 + (150 / minParameterValue) * testResultValue;
  } else if (testResultValue <= maxParameterValue) {
    youX = 160 + (150 / (maxParameterValue - minParameterValue)) * (testResultValue - minParameterValue);
  } else {
    youX = 315 + (150 / (2 * maxParameterValue - maxParameterValue)) * (testResultValue - maxParameterValue);
  }
  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="470">
  <path d="M 0 20 L 5 10, 155 10, 155 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 160 10 L 310 10, 310 30, 160 30 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 315 10 L 465 10, 470 20, 465 30, 315 30 z" fill="${color.colorPlaceholder.finalCritial}" />

  <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
  <text x="160" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
  <text x="315" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

  <text x="80" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&lt; ${minParameterValue}</text>
  <text x="235" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${getMiddleFill(minParameterValue, maxParameterValue)}</text>
  <text x="390" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&gt; ${maxParameterValue}</text>

  <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
  <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
</svg>`;
};
const halfSvgLNH = (testResultValue, minParameterValue, maxParameterValue) => {
  let youX = 0;
  if (testResultValue < minParameterValue) {
    youX = 5 + (98 / minParameterValue) * testResultValue;
  } else if (testResultValue <= maxParameterValue) {
    youX = 108 + (103 / (maxParameterValue - minParameterValue)) * (testResultValue - minParameterValue);
  } else {
    youX = 216 + (109 / (2 * maxParameterValue - maxParameterValue)) * (testResultValue - maxParameterValue);
  }
  if (youX > 290) youX = 290;
  if (youX < 6) youX = 6;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 13px; margin-left: auto; margin-right: auto;" height="50" width="330">
    <path d="M 0 20 L 5 10, 103 10, 103 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
    <path d="M 108 10 L 211 10, 211 30, 108 30 z" fill="${color.colorPlaceholder.normal}" />
    <path d="M 216 10 L 325 10, 330 20, 325 30, 216 30 z" fill="${color.colorPlaceholder.finalCritial}"/>

    <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
    <text x="108" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
    <text x="216" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

    <text x="49" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&lt; ${minParameterValue}</text>
    <text x="159.5" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${getMiddleFill(minParameterValue, maxParameterValue)}</text>
    <text x="270.5" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&gt; ${maxParameterValue}</text>

    <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
    <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
  </svg>`;
};

const thirdSvgLNH = (testResultValue, minParameterValue, maxParameterValue) => {
  let youX = 0;

  if (testResultValue < minParameterValue) {
    youX = 20;
  } else if (testResultValue <= maxParameterValue) {
    youX = 37 + (128 / (maxParameterValue - minParameterValue)) * (testResultValue - minParameterValue);
  } else {
    youX = 188;
  }

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="30" width="208" style="margin-top: 5px; display: block; margin-left: auto; margin-right: auto;">
  <path d="M 2.5 10 L 34 10, 34 15, 2.5 15 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 36 10 L 164 10, 164 15, 36 15 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 166 10 L 197.5 10, 197.5 15, 166 15 z" fill="${color.colorPlaceholder.finalCritial}" />
  
  <circle cx="2.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.finalCritial}" />
  <circle cx="197.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.finalCritial}" />
  
  <text x="35" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${minParameterValue}</text>
  <text x="165" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${maxParameterValue}</text>
  <text x="${youX}" y="25" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 15 ,${youX + 0.5} 15,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 15 L ${youX + 0.5} 15, ${youX - 3} 20,${youX + 3} 20 z" fill="#000"/>
  </svg>`;
};

const generateSliderLNH = (testReport, type) => {
  const testResultValue = parseFloat(testReport.testResultValue);
  const minParameterValue = parseFloat(testReport.minParameterValue ? testReport.minParameterValue : testReport.testDefaults.lowThreshold);
  const maxParameterValue = parseFloat(testReport.maxParameterValue ? testReport.maxParameterValue : testReport.testDefaults.highThreshold);

  if (type === "compact") return compactSvgLNH(testResultValue, minParameterValue, maxParameterValue);
  else if (type === "half") return halfSvgLNH(testResultValue, minParameterValue, maxParameterValue);
  else if (type === "full") return fullSvgLNH(testResultValue, minParameterValue, maxParameterValue);
  else if (type === "third") return thirdSvgLNH(testResultValue, minParameterValue, maxParameterValue);
  else return "";
};

const compactSvgNHH = (testResultValue, boderline, highThreshold) => {
  let youX = 0;
  if (testResultValue < boderline) {
    youX = 5 + (90 / boderline) * testResultValue;
  } else if (testResultValue <= highThreshold) {
    youX = 95 + (90 / (highThreshold - boderline)) * (testResultValue - boderline);
  } else {
    youX = 185 + (90 / (3 * highThreshold - highThreshold)) * (testResultValue - highThreshold);
  }

  if (youX > 265) youX = 265;
  if (youX < 6) youX = 6;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="compact-svg" height="${compactSvg.height}" width="${compactSvg.width}">
  <path d="M 5 10 L  93 10, 93 20, 5 20 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 97 10 L 183 10, 183 20, 97 20 z" fill="${color.colorPlaceholder.oneFromNormal}" />
  <path d="M 187 10 L 275 10, 275 20, 187 20 z" fill="${color.colorPlaceholder.finalCritial}" />
  
  <circle cx="275" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />
  <circle cx="5" cy="15" r="5" fill="${color.colorPlaceholder.normal}" />

  <text x="5" y="6" class="font-svg-slider-third-width-headtext">NORMAL</text>
  <text x="140" y="6" text-anchor="middle" class="font-svg-slider-third-width-headtext">BORDERLINE</text>
  <text x="275" y="6" text-anchor="end"  y="6" class="font-svg-slider-third-width-headtext">HIGH</text>

  <text x="95" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${boderline}</text>
  <text x="185" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${highThreshold}</text>
  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 20 L ${youX + 0.5} 20, ${youX - 3} 25,${youX + 3} 25 z" fill="#000"/>
  <text x="${youX}" y="31" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  </svg>
`;
};
const fullSvgNHH = (testResultValue, boderline, highThreshold) => {
  let youX = 0;
  if (testResultValue < boderline) {
    youX = 5 + (150 / boderline) * testResultValue;
  } else if (testResultValue <= highThreshold) {
    youX = 160 + (150 / (highThreshold - boderline)) * (testResultValue - boderline);
  } else {
    youX = 315 + (150 / (2 * highThreshold - highThreshold)) * (testResultValue - highThreshold);
  }
  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="470">
  <path d="M 0 20 L 5 10, 155 10, 155 30, 5 30 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 160 10 L 310 10, 310 30, 160 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
  <path d="M 315 10 L 465 10, 470 20, 465 30, 315 30 z" fill="${color.colorPlaceholder.finalCritial}" />

  <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
  <text x="160" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">borderline</text>
  <text x="315" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

  <text x="80" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&lt; ${boderline}</text>
  <text x="235" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${getMiddleFill(boderline, highThreshold)}</text>
  <text x="390" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&gt; ${highThreshold}</text>

  <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
  <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
</svg>`;
};
const halfSvgNHH = (testResultValue, boderline, highThreshold) => {
  let youX = 0;

  if (testResultValue < boderline) {
    youX = 5 + (98 / boderline) * testResultValue;
  } else if (testResultValue <= highThreshold) {
    youX = 108 + (103 / (highThreshold - boderline)) * (testResultValue - boderline);
  } else {
    youX = 216 + (103 / (2 * boderline - highThreshold)) * (testResultValue - highThreshold);
  }

  if (youX > 290) youX = 290;
  if (youX < 6) youX = 6;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 13px; margin-left: auto; margin-right: auto;" height="50" width="330">
    <path d="M 0 20 L 5 10, 103 10, 103 30, 5 30 z" fill="${color.colorPlaceholder.normal}" />
    <path d="M 108 10 L 211 10, 211 30, 108 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
    <path d="M 216 10 L 319 10, 324 20, 319 30, 216 30 z" fill="${color.colorPlaceholder.finalCritial}"/>

    <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
    <text x="108" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">borderline</text>
    <text x="216" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

    <text x="49" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${boderline}</text>
    <text x="159.5" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${getMiddleFill(boderline, highThreshold)}</text>
    <text x="267.5" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${highThreshold}</text>

    <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
    <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
  </svg>
  `;
};

const thirdSvgNHH = (testResultValue, boderline, highThreshold) => {
  let youX = 0;

  if (testResultValue < boderline) {
    youX = 20;
  } else if (testResultValue <= highThreshold) {
    youX = 40 + (128 / (highThreshold - boderline)) * (testResultValue - boderline);
  } else {
    youX = 188;
  }

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="30" width="208" style="margin-top: 5px; display: block; margin-left: auto; margin-right: auto;">
  <path d="M 2.5 10 L 34 10, 34 15, 2.5 15 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 36 10 L 164 10, 164 15, 36 15 z" fill="${color.colorPlaceholder.oneFromNormal}" />
  <path d="M 166 10 L 197.5 10, 197.5 15, 166 15 z" fill="${color.colorPlaceholder.finalCritial}" />
  
  <circle cx="2.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.normal}" />
  <circle cx="197.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.finalCritial}" />
  
  <text x="35" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${boderline}</text>
  <text x="165" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${highThreshold}</text>
  <text x="${youX}" y="25" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 15 ,${youX + 0.5} 15,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 15 L ${youX + 0.5} 15, ${youX - 3} 20,${youX + 3} 20 z" fill="#000"/>
  </svg>`;
};

const generateSliderNHH = (testReport, type) => {
  const testResultValue = parseFloat(testReport.testResultValue);
  const boderline = parseFloat(testReport.testDefaults.boderline);
  const highThreshold = parseFloat(testReport.testDefaults.highThreshold);

  if (type === "compact") return compactSvgNHH(testResultValue, boderline, highThreshold);
  if (type === "half") return halfSvgNHH(testResultValue, boderline, highThreshold);
  if (type === "full") return fullSvgNHH(testResultValue, boderline, highThreshold);
  if (type === "third") return thirdSvgNHH(testResultValue, boderline, highThreshold);
};

const compactSvgLLN = (testResultValue, lowThreshold, boderline) => {
  let youX = 0;
  if (testResultValue < lowThreshold) {
    youX = (90 / lowThreshold) * testResultValue;
  } else if (testResultValue <= boderline) {
    youX = 90 + (90 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else {
    youX = 180 + (90 / (3 * boderline - boderline)) * (testResultValue - boderline);
  }

  if (youX > 265) youX = 265;
  if (youX < 6) youX = 6;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="compact-svg" height="${compactSvg.height}" width="${compactSvg.width}">
  <path d="M 5 10 L  93 10, 93 20, 5 20 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 97 10 L 183 10, 183 20, 97 20 z" fill="${color.colorPlaceholder.oneFromNormal}" />
  <path d="M 187 10 L 275 10, 275 20, 187 20 z" fill="${color.colorPlaceholder.normal}" />
  
  <circle cx="275" cy="15" r="5" fill="${color.colorPlaceholder.normal}" />
  <circle cx="5" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />

  <text x="5" y="6" class="font-svg-slider-third-width-headtext">low</text>
  <text x="140" y="6" text-anchor="middle" class="font-svg-slider-third-width-headtext">borderline</text>
  <text x="275" y="6" text-anchor="end"  y="6" class="font-svg-slider-third-width-headtext">normal</text>

  <text x="95" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${lowThreshold}</text>
  <text x="185" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${boderline}</text>
  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 20 L ${youX + 0.5} 20, ${youX - 3} 25,${youX + 3} 25 z" fill="#000"/>
  <text x="${youX}" y="31" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  </svg>
`;
};

const fullSvgLLN = (testResultValue, lowThreshold, boderline) => {
  let youX = 0;
  if (testResultValue < lowThreshold) {
    youX = 5 + (150 / lowThreshold) * testResultValue;
  } else if (testResultValue <= boderline) {
    youX = 160 + (150 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else {
    youX = 315 + (150 / (2 * boderline - boderline)) * (testResultValue - boderline);
  }
  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="470">
  <path d="M 0 20 L 5 10, 155 10, 155 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 160 10 L 310 10, 310 30, 160 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
  <path d="M 315 10 L 465 10, 470 20, 465 30, 315 30 z" fill="${color.colorPlaceholder.normal}" />

  <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
  <text x="160" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">borderline</text>
  <text x="315" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>

  <text x="80" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&lt; ${lowThreshold}</text>
  <text x="235" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${getMiddleFill(lowThreshold, boderline)}</text>
  <text x="390" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&gt; ${boderline}</text>

  <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
  <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
</svg>`;
};
const halfSvgLLN = (testResultValue, lowThreshold, boderline) => {
  let youX = 0;

  if (testResultValue < lowThreshold) {
    youX = 5 + (98 / lowThreshold) * testResultValue;
  } else if (testResultValue <= boderline) {
    youX = 108 + (103 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else {
    youX = 216 + (103 / (2 * lowThreshold - boderline)) * (testResultValue - boderline);
  }

  if (youX > 290) youX = 290;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 13px; margin-left: auto; margin-right: auto;" height="50" width="330">
    <path d="M 0 20 L 5 10, 103 10, 103 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
    <path d="M 108 10 L 211 10, 211 30, 108 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
    <path d="M 216 10 L 319 10, 324 20, 319 30, 216 30 z" fill="${color.colorPlaceholder.normal}"/>

    <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
    <text x="108" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">borderline</text>
    <text x="216" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>

    <text x="49" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${lowThreshold}</text>
    <text x="159.5" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${getMiddleFill(lowThreshold, boderline)}</text>
    <text x="267.5" y="21" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${boderline}</text>

    <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
    <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
  </svg>
  `;
};
const thirdSvgLLN = (testResultValue, lowThreshold, boderline) => {
  let youX = 0;

  if (testResultValue < lowThreshold) {
    youX = 20;
  } else if (testResultValue <= boderline) {
    youX = 40 + (128 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else {
    youX = 188;
  }

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="30" width="208" style="margin-top: 5px; display: block; margin-left: auto; margin-right: auto;">
  <path d="M 2.5 10 L 34 10, 34 15, 2.5 15 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 36 10 L 164 10, 164 15, 36 15 z" fill="${color.colorPlaceholder.oneFromNormal}" />
  <path d="M 166 10 L 197.5 10, 197.5 15, 166 15 z" fill="${color.colorPlaceholder.normal}" />
  
  <circle cx="2.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.finalCritial}" />
  <circle cx="197.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.normal}" />
  
  <text x="35" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${lowThreshold}</text>
  <text x="165" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${boderline}</text>
  <text x="${youX}" y="25" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 15 ,${youX + 0.5} 15,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 15 L ${youX + 0.5} 15, ${youX - 3} 20,${youX + 3} 20 z" fill="#000"/>
  </svg>`;
};

const generateSliderLLN = (testReport, type) => {
  const testResultValue = parseFloat(testReport.testResultValue);
  const lowThreshold = parseFloat(testReport.testDefaults.lowThreshold);
  const boderline = parseFloat(testReport.testDefaults.boderline);

  if (type === "compact") return compactSvgLLN(testResultValue, lowThreshold, boderline);
  if (type === "half") return halfSvgLLN(testResultValue, lowThreshold, boderline);
  if (type === "full") return fullSvgLLN(testResultValue, lowThreshold, boderline);
  if (type === "third") return thirdSvgLLN(testResultValue, lowThreshold, boderline);
};

const compactSvgNH = (testResultValue, cutoffValue) => {
  let youX;
  if (testResultValue < cutoffValue) {
    youX = 5 + (135 / cutoffValue) * testResultValue;
  } else {
    youX = 140 + (135 / (2 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 270) youX = 270;
  if (youX < 6) youX = 6;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="compact-svg" height="${compactSvg.height}" width="${compactSvg.width}">
  <path d="M 5 10 L  138 10, 138 20, 5 20 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 142 10 L 275 10, 275 20, 142 20 z" fill="${color.colorPlaceholder.finalCritial}" />
  
  <text x="5" y="6" class="font-svg-slider-third-width-headtext">NORMAL</text>
  <text x="275" y="6" text-anchor="end"  y="6" class="font-svg-slider-third-width-headtext">HIGH</text>

  <text x="140" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${cutoffValue}</text>

  <circle cx="5" cy="15" r="5" fill="${color.colorPlaceholder.normal}" />
  <circle cx="275" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />

  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 20 L ${youX + 0.5} 20, ${youX - 3} 25,${youX + 3} 25 z" fill="#000"/>
  <text x="${youX}" y="31" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  </svg>
`;
};

const fullSvgNH = (testResultValue, cutoffValue) => {
  let youX;
  if (testResultValue <= cutoffValue) {
    youX = 5 + (217.5 / cutoffValue) * testResultValue;
  } else {
    youX = 227.5 + (232.5 / (2 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="465">
  <path d="M 0 20 L 5 10, 222.5 10, 222.5 30, 5 30 z" fill="${color.colorPlaceholder.normal}" />
  <path d="M 227.5 10 L 460 10, 465 20, 460 30, 227.5 30 z" fill="${color.colorPlaceholder.finalCritial}" />

  <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
  <text x="227.5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

  <text x="113.75" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&lt; ${cutoffValue}</text>
  <text x="343.75" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&gt; ${cutoffValue}</text>

  <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
  <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
</svg>
  `;
};

const halfSvgNH = (testResultValue, cutoffValue) => {
  let youX;
  if (testResultValue <= cutoffValue) {
    youX = 5 + (157.5 / cutoffValue) * testResultValue;
  } else {
    youX = 167.5 + (157.5 / (2 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 270) youX = 270;
  if (youX < 6) youX = 6;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 13px; margin-left: auto; margin-right: auto;" height="50" width="330">
    <path d="M 0 20 L 5 10, 162.5 10, 162.5 30, 5 30 z" fill="${color.colorPlaceholder.normal}" />
    <path d="M 167.5 10 L 325 10, 330 20, 325 30, 167.5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
    <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">Normal</text>
    <text x="167.5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">High</text>
    <text x="83.75" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${cutoffValue}</text>
    <text x="246.25" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${cutoffValue}</text>
    <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
    <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
  </svg>`;
};

const thirdSvgNH = (testResultValue, cutoffValue) => {
  let youX;
  if (testResultValue < cutoffValue) {
    youX = 5 + (95 / cutoffValue) * testResultValue;
  } else {
    youX = 100 + (100 / (3 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 170) youX = 170;
  if (youX < 6) youX = 6;
  return `
  
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="30" width="208" style="margin-top: 5px; display: block; margin-left: auto; margin-right: auto;">
    <path d="M 2.5 10 L 99 10, 99 15, 2.5 15 z" fill="${color.colorPlaceholder.normal}" />
    <path d="M 101 10 L 197.5 10, 197.5 15, 101 15 z" fill="${color.colorPlaceholder.finalCritial}" />
    
    <circle cx="2.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.normal}" />
    <circle cx="197.5" cy="12.5" r="2.5" fill="${color.colorPlaceholder.finalCritial}" />
    
    <text x="100" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${cutoffValue}</text>
    <text x="${youX}" y="25" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
    <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 15 ,${youX + 0.5} 15,${youX + 0.5} 10 z" fill="#000"/>
    <path d="M ${youX - 0.5} 15 L ${youX + 0.5} 15, ${youX - 3} 20,${youX + 3} 20 z" fill="#000"/>
  </svg>
`;
};

const generateSliderNH = (testReport, type) => {
  const para = testReport.maxParameterValue == 0 ? false : testReport.maxParameterValue;
  const testResultValue = parseFloat(testReport.testResultValue);
  const cutoffValue = parseFloat(para ? para : testReport.testDefaults.highThreshold);

  if (type === "compact") return compactSvgNH(testResultValue, cutoffValue);
  if (type === "half") return halfSvgNH(testResultValue, cutoffValue);
  if (type === "full") return fullSvgNH(testResultValue, cutoffValue);
  if (type === "third") return thirdSvgNH(testResultValue, cutoffValue);
};

const compactSvgLN = (testResultValue, cutoffValue) => {
  let youX;
  if (testResultValue < cutoffValue) {
    youX = 5 + (130 / cutoffValue) * testResultValue;
  } else {
    youX = 135 + (130 / (3 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 265) youX = 265;
  if (youX < 6) youX = 6;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="compact-svg" height="${compactSvg.height}" width="${compactSvg.width}">
  <path d="M 5 10 L  138 10, 138 20, 5 20 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 142 10 L 275 10, 275 20, 142 20 z" fill="${color.colorPlaceholder.normal}" />
  
  <text x="5" y="6" class="font-svg-slider-third-width-headtext">Low</text>
  <text x="275" y="6" text-anchor="end"  y="6" class="font-svg-slider-third-width-headtext">Normal</text>

  <text x="140" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${cutoffValue}</text>

  <circle cx="5" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />
  <circle cx="275" cy="15" r="5" fill="${color.colorPlaceholder.normal}" />

  <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 10 z" fill="#000"/>
  <path d="M ${youX - 0.5} 20 L ${youX + 0.5} 20, ${youX - 3} 25,${youX + 3} 25 z" fill="#000"/>
  <text x="${youX}" y="31" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
  </svg>
`;
};

const fullSvgLN = (testResultValue, cutoffValue) => {
  let youX;
  if (testResultValue <= cutoffValue) {
    youX = 5 + (217.5 / cutoffValue) * testResultValue;
  } else {
    youX = 227.5 + (232.5 / (2 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="465">
  <path d="M 0 20 L 5 10, 222.5 10, 222.5 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
  <path d="M 227.5 10 L 460 10, 465 20, 460 30, 227.5 30 z" fill="${color.colorPlaceholder.normal}" />

  <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
  <text x="227.5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>

  <text x="113.75" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&lt; ${cutoffValue}</text>
  <text x="343.75" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">&gt; ${cutoffValue}</text>

  <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
  <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
</svg>
  `;
};

const halfSvgLN = (testResultValue, cutoffValue) => {
  if (testResultValue <= cutoffValue) {
    youX = 5 + (157.5 / cutoffValue) * testResultValue;
  } else {
    youX = 167.5 + (157.5 / (2 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }
  if (youX > 290) youX = 290;
  return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 13px; margin-left: auto; margin-right: auto;" height="50" width="330">
    <path d="M 0 20 L 5 10, 162.5 10, 162.5 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
    <path d="M 167.5 10 L 325 10, 330 20, 325 30, 167.5 30 z" fill="${color.colorPlaceholder.normal}" />

    <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
    <text x="167.5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>

    <text x="83.75" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${cutoffValue}</text>
    <text x="246.25" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${cutoffValue}</text>

    <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
    <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
  </svg>
  `;
};

const thirdSvgLN = (testResultValue, cutoffValue) => {
  let youX;

  if (testResultValue < cutoffValue) {
    youX = 5 + (86 / cutoffValue) * testResultValue;
  } else {
    youX = 96 + (86 / (3 * cutoffValue - cutoffValue)) * (testResultValue - cutoffValue);
  }

  if (youX > 170) youX = 170;
  if (youX < 6) youX = 6;

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="30" width="208" style="margin-top: 0px; display: block; margin-left: auto; margin-right: auto;">
    <path d="M ${youX - 0.5} 15 L ${youX + 0.5} 15, ${youX - 3} 10,${youX + 3} 10 z" fill="#000"/>
    <path d="M 0 15 L 100 15, 100 20, 0 20 z" fill="${color.colorPlaceholder.finalCritial}" />
    <path d="M 100 15 L 200 15, 200 20, 100 20 z" fill="${color.colorPlaceholder.normal}" />
    <text x="100" y="26" text-anchor="middle" class='font-svg-slider-third-width'>${cutoffValue}</text>
    <text x="${youX}" y="5" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
    <path d="M ${youX - 0.5} 15 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 15 z" fill="#000"/>
  </svg>
`;
};

const generateSliderLN = (testReport, type) => {
  const para = testReport.minParameterValue == 0 ? false : testReport.minParameterValue;
  const testResultValue = parseFloat(testReport.testResultValue);
  const cutoffValue = parseFloat(para ? para : testReport.testDefaults.lowThreshold);

  if (type === "compact") return compactSvgLN(testResultValue, cutoffValue);
  if (type === "half") return halfSvgLN(testResultValue, cutoffValue);
  if (type === "full") return fullSvgLN(testResultValue, cutoffValue);
  if (type === "third") return thirdSvgLN(testResultValue, cutoffValue);
};

const fullSvgNHHH = (testResultValue, boderline, high, highThreshold) => {
  let youX = "";
  if (testResultValue < boderline) {
    youX = 5 + (111.25 / boderline) * testResultValue;
  } else if (testResultValue < high) {
    youX = 121.25 + (111.25 / (high - boderline)) * (testResultValue - boderline);
  } else if (testResultValue < highThreshold) {
    youX = 237.5 + (111.25 / (highThreshold - high)) * (testResultValue - high);
  } else {
    youX = 353.75 + (111.25 / (2 * highThreshold - highThreshold)) * (testResultValue - highThreshold);
  }

  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  const card = `
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="470">
              <path d="M 0 20 L 5 10, 116.25 10, 116.25 30, 5 30 z" fill="${color.colorPlaceholder.normal}" />
              <path d="M 121.25 10 L 232.5 10, 232.5 30, 121.25 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
              <path d="M 237.5 10 L 348.75 10, 348.75 30, 237.5 30 z" fill="${color.colorPlaceholder.twoFromNormal}" />
              <path d="M 353.75 10 L 465 10, 470 20, 465 30, 353.75 30 z" fill="${color.colorPlaceholder.finalCritial}" />

              <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
              <text x="121.25" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">boderline</text>
              <text x="237.5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>
              <text x="353.75" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">very high</text>

              <text x="60.625" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${boderline}</text>
              <text x="176.875" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${boderline}  -  ${high}</text>
              <text x="293.125" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${high}  -  ${highThreshold}</text>
              <text x="409.375" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${highThreshold}</text>

              <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
              <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
          </svg>
      `;
  return card;
};

const generateSliderNHHH = (testReport, type) => {
  // returns the to be displayed color for the input values
  const boderline = testReport.testDefaults.boderline;
  const high = testReport.testDefaults.high;
  const highThreshold = testReport.testDefaults.highThreshold;
  const testResultValue = parseFloat(testReport.testResultValue);

  if (type === "compact") return compactSvgNHH(testResultValue, boderline, high);
  if (type === "full") return fullSvgNHHH(testResultValue, boderline, high, highThreshold);
  if (type === "half") return halfSvgNHH(testResultValue, boderline, high);
  if (type === "third") return thirdSvgNHH(testResultValue, boderline, high);
};

const fullSvgNHHHH = (testResultValue, nearOptimal, boderline, high, highThreshold) => {
  let youX = "";
  if (testResultValue < nearOptimal) {
    youX = 5 + (86 / nearOptimal) * testResultValue;
  } else if (testResultValue < boderline) {
    youX = 96 + (86 / (boderline - nearOptimal)) * (testResultValue - nearOptimal);
  } else if (testResultValue < high) {
    youX = 187 + (86 / (high - boderline)) * (testResultValue - boderline);
  } else if (testResultValue < highThreshold) {
    youX = 278 + (86 / (highThreshold - high)) * (testResultValue - high);
  } else {
    youX = 330 + (96 / (2 * highThreshold - highThreshold)) * (testResultValue - highThreshold);
  }

  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  const card = `
          
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="470">
          <path d="M 0 20 L 5 10, 91 10, 91 30, 5 30 z" fill="${color.colorPlaceholder.normal}" />
          <path d="M 96 10 L 182 10, 182 30, 96 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
          <path d="M 187 10 L 273 10, 273 30, 187 30 z" fill="${color.colorPlaceholder.twoFromNormal}" />
          <path d="M 278 10 L 364 10, 364 30, 278 30 z" fill="${color.colorPlaceholder.threeFromNormal}" />
          <path d="M 369 10 L 465 10, 470 20, 465 30, 369 30 z" fill="${color.colorPlaceholder.finalCritial}" />

          <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
          <text x="96" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase; ">near-optimal</text>
          <text x="187" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">borderline</text>
          <text x="278" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>
          <text x="369" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">very high</text>

          <text x="48" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">< ${nearOptimal}</text>
          <text x="139" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">${nearOptimal} - ${boderline}</text>
          <text x="230" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">${boderline} - ${high}</text>
          <text x="321" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">${high} - ${highThreshold}</text>
          <text x="412" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">> ${highThreshold}</text>

          <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
          <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
      </svg>
      
          `;
  return card;
};

const generateSliderNHHHH = (testReport, type) => {
  // returns the to be displayed color for the input values
  const nearOptimal = testReport.testDefaults.nearOptimal;
  const boderline = testReport.testDefaults.boderline;
  const high = testReport.testDefaults.high;
  const highThreshold = testReport.testDefaults.highThreshold;
  const testResultValue = parseFloat(testReport.testResultValue);

  //compact
  if (type === "compact") return compactSvgNHH(testResultValue, nearOptimal, boderline);
  if (type === "full") return fullSvgNHHHH(testResultValue, nearOptimal, boderline, high, highThreshold);
  if (type === "half") return halfSvgNHH(testResultValue, nearOptimal, boderline);
  if (type === "third") return thirdSvgNHH(testResultValue, nearOptimal, boderline);
};

const fullSvgLLLLN = (testResultValue, lowThreshold, tooLow, low, boderline) => {
  let youX = "";
  if (testResultValue < lowThreshold) {
    youX = 5 + (86 / lowThreshold) * testResultValue;
  } else if (testResultValue < tooLow) {
    youX = 96 + (86 / (tooLow - lowThreshold)) * (testResultValue - lowThreshold);
  } else if (testResultValue < low) {
    youX = 187 + (86 / (low - tooLow)) * (testResultValue - tooLow);
  } else if (testResultValue < boderline) {
    youX = 278 + (86 / (boderline - low)) * (testResultValue - low);
  } else {
    youX = 330 + (96 / (2 * boderline - boderline)) * (testResultValue - boderline);
  }

  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  const card = `
          
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 20px; margin-left: auto; margin-right: auto;" height="50" width="470">
          <path d="M 0 20 L 5 10, 91 10, 91 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
          <path d="M 96 10 L 182 10, 182 30, 96 30 z" fill="${color.colorPlaceholder.threeFromNormal}" />
          <path d="M 187 10 L 273 10, 273 30, 187 30 z" fill="${color.colorPlaceholder.twoFromNormal}" />
          <path d="M 278 10 L 364 10, 364 30, 278 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
          <path d="M 369 10 L 465 10, 470 20, 465 30, 369 30 z" fill="${color.colorPlaceholder.normal}" />

          <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">critical</text>
          <text x="96" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase; ">too low</text>
          <text x="187" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
          <text x="278" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">borderline</text>
          <text x="369" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>

          <text x="48" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">< ${lowThreshold}</text>
          <text x="139" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">${lowThreshold} - ${tooLow}</text>
          <text x="230" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">${tooLow} - ${low}</text>
          <text x="321" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">${low} - ${boderline}</text>
          <text x="412" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">> ${boderline}</text>

          <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
          <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5; font-family: Arial;">YOU: ${getSliderDisplayValue(testResultValue)}</text>
      </svg>
      
          `;
  return card;
};

const generateSliderLLLLN = (testReport, type) => {
  // returns the to be displayed color for the input values
  const lowThreshold = testReport.testDefaults.lowThreshold;
  const tooLow = testReport.testDefaults.tooLow;
  const low = testReport.testDefaults.low;
  const boderline = testReport.testDefaults.boderline;
  const testResultValue = parseFloat(testReport.testResultValue);

  //compact
  if (type === "compact") return compactSvgLLN(testResultValue, low, boderline);
  if (type === "full") return fullSvgLLLLN(testResultValue, lowThreshold, tooLow, low, boderline);
  if (type === "half") return halfSvgLLN(testResultValue, low, boderline);
  if (type === "third") return thirdSvgLLN(testResultValue, low, boderline);
};

const fullSvgLLNH = (testResultValue, lowThreshold, boderline, highThreshold) => {
  if (testResultValue < lowThreshold) {
    youX = 5 + (111.25 / lowThreshold) * testResultValue;
  } else if (testResultValue < boderline) {
    youX = 121.25 + (111.25 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else if (testResultValue < highThreshold) {
    youX = 237.5 + (111.25 / (highThreshold - boderline)) * (testResultValue - boderline);
  } else {
    youX = 353.75 + (111.25 / (2 * highThreshold - highThreshold)) * (testResultValue - highThreshold);
  }

  if (youX > 430) youX = 430;
  if (youX < 10) youX = 10;

  const card = `
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 16px; margin-left: auto; margin-right: auto;" height="50" width="470">
              <path d="M 0 20 L 5 10, 116.25 10, 116.25 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
              <path d="M 121.25 10 L 232.5 10, 232.5 30, 121.25 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
              <path d="M 237.5 10 L 348.75 10, 348.75 30, 237.5 30 z" fill="${color.colorPlaceholder.normal}" />
              <path d="M 353.75 10 L 465 10, 470 20, 465 30, 353.75 30 z" fill="${color.colorPlaceholder.finalCritial}" />

              <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">too low</text>
              <text x="121.25" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">low</text>
              <text x="237.5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
              <text x="353.75" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

              <text x="60.625" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${lowThreshold}</text>
              <text x="176.875" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${lowThreshold}  -  ${boderline}</text>
              <text x="293.125" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">${boderline}  -  ${highThreshold}</text>
              <text x="409.375" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${highThreshold}</text>

              <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
              <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
          </svg>
      `;
  return card;
};

const halfSvgLLNH = (testResultValue, lowThreshold, boderline, highThreshold) => {
  if (testResultValue < lowThreshold) {
    youX = 5 + (70 / lowThreshold) * testResultValue;
  } else if (testResultValue < boderline) {
    youX = 80 + (111.25 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else if (testResultValue < 100) {
    youX = 160 + (111.25 / (100 - boderline)) * (testResultValue - boderline);
  } else {
    youX = 240 + 2.225 * (testResultValue - 100);
  }

  const card = `
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 13px; margin-left: auto; margin-right: auto;" height="50" width="330">
              <path d="M 0 20 L 5 10, 75 10, 75 30, 5 30 z" fill="${color.colorPlaceholder.finalCritial}" />
              <path d="M 80 10 L 155 10, 155 30, 80 30 z" fill="${color.colorPlaceholder.oneFromNormal}" />
              <path d="M 160 10 L 235 10, 235 30, 160 30 z" fill="${color.colorPlaceholder.normal}" />
              <path d="M 240 10 L 315 10, 320 20, 315 30, 240 30 z" fill="${color.colorPlaceholder.finalCritial}" />

              <text x="5" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">too low</text>
              <text x="80" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">BORDERLINE</text>
              <text x="160" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">normal</text>
              <text x="240" y="7" class="font-small" style="font-weight: bold; text-transform: uppercase;">high</text>

              <text x="38.5" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">< ${lowThreshold}</text>
              <text x="118.5" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;"> ${lowThreshold} to ${boderline}</text>
              <text x="198.5" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;"> ${boderline} to ${highThreshold}</text>
              <text x="278.5" y="20" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">> ${highThreshold}</text>

              <path d="M ${youX} 30 L ${youX + 5} 35, ${youX + 52} 35, ${youX + 52} 50, ${youX} 50 z" fill="#252525" />
              <text x="${youX + 26}" y="42.5" class="font-small" text-anchor="middle" style="dominant-baseline: middle; fill: #F5F5F5;">YOU: ${testResultValue}</text>
          </svg>
      `;
  return card;
};

const compactSvgLLNH = (testResultValue, lowThreshold, boderline, highThreshold) => {
  if (testResultValue < lowThreshold) {
    youX = 5 + (60 / lowThreshold) * testResultValue;
  } else if (testResultValue < boderline) {
    youX = 65 + (75 / (boderline - lowThreshold)) * (testResultValue - lowThreshold);
  } else if (testResultValue < highThreshold) {
    youX = 140 + (65 / (highThreshold - boderline)) * (testResultValue - boderline);
  } else {
    youX = 205 + (65 / highThreshold) * (testResultValue - highThreshold);
  }

  if (youX > 255) youX = 255;
  if (youX < 6) youX = 6;
  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="compact-svg" height="${compactSvg.height}" width="${compactSvg.width}">
    <path d="M 5 10 L  68 10, 68 20, 5 20 z" fill="${color.colorPlaceholder.finalCritial}" />
    <path d="M 72 10 L 143 10, 143 20, 72 20 z" fill="${color.colorPlaceholder.oneFromNormal}" />
    <path d="M 147 10 L  208 10, 208 20, 147 20 z" fill="${color.colorPlaceholder.normal}" />
    <path d="M 212 10 L 275 10, 275 20, 212 20 z" fill="${color.colorPlaceholder.finalCritial}" />

    <text x="5" y="6" class="font-svg-slider-third-width-headtext">Too low</text>
    <text x="107.5" y="6" text-anchor="middle" class="font-svg-slider-third-width-headtext">borderline</text>
    <text x="177.5" y="6" text-anchor="middle" class="font-svg-slider-third-width-headtext">normal</text>
    <text x="275" y="6" text-anchor="end" y="6" class="font-svg-slider-third-width-headtext">high</text>
    
    <circle cx="5" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />
    <circle cx="275" cy="15" r="5" fill="${color.colorPlaceholder.finalCritial}" />

    <text x="70" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${lowThreshold}</text>
    <text x="145" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${boderline}</text>
    <text x="210" y="6" text-anchor="middle" class='font-svg-slider-third-width'>${highThreshold}</text>
    
    <path d="M ${youX - 0.5} 10 L ${youX - 0.5} 20 ,${youX + 0.5} 20,${youX + 0.5} 10 z" fill="#000"/>
    <path d="M ${youX - 0.5} 20 L ${youX + 0.5} 20, ${youX - 3} 25,${youX + 3} 25 z" fill="#000"/>
    <text x="${youX}" y="31" text-anchor="middle" class='font-svg-slider-third-width'>You</text>
    </svg>
  `;
};

const generateSliderLLNH = (testReport, type) => {
  // returns the to be displayed color for the input values
  const lowThreshold = testReport.testDefaults.lowThreshold;
  const boderline = testReport.testDefaults.boderline;
  const testResultValue = parseFloat(testReport.testResultValue);
  const highThreshold = testReport.testDefaults.highThreshold;

  //compact values
  if (type === "compact") return compactSvgLLNH(testResultValue, lowThreshold, boderline, highThreshold);
  if (type === "full") return fullSvgLLNH(testResultValue, lowThreshold, boderline, highThreshold);
  if (type === "half") return halfSvgLLNH(testResultValue, lowThreshold, boderline, highThreshold);
  if (type === "third") return thirdSvgLNH(testResultValue, boderline, highThreshold);
};

const sliderSvg = () => {
  const sliders = {
    LNH: generateSliderLNH,
    NH: generateSliderNH,
    LN: generateSliderLN,
    NHH: generateSliderNHH,
    LLN: generateSliderLLN,
    LLNH: generateSliderLLNH,
    NHHH: generateSliderNHHH,
    NHHHH: generateSliderNHHHH,
    LLLLN: generateSliderLLLLN,
  };
  return (testReport, type) => {
    const sliderType = testReport.testDefaults.sliderType;
    if (sliders.hasOwnProperty(sliderType)) return sliders[sliderType](testReport, type);
    return "";
  };
};
module.exports = sliderSvg();
