var BugList = React.createClass({
  displayName: 'BugList',

  render: function () {
    return React.createElement(
      'div',
      null,
      'The bug list would come here.'
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));