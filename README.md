## events   **事件处理(订阅发布)**

### 介绍
*方法和属性*
* [X] events.MaxEventListNum
* [X] events.emit(enentName, message)
* [X] events.on(eventName, callback)
* [X] events.once(eventName, callback)
* [X] events.removeListener(eventName, callback)
* [X] evetns.removeAllListener([,eventName])

### 使用
简单使用
``` javascript
// 创建events实例
var myEvent = new events();
```
* #### events.MaxEventListNum  --属性
> *每个事件的最大订阅数量*
``` javascript
myEvent.MaxEventListNum = 5;// 每个事件的最多订阅数为 5
```
**如果不设置MaxEventListNum, 则默认为 10**

* #### events.emit(enentName, message) --方法
> *发布事件*
``` javascript
myEvent.emit('发布事件名', '发布信息'); // '发布信息' 给监听这的回调传参

// 简单示例

myEvent.emit('sleeping', '睡觉');
```
* #### events.on(eventName, callback) --方法
> *订阅 (监听) 事件*
``` javascript
myEvent.on('订阅事件的名字', callback);

// 简单示例

myEvent.on('sleeping', function (msg) {
    console.log('我正在' + msg + '...'); // 我正在睡觉...
})
```
* #### events.once(eventName, callback) --方法
> *只订阅一次事件*
> 即当使用此方法订阅的事件，在接收到发布的事件执行后，立即删除当前订阅

面对各种各样的需求，比如，我们希望只监听一次事件，也就是说我们只需要第一次执行，而之后就不在监听此事件。
``` javascript
// 发布事件    第一次发布
myEvent.emit('eatting', '第一次-吃饭');

// 发布事件    的二次发布
myEvent.emit('eatting', '第二次-吃饭');

// 使用 once 方法订阅事件
myEvent.once('eatting', function (msg) {
    console.log(msg);  // 第一次-吃饭
})

```
当使用 once 方法订阅事件时，只对事件订阅一次，当第一次 emit 后，once 订阅的事件会立即被删除。所以以上代码实例中，第二次被 emit 后并没有监听到任何eatting事件，无任何输出。
* #### events.removeListener(eventName, callback) --方法
> *删除指定事件的指定订阅（监听）方法*
``` javascript
// 定义callback
function cb (msg) {
    console.log('我正在' + msg + '...') 
}

// 订阅（监听）eatting事件
myEvent.on('eatting', cb);

// 发布 eatting 事件
myEvent.emit('eatting', '吃饭'); // 我正在吃饭

// 删除 eatting事件中 回调为 cb 的监听
myEvent.removeListener('eatting', cb);

//
// 此次发布事件，去没有任何输出
myEvent.emit('eatting', '再一次，吃饭');  /*无任何输出，说明该监听已经被删除*/  
```
当需要对都一个订阅（监听）删除时，参数中callback必须与订阅此事件的方法中的 callback 一致，否则无法删除。
``` javascript
// 订阅（监听）eatting事件
myEvent.on('eatting', function (msg) {
    ... // 相同内容
});

// 删除订阅事件
myEvent.removeListener('eatting', function (msg) {
    ... // 相同内容
})
```
此方式无法删除对应的订阅（监听事件），传入的 callback 为匿名函数，在 javascript 中，相同的书写形式的匿名函数是不相等的。所以导致无法删除。
**提示：** 为防止两个callback不一致导致无法删除，建议在订阅事件希望删除的事件时，最好不采用匿名函数的形式。
* #### events.removeAllListener([,eventName]) --方法
> *删除同一事件的所有订阅（监听），或者删除当前events对象的所有订阅（监听）*

当传参数eventName时，只删除当前eventName的所有订阅（监听），不影响其他订阅（监听）事件
``` javascript
    // 订阅
    myEvent.on('eatting', function (msg) {
        console.log(msg);
    });
    myEvent.on('eatting', function (msg) {
        console.log(msg);
    });
    myEvent.on('sleeping', function (msg) {
        console.log(msg);
    });
    // 发布
    myEvent.emit('eatting', '吃饭'); // 吃饭
    myEvent.emit('eatting', '第一次，吃饭'); // 第一次，吃饭
    myevent.emit('sleeping', '睡觉'); // 睡觉
    // 删除 eatting 监听
    myEvent.removeAllListener(type);
    myEvent.emit('eatting', '吃饭'); // warning 不存在此监听事件
    myEvent.emit('sleeping', '睡觉'); // 睡觉

```
当没有传参数eventName时，删除当前events实例的所有订阅（监听）
``` javascript
    // 订阅
    myEvent.on('eatting', function (msg) {
        console.log(msg);
    });
    myEvent.on('sleeping', function (msg) {
        console.log(msg);
    });
    // 发布
    myEvent.emit('eatting', '吃饭'); // 吃饭
    myevent.emit('sleeping', '睡觉'); // 睡觉
    // 删除所有
    myEvent.removeAllListener();
    // 再次发布
    myEvent.emit('eatting', '吃饭'); // warning 不存在此监听事件
    myevent.emit('sleeping', '睡觉'); // warning 不存在此监听事件
```








-------------------------
如果感觉对你有帮助，记着STAR:star:！！！:grin: