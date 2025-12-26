// lifeNumber.js
// 命数診断（1〜60）

import lifeNumbers from "../data/lifeNumbers.json" assert { type: "json" };

export function getLifeNumberResult(birth) {
  if (!birth) return "生年月日が入力されていません。";

  const num = calcLifeNumber(birth);
  const data = lifeNumbers[num];

  if (!data) return "該当する命数データがありません。";

  return `
    <h2>命数 ${num}</h2>
    <p>${data.description}</p>
    <p><strong>性格：</strong>${data.personality}</p>
    <p><strong>運命傾向：</strong>${data.fate}</p>
  `;
}

function calcLifeNumber(birth) {
  const digits = birth.replace(/-/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 60) {
    sum = String(sum).split("").reduce((a, b) => a + Number(b), 0);
  }
  return sum === 0 ? 1 : sum;
}
