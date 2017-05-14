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
            countdown.handleCountdownClock(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.status).toBe('started');
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            },1001)
        });

        it('should not set countdown to be negative', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleCountdownClock(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            },3001)
        });

        it('should pause countdown on pause status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleCountdownClock(3);
            countdown.handleStatusChange('paused');
            setTimeout(() => {
               expect(countdown.state.count).toBe(3);
               expect(countdown.state.status).toBe('paused');
               done();
            }, 1001);
        });

        it('should reset countdown on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleCountdownClock(3);
            countdown.handleStatusChange('stopped');
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.status).toBe('stopped');
                done();
            }, 2001);
        });

    });

});