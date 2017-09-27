import React from "react";
import ReactDOM from "react-dom";
 
import UserInfo from "./components/user-info";
 
const app = document.getElementById('app');
 
const name = "James";
 
/*ReactDOM.render(<div>
                    <h3>
                        Hello!
                    </h3>
                    <h3>
                        {10 + 20}
                    </h3>
                    <h3>
                        {name.toUpperCase()}
                    </h3>
                </div>
                , app);*/
 
/*ReactDOM.render(
    <div>
        <UserInfo userName="John"/>
        <UserInfo userName="James"/>
        <UserInfo userName="Jackie"/>
    </div>
, app);
*/
 
var Board = React.createClass({
 
    getInitialState: function() {
        return {
            comments: [
                'Good morning!',
                'How are you',
                'Have a nice day'
            ]
 
        }
    },
 
    editComment: function(newText, i) {
        console.log("To BOARD: " + newText);
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
 
    },
 
    deleteCommentFromBoard: function(i) {
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr});
    },
 
    eachComment: function(text, i) {
        return (
            <Comment index={i} key={i} editCommentText={this.editComment} deleteComment={this.deleteCommentFromBoard}>
                {text}
            </Comment>
        );
    },
 
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.comments.map(this.eachComment)
                    }
                </ul>
            </div>
        );
    }
 
});
 
 
var Comment = React.createClass({
 
    getInitialState: function() {
        return {
            editing: false
        };
    },
 
    edit: function() {
        this.setState({editing: true});
    },
 
    delete: function() {
        this.props.deleteComment(this.props.index);
    },
 
    save: function() {
        var data = this.refs.newComment.value;
        console.log(data);
        this.props.editCommentText(data, this.props.index);
        this.setState({editing:false});
    },
 
    cancel: function() {
        this.setState({editing: false});
    },
 
    renderForm: function() {
        return (
            <div class="panel panel-primary">
                <div class="panel panel-heading">
                    Editing...
                </div>
                <div class="panel panel-body">
                    <textarea ref="newComment">{this.props.children}</textarea>
                    <button class="save" onClick={this.save}>Save</button>
                    <button class="cancel" onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        );
    },
 
    renderNormal: function() {
        return (
            <div class="panel panel-primary">
                <div class="panel panel-heading">
                    {this.props.children}
                </div>
                <div class="panel panel-body">
                    <button class="edit" onClick={this.edit}>Edit</button>
                    <button class="delete" onClick={this.delete}>Delete</button>
                </div>
            </div>
        );
    },
 
    render() {
 
        if(this.state.editing)
            return this.renderForm();
        else
            return this.renderNormal();
 
    }
 
 
 
});
 
ReactDOM.render(
    <Board/>,
    app
);