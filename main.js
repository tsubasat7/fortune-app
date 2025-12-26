// main.js
// 全診断統合コントローラ（Web公開前提）

import { getLifeNumberResult } from "./js/lifeNumber.js";
import { getNameJudgeResult } from "./js/nameJudge.js";
import { getCompatibilityResult } from "./js/compatibility.js";
import { getGroupJudgeResult } from "./js/groupJudge.js";

// DOM取得
const form = document.getElementById("diagnosisForm");
const resultArea = document.getElementById("result");

// 診断実行
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const mode = document.querySelector("input[name='mode']:checked").value;

  let result = "";

  try {
    switch (mode) {
      case "life":
        result = runLifeDiagnosis();
        break;

      case "name":
        result = runNameDiagnosis();
        break;

      case "compatibility":
        result = runCompatibilityDiagnosis();
        break;

      case "group":
        result = runGroupDiagnosis();
        break;

      default:
        result = "診断モードが選択されていません。";
    }
  } catch (err) {
    result = "診断中にエラーが発生しました：" + err.message;
  }

  resultArea.innerHTML = result;
});

// --- 各診断処理 ---

function runLifeDiagnosis() {
  const birth = document.getElementById("birth").value;
  return getLifeNumberResult(birth);
}

function runNameDiagnosis() {
  const name = document.getElementById("name").value;
  return getNameJudgeResult(name);
}

function runCompatibilityDiagnosis() {
  const birth1 = document.getElementById("birth1").value;
  const birth2 = document.getElementById("birth2").value;
  return getCompatibilityResult(birth1, birth2);
}

function runGroupDiagnosis() {
  const births = document.getElementById("groupBirths").value.split(",");
  return getGroupJudgeResult(births);
}
