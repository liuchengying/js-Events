var chai = require('chai');
var events = require('../../events.js');

var expect = chai.expect;
var addListenerNum;
module.exports = function () {
    describe('chick "on"', function () {
        addListenerNum = 0;
        it('add Listener', function () {
            events.on('a', eatting)

            function eatting () {
                addListenerNum++;
            }

            events.emit('a');

            expect(addListenerNum).to.be.equal(1);
        })
    })
}