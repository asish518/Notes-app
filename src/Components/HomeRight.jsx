import { useState } from "react";
import React, { useEffect } from "react";
import image2 from '../assets/image-removebg-preview 1.png';
import image3 from '../assets/Vector.png'
import "./HomeRight.css"
const HomeRight = () => {
    return (
        <>
            <div className="rightside">
                <div className="image">
                    <img src={image2} alt="NoteDefaultImageOnPageLoad" style={{ width: "50vw" }} />
                    <div className="Text1">
                        Pocket Notes
                    </div>
                    <div className="Text2">
                        Send and receive messages without keeping your phone online.
                        <br />
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                    </div>
                </div>
                <div className="end">
                    <img src={image3} alt="endToEndEncryptedImage" /> end-to-end encrypted
                </div>

            </div>
        </>
    )
}
export default HomeRight;