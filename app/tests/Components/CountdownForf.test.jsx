var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('Countdown Form', () => {

    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetSeconds if valid value entered (NUMBER) ', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetSeconds={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 121;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(121);
    });

    it('should  not call onSetSeconds if invalid value entered (STRING) ', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetSeconds={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 'test';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });

});