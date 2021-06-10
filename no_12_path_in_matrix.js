/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-10 18:30:43
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-10 20:43:20
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let index = 0; index < board[0].length * board.length; index++) {
        if (loopDeep(index, 0, board, word, [])) {
            return true;
        }
    }
    return false;
};

var loopDeep = function (index, cur, board, word, preview) {
    const len = board[0].length;
    const row = parseInt(index / len);
    const col = index % len;
    if (index > len * board.length - 1 || index < 0 || word[cur] !== board[row][col]) {
        return false;
    }
    if (cur === word.length - 1) {
        return true;
    }
    preview.push(`${row}${col}`);
    console.log(preview);
    board[row][col] = '/';
    const res = (col < len - 1 && loopDeep(index + 1, cur + 1, ...[...arguments].slice(2))) ||
        (col > 0 && loopDeep(index - 1, cur + 1, ...[...arguments].slice(2))) ||
        loopDeep(index + len, cur + 1, ...[...arguments].slice(2)) ||
        loopDeep(index - len, cur + 1, ...[...arguments].slice(2));
    board[row][col] = word[cur];
    if (!res) {
        preview.pop();
    }
    return res;
}

// console.log(exist([["a", "b"], ["c", "d"]], "abcd"))
console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]],
    "AAB"))