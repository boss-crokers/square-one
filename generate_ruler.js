import fs from 'fs';

const width = 28;
const unitHeight = 50;
const count = 100; // 0 to 99, 5000px total
const totalHeight = unitHeight * count;

let svgContent = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${totalHeight}' viewBox='0 0 ${width} ${totalHeight}'>
  <g stroke='#000' stroke-width='1.5' stroke-linecap='butt'>`;

for (let i = 0; i < count; i++) {
    const yOffset = i * unitHeight;
    const number = i + 1;

    // Major Tick (Top of unit)
    svgContent += `<line x1='0' y1='${yOffset + 2}' x2='16' y2='${yOffset + 2}' />`;

    // Number
    svgContent += `<text x='19' y='${yOffset + 6}' font-family='Arial' font-size='8' fill='#000' opacity='0.6'>${number}</text>`;

    // Minor
    svgContent += `<line x1='0' y1='${yOffset + 8}' x2='6' y2='${yOffset + 8}' stroke-width='1' />`;
    // Medium
    svgContent += `<line x1='0' y1='${yOffset + 14.5}' x2='10' y2='${yOffset + 14.5}' stroke-width='1.2' />`;
    // Minor
    svgContent += `<line x1='0' y1='${yOffset + 21}' x2='6' y2='${yOffset + 21}' stroke-width='1' />`;
    // Half Tick
    svgContent += `<line x1='0' y1='${yOffset + 27}' x2='14' y2='${yOffset + 27}' />`;
    // Minor
    svgContent += `<line x1='0' y1='${yOffset + 33}' x2='6' y2='${yOffset + 33}' stroke-width='1' />`;
    // Medium
    svgContent += `<line x1='0' y1='${yOffset + 39.5}' x2='10' y2='${yOffset + 39.5}' stroke-width='1.2' />`;
    // Minor
    svgContent += `<line x1='0' y1='${yOffset + 46}' x2='6' y2='${yOffset + 46}' stroke-width='1' />`;
}

svgContent += `</g></svg>`;

fs.writeFileSync('src/assets/ruler-tall.svg', svgContent);
console.log('Generated src/assets/ruler-tall.svg');
