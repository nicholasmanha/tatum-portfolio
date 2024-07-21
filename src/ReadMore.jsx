import React, { useState } from "react";
import ".//App.css";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    if (children) {
        return (
            <>
                <div className="flex items-center">
                    <span className="read-more-btn" onClick={toggleReadMore}>What I did on this project</span><img onClick={toggleReadMore} id="downarrow" src="media\arrow-down-sign-to-navigate.png" alt=""></img>
                </div>
                <p className="text">
                    {isReadMore ? "" : text}
                </p>
            </>

        );
    }

};


export default ReadMore;
