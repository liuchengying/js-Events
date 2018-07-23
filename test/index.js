var testFnArray = [];
// 将所有模块push到testFnArray中
var addFnToArr = function (path) {
    if (!path) {
        return;
    }
    testFnArray.push(require(path));
}

addFnToArr('./lib/once.test.js');
addFnToArr('./lib/maxNum.listener.js');
addFnToArr('./lib/on.listener.js');
addFnToArr('./lib/emit.listenner.js');
addFnToArr('./lib/remove.listener.js');
addFnToArr('./lib/remove.all.js');

// 遍历调用
for(var i = 0 ; i<testFnArray.length; i++) {
    if(testFnArray[i] instanceof Function) {
        testFnArray[i]();
    }else {
        break;
    }
}
