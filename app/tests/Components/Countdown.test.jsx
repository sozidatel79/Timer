var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {

    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('Handle countdown clock', () => {
        it('should set state and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.HandleCountdownClock(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.status).toBe('started');
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            },1001)
        });

        it('should not set countdown to be negative', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.HandleCountdownClock(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            },2001)
        });
    });

});