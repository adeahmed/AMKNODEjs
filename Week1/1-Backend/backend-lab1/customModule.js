// customModule.js

function logMessage(message) {
    console.log(message);
    console.log("helou ");
}

module.exports = logMessage;



const getCurrentTime = () => new Date().toLocaleTimeString();
