const scoresPerBlock = 1;
const scoreComboBonus = 0.1;
const eraseThreshold = 4;
const gameoverThreshold = blockDataHeight - 1;
let scoreTotal = 0;

function search_erasableLine() {
  let j; let erasedLines = 0;
  let currentBlockData = get_blockData();
  for(let i = 0; i < blockDataHeight; i++) {
    for(j = 0; j < blockDataWidth; j++)
      if(currentBlockData[i][j] == 0) break;
    if(j == blockDataWidth) {
      erase_line(i);
      break;
    }
  }
  for(let i = gameoverThreshold; i < blockDataHeight; i++) {
    for(let j = 0; j < blockDataWidth; j++) {
      if(currentBlockData[i][j] > 0) {
        gameover();
        return;
      }
    }
  }
}

function erase_line(lineNum) {
  console.log("ライン" + lineNum + "を削除");
}

function gameover() {
  console.log("ゲームオーバー");
}
