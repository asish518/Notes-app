import { useState } from "react";
import "./Notes.css";

const Notes = ({ userClicked }) => {

    const [myNotes, setMyNotes] = useState({
        id: [],
        notes: [],
        time: [],
        date: [],
    });
    const [saveNotes, setSaveNotes] = useState(false)
    const storedDataString = localStorage.getItem("groupNamesData");
    const storedData = JSON.parse(storedDataString) || [];
    const groupName = storedData[userClicked - 1].groupName;
    const color = storedData[userClicked - 1].color;
    const imageText = groupName.lengthh;
    const NotesImage = {
        backgroundColor: `${color}`,
        borderRadius: "50%",
        minWidth: "61px",
        minHeight: "61px",

        maxWidth: "61px",
        maxHeight: "61px",
        // text
        color: "#FFF",
        fontFamily: "Roboto",
        fontSize: "1.50719rem",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "97.688%" /* 1.47238rem */,
        letterSpacing: "0.03013rem",

        // center
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // UpperCase
        textTransform: "uppercase",
    };
    const myNotesFunction = (e) => {
        const currentNotesDate = currentNotesDate.toLocaleTimeString();
        const NoteTimeWithoutSeconds = noteTimeWithSeconds.replace(/:\d{2}\s/, " ");
        const currentDate = new Date();
        const notesDay = currentDate.getDate();
        const notesMonth = new Intl.DateTimeFormat("en-US", {
            month: "long",
        }).format(currentDate);
        const notesYear = currentDate.getFullYear();

        const notesDate = `${notesDay} ${notesMonth} ${notesYear}`;
        setMyNotes({
            ...mmyNotes, id: userClicked,
            notes: e.target.value,
            time: NoteTimeWithoutSeconds,
            date: notesDate,
        });
        setSaveNotes(true);

    };
    const resetTextarea = () => {
        setMyNotes({ ...myNotes, notes: "" });
    };
    const saveMyNotes = () => {
        const existinggroupNamesData = localStorage.getItem("myNotesSave");
        let existingNotes = JSON.parse(existinggroupNamesData) || [];
        if (myNotes.notes !== "" && saveNotes === true) {
            existingNotes.push(myNotes);
            localStorage.setItem("myNotesSave", JSON.stringify(existingNotes));
        };
        resetTextarea();
    };
    const reterivingMyNotes = () => {
        const existinggroupNamesData = localStorage.getItem("myNotesSave");
        if (existinggroupNamesData) {
            const existingNotes = JSON.parse(existinggroupNamesData);
            return (existingNotes.map((note, index) => (
                (userClicked === note.id) ? (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "21px" }} key={index}>
                        <div>
                            <div>
                                <div className="time">{note.time}</div>
                                <div className="date">{note.date}</div>
                            </div>
                        </div>
                        <div className="notes" style={{ width: "50vw", contentWrap: "break-word" }}> {note.notes}</div>
                        <br /><br /><br />
                    </div>
                ) : (null)
            )));
        } else {
            console.log("Data not found in localStorage");
        }
    };
    const handleKEnerKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            saveMyNotes();
        }
    };


    return (
        <>
            {userClicked > 0 ? (
                <div className="NotesGroupNotes">
                    <div className="NotesGroupHeading">
                        &nbsp; &nbsp; &nbsp; <span className="backButton" onClick={() => window.location.reload()}><img src="./assets/Backbutton.png" alt="BackButton" /> &nbsp;</span>
                        <div style={NotesImage}>
                            {groupName[0]}
                            {groupName[imageText - 1]}
                        </div>
                        <div className="NotesName">{groupName}</div>
                    </div>
                    <div className="NotesContent">
                        {reterivingMyNotes()}
                    </div>
                    <div className="NotesEnter">
                        <textarea type="text"
                            placeholder="Enter your text here..........."
                            className="NotesInput"
                            onChange={(e) => myNotesFunction(e)}
                            value={myNotes.notes}
                            onKeyPress={handleKEnterKey} />
                        <img src="./assets/Enter.png"
                            alt="Enter"
                            className="NotesInputButton"
                            onClick={saveMyNotes} />
                    </div>
                </div>
            ) : (("no notes", console.log("no notes")))}

        </>
    )


};
export default Notes;

