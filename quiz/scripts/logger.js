

// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.
function logMsg(obj) {
    if (obj.hasOwnProperty('errMsg')) {
        console.error(obj.errMsg)
    }
}
