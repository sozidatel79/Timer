var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');


describe('Controls', () => {

    it('should exists', () => {
        expect(Controls).toExist();
    });

    describe('Render', () => {

        it('should render Pause button when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls status='started'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var buttonText = $el.find('.secondary').text();
            expect(buttonText).toBe('Pause');
        });

        it('should render Start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls status='paused'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $buttonText = $el.find('button:contains(Start)');
            expect($buttonText.length).toBe(1);
        });

        it('should render Clear button', () => {
            var controls = TestUtils.renderIntoDocument(<Controls status=''/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $buttonText = $el.find('button:contains(Clear)');
            expect($buttonText.length).toBe(1);
        });
    });

});