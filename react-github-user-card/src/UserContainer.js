import React from "react";
import UserCard from "./UserCard";

export default class UserContainer extends React.Component {
    render() {
        return (
            <div className="flex justify-center">
                <UserCard data={this.props.data}/>
                {this.props.followers.map((evt) => {
                    return(
                        <UserCard data={evt}/>
                    )
                })}
            </div>
        )
    }
}