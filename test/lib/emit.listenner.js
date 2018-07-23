var chai = require('chai');
var events = require('../../events.js');

var expect = chai.expect;
var emitEventNUm, emitMsg;
module.exports = function () {
    describe('chick "emit" method', function () {
        it('commit event', function () {
            emitEventNUm = 0;
            events.on('a', function (a, b) {
                emitEventNUm = a + b;
            })

            events.on('b', function () {
                emitMsg = 'run';
            })
            events.emit('a', 1, 1);
            events.emit('b');

            expect(emitEventNUm).to.be.equal(2);
            expect(emitMsg).to.be.equal('run');
        });
    })
}