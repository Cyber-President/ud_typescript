
// エラーコードの設定、never戻り値絶対返さない
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('エラーが発生しました', 500);