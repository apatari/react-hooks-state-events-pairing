import React from "react";

function Info( { video }) {
    return (
        <div>
            <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt} </p>
        </div>
        
    )
}

export default Info