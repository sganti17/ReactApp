import React from "react";

export default class UserInfo extends React.Component {

    constructor(){
        super();
        this.state = {

           defaultUser: {
            name:"JohnSmith",
            salary:60000,
             age:25
        }
    }
 }
 changeData()
{
    let tempUser = {
            name:this.props.userName,
            salary:60000,
             age:29
        
    };
    this.setState({
                defaultUser:tempUser,
                myname:"Rajesh"
            })
 };

  render() {
    return (
      <div>
       <h3> {this.state.defaultUser.name} is {this.state.defaultUser.age} years old</h3>
       <h3> test data {this.props.userName}</h3>
       <button onClick = {this.changeData.bind(this)}>Click</button>
      </div>
    );
  }
}