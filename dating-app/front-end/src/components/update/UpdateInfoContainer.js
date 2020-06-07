import React, { Component } from 'react';
import './Update.css';
import UpdateInfo from './UpdateInfo';

const containerStyle = {
    position: "relative",
    display: "inline-block",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    width: "100%",
    overflow: "auto",
    borderBottom: "1px solid #ccc"
}

const inputStyle = {
    display: "inline-block",
    color: "#000",
    fontSize: "14px",
    margin: "3px",
    border: "0"
}

class UpdateInfoContainer extends Component  {
    state = {
        tags: [],
        invalid_input: ""
    }
    onKeyUp = (e) => {
        if (e.which === 32) {
            let input = e.target.value.trim().split(" ");
            if (input.length === 0 || input[0] === "") return;
            if (input[0].toLowerCase() !== "gym" && input[0].toLowerCase() !== "art" && input[0].toLowerCase() !== "music" && input[0].toLowerCase() !== "photography" && input[0].toLowerCase() !== "coding"){
                this.setState({
                invalid_input: "YOU ENTERED AN INVALID TAG!",
                });
                return;
            }
    
            this.setState({
                tags: [ ...this.state.tags, input ],
                invalid_input: ""
            });
            e.target.value = "";
        }
    }

    onDeleteTag = (tag) => {
        var tags = this.state.tags.filter((t) => {
          return (t !== tag);
        });
        this.setState({
          tags: tags
        });
    }
    render () {
        return (
            <div>
                <UpdateInfo 
                    containerStyle={containerStyle}
                    inputStyle={inputStyle}
                    onDeleteTag={this.onDeleteTag}
                    onKeyUp={this.onKeyUp}
                    invalid_input={this.state.invalid_input}
                    tags={this.state.tags}
                />
            </div>
        )
    }
}

export default UpdateInfoContainer;
