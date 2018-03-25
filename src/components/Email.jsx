var React = require('react');
var createReactClass = require('create-react-class');
var validator = require("email-validator");
var Email = createReactClass({
  getInitialState : function(){
    return{
      valid : true,
      value : ""
    }
  },
  getEmail : function(e){
    var val = e.target.value;
    if(val != '' && !validator.validate(val) ){
      this.setState({valid:false, value: e.target.value})
    }else{
      this.setState({valid:true, value: e.target.value})
    }
  },
  clearEmail : function(){
    this.setState({value: "",valid : true});
  },
  render : function(){
    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return(
      <div className={formClass}>
        <input type="text" className="form-control" onChange={this.getEmail} placeholder="Email" value = {this.state.value}/>
      </div>
    );
  },
});
module.exports = Email;
