var React = require('react');
var createReactClass = require('create-react-class');
var Email = require('./Email.jsx');
var Name = require('./Name.jsx');
var Form = createReactClass({
  getFormData : function(e){
    if( !this.refs.emailFieldRef.state.valid){
      alert("Please Enter a proper Email-ID");
    }else{
      // Send HTTP Data
      var httpReqBody = {
        email : this.refs.emailFieldRef.state.value,
        name : this.refs.nameFieldRef.state.value
      }
      console.log('got the Form Value On Submit--->',httpReqBody);
      this.refs.emailFieldRef.clearEmail();
      this.refs.nameFieldRef.clearName();
    }
  },
  render : function(){
      return(
        <div className = "col-sm-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <Name nameType="First" ref="nameFieldRef"/>
              <br/>
              <Email ref="emailFieldRef"/>
              <button className="btn btn-primary" onClick={this.getFormData}>Submit</button>
            </div>
          </div>
        </div>
      );
  }
});

module.exports = Form;
