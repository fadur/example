var React = require('react');
var ReactDOM = require('react-dom');

var PageTitle = React.createClass({
    displayName: 'title',
    render: function(){
        return(
            React.createElement('body', {key: 'body'},
                    React.DOM.h1({key: 'title'}, 'Hello')
                
            )
        )    
    }
    
})


var title = function(){
    return React.createElement(PageTitle);
};

module.exports = {
    title: title        
}
