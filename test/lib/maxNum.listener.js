var chai = require('chai');
var events = require('../../events.js');

var expect = chai.expect;

module.exports = function () {
    describe('chick defaultMaxEventListNum', function () {
        it('defaultMaxEventListNum value', function () {
            expect(events.defaultMaxEventListNum).to.be.equal(10);
        });
    });

    describe('chick MaxEventListNum', function () {
        it('MaxEventListNum value', function () {
            events.MaxEventListNum = 15;
            expect(events.MaxEventListNum).to.be.equal(15);
        })
    })
}