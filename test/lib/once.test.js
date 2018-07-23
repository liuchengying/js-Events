var chai = require('chai');
var events = require('../../events.js');

var expect = chai.expect;
var once_first_emit;
var once_emit_num;
module.exports = function () {
    describe('chick "once" method, once', function () {
        it('should once run', function () {
            once_first_emit = 0;
            events.once('a', function () {
                once_first_emit++
            })
            
            events.emit('a');
            events.emit('a');
            events.emit('a');
            events.emit('a');

            expect(once_first_emit).to.be.equal(1);
        })
    });

    describe('chick "once" method, muti', function () {
        it('should once muti', function() {
            once_emit_num = 0;
            events.once('e', function() {
                events.emit('e');
                once_emit_num++;
            });
            events.once('e', function() {
                once_emit_num++;
            });
            events.emit('e');

            expect(once_emit_num).to.be.equal(2);
        })
    })
}