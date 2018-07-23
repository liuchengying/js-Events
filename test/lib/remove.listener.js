var chai = require('chai');
var events = require('../../events.js');

var expect = chai.expect;
var listenerArray, emitCount;
module.exports = function () {
    describe('chick removeListener method, single', function () {
        it('remove event', function () {
            emitCount = {emitCount_f: 0,emitCount_s: 0};
            listenerArray = [];
            function hello() {
                emitCount.emitCount_f++;
            }
            events.on('hello', hello);
            events.on('hello', function () {
                emitCount.emitCount_s++;
            });
            events.emit('hello')
            expect(emitCount.emitCount_f).to.be.equal(1);
            expect(emitCount.emitCount_s).to.be.equal(1);
           
            events.removeListener('hello', hello);
            events.emit('hello');
            expect(emitCount.emitCount_f).to.be.equal(1);
            expect(emitCount.emitCount_s).to.be.equal(2);
        })
    })
}