const React = require('react');
const createReactClass = require('create-react-class');

var Name = createReactClass({
  getInitialState : function(){
    return {
      value : ""
    };
  },
  getName : function(e){
    this.setState({value:e.target.value});
  },
  clearName : function(){
    this.setState({value: ""});
  },
  render : function(){
    return(
      <div>
        <input type="text" className = "form-control" placeholder={this.props.nameType + " Name"} onChange={this.getName} value={this.state.value} />
      </div>
    );
  },
});
module.exports = Name;
