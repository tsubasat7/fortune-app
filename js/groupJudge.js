// groupJudge.js
// グループ診断（家族・職場・チーム）

import groupData from "../data/groupTemplates.json" assert { type: "json" };

export function getGroupJudgeResult(births) {
  if (!births || births.length < 2) {
    return "グループ診断は2人以上必要です。";
  }

  const count = births.length;
  const template = count >= 4 ? groupData.large : groupData.small;

  return `
    <h2>グループ診断（${count}人）</h2>
    <p>${template.summary}</p>
    <p><strong>特徴：</strong>${template.trait}</p>
    <p><strong>注意点：</strong>${template.caution}</p>
  `;
}
