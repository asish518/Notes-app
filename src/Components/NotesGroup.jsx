import "./NotesGroup.css";
import React from "react";
const NotesGroup = ({ id, groupName, color, buttonColorID }) => {
    const imageText = groupName.length;
    const ImageNotes = {
        backgroundColor: `${color}`,
        borderRadius: "50%",
        minWidth: "61px",
        minHeight: "61px",

        color: "#FFF",
        fontFamily: "Roboto",
        fontSize: "1.50719rem",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "97.688%" /* 1.47238rem */,
        letterSpacing: "0.03013rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        textTransform: "uppercase"

    };
    return(
        <>
        {
            <div className="NotesGroup">
                <div className="ImageNotes">
                    {
                        groupName[0]
                    }
                    {
                        groupName[imageText-1]
                    }

                </div>
                <div className="NotesName">{groupName}</div>
            </div>
        }
        </>
    );

};
export default NotesGroup;