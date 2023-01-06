let isAbleInput = true;
let justUpdate = false;
const blockData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const blockDataHight = 3;
const blockDataWidth = 3;

function get_is_able_input() {
    return isAbleInput;
}

function set_is_able_input(nowAbleInput) {
    if(typeof nowAbleInput !== "boolean"){
        console.log("set_able_inputに代入された型が違います")
        return;
    }
    isAbleInput = nowAbleInput
    return;
}

function update_blockdata(newBlockData){
    if(true /*is_good_blockData(newBlockData)*/){
        blockData.splice(0,blockDataHight)
        console.log("neBlockData = " + newBlockData)
        newBlockData.forEach((line) => {
            console.log("line = " + line)
            blockData.push(line)
          })
    } else{
        console.log("update_blockdataに代入された値が正しくありません")
    }
    return;
}