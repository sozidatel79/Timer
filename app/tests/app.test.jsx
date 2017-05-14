var React = require('react');
var expect = require('expect');

var Main = require('Main');

describe('App', () => {
    it('Main.jsx component should exists', () => {
        expect(Main).toExist();
    });
});