// compatibility.js
// 相性診断

import compatibilityData from "../data/compatibility.json" assert { type: "json" };
import { getLifeNumberResult } from "./lifeNumber.js";

export function getCompatibilityResult(birth1, birth2) {
  if (!birth1 || !birth2) return "2人分の生年月日を入力してください。";

  const num1 = extractNumber(birth1);
  const num2 = extractNumber(birth2);

  const key = `${num1}-${num2}`;
  const data = compatibilityData[key] || compatibilityData["default"];

  return `
    <h2>相性診断</h2>
    <p><strong>命数：</strong>${num1} × ${num2}</p>
    <p>${data.comment}</p>
    <p><strong>総合評価：</strong>${data.score}</p>
  `;
}

function extractNumber(birth) {
  return birth.replace(/-/g, "").split("").map(Number).reduce((a,b)=>a+b,0) % 60 || 1;
}
