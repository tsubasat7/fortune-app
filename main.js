// main.js
// 全診断統合コントローラ（Web公開前提・手入力命数対応）

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

  const modeInput = document.querySelector("input[name='mode']:checked");
  if (!modeInput) {
    resultArea.innerHTML = "診断モードを選択してください。";
    return;
  }

  const mode = modeInput.value;
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
        result = runGroupD
