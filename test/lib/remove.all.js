var chai = require('chai');
var events = require('../../events.js');

var expext = chai.expect;
var fn1_arr = [],
    fn2_arr = [],
    afn1_arr = [],
    afn2_arr = [];
    
module.exports = function () {
    describe('chick removeAllListener method, muti', function () {
        it('remove same type event', function () {
            events.on('a', fn1);
            events.on('b', fn2);

            function fn1() {
                fn1_arr.push('ok');
            }

            function fn2() {
                fn2_arr.push('ok');
            }

            events.emit('a');
            events.emit('b');
            expext(fn1_arr).to.have.lengthOf(1);
            expext(fn2_arr).to.have.lengthOf(1);

            events.removeAllListener('a');
            events.emit('a');
            events.emit('b');
            expext(fn1_arr).to.have.lengthOf(1);
            expext(fn2_arr).to.have.lengthOf(2);
        });
        it('remove all type event', function () {
            afn1_arr = [], afn2_arr = [];
            events.on('a', fn1);
            events.on('b', fn2);

            function fn1() {
                afn1_arr.push('ok');
            }

            function fn2() {
                afn2_arr.push('ok');
            }

            events.emit('a');
            events.emit('b');
            expext(afn1_arr).to.have.lengthOf(1);
            expext(afn2_arr).to.have.lengthOf(1);

            events.removeAllListener();
            events.emit('a');
            events.emit('b');
            expext(afn1_arr).to.have.lengthOf(1);
            expext(afn2_arr).to.have.lengthOf(1);
        })
    })
}