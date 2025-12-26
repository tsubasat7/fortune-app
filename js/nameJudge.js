// nameJudge.js
// 姓名判断

import nameData from "../data/nameJudgement.json" assert { type: "json" };

export function getNameJudgeResult(name) {
  if (!name) return "名前が入力されていません。";

  const score = name.length * 5;
  const type = score >= 30 ? "吉" : "中吉";

  const data = nameData[type];

  return `
    <h2>姓名判断結果：${type}</h2>
    <p>${data.summary}</p>
    <p><strong>特徴：</strong>${data.trait}</p>
  `;
}
