let isAbleInput = true;

function get_is_able_input() {
    return isAbleInput;
}

function set_is_able_input(nowAbleInput) {
    if(typeof nowAbleInput !== "boolean"){
        console.log("set_able_inputに代入された方が違います")
        return;
    }
    isAbleInput = nowAbleInput
    return;
}
