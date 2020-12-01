import React from "react";

export default class UserCard extends React.Component {
    render() {
        const user = this.props.data;
        return(
            <div className="border-2 border-gray-50 rounded-md h-48 flex flex-wrap justify-center container shadow-lg m-1">
                <h3 className="rounded-t-md h-16 w-full text-center text-4xl text-white bg-gray-600">Name: {user.name}</h3>
                <div className="w-full flex flex-wrap justify-center">
                    <div className="w-4/5 flex justify-center">
                        <h4 className="font-semibold tracking-wide">Bio</h4>
                        <p className="tracking-wide">{user.bio}</p>  
                    </div>
                    <div className="w-4/5 flex justify-center">
                        <h4 className="font-semibold tracking-wide">Followers</h4>
                        <p className="tracking-wide">{user.followers}</p>    
                    </div>
                    <div className="w-4/5 flex justify-center">
                        <h4 className="font-semibold tracking-wide">Following</h4>
                        <p className="tracking-wide">{user.following}</p>    
                    </div>    
                </div>
                
                
            </div>
        )
    }
}