import React from "react";

function Votes({ video }) {
    return (
        <div>
            <button>{video.upvotes}👍</button>
            <button>{video.downvotes}👎</button>
        </div>
    )
}

export default Votes