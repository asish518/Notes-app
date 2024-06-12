import React, { useEffect, useState } from 'react';
import "./HomeLeft.css";
import NotesGroup from './NotesGroup';
import image1 from '../assets/+.png';

const HomeLeft = ({ handleClick, handleUserClicked, id, groupName, create, color }) => {
    const [Buttonclicked, setButtonclicked] = useState(null);
    const storedDataString =localStorage.getItem("groupNamesData");
    const storedData =JSON.parse(storedDataString) || [];
    const newId = storedData.length > 0 ? storedData[storedData.length - 1].id+1:1;
    const newData={
        id: newId,
        groupName: groupName,
        color:color,
        create:create,
    };
    const submitCheck = ()=>{
        if (groupName !== '' && create === true) {
            return true;
        } else {
            return false;
        }
    };
    useEffect(()=>{
        if (submitCheck()){
            storedData.push(newData);
            localStorage.setItem("groupNamesData", JSON.stringify(storedData));
        }
    },[groupName, create, newData]);
    const handleButtonClick = (buttonId)=> {
        setButtonclicked(buttonId);
    };
    const buttonStyle = (buttonId) => {
        return{
            backgroundColor: Buttonclicked === buttonId ? "#F7ECDC" : "transparent",
            color: "white",
            minWidth: "100%",
            minHeight: "61px",
            
            display: "flex",
            justifyContent: "flex-start",
            borderRadius: "2rem 0rem 0rem 2rem",
        }
    }


    return (
        <div className='LeftContainer'>
            <h1>
                Pocket Notes
            </h1>
            <div className='center'><button onClick={() => handleClick(true)}
             className='CreateNotesButton'>{"  "}
            <img src={image1} alt='+' style={{ minWidth: "21px" }} />  
            Create Notes group</button></div>
            <div>
                <br />
                <div className='storage'>
                    {storedData.map((group) =>
                        group.create ? (
                            <div className="notesGroupSelected">
                                <span className='action' 
                                style={buttonStyle(group.id)}
                                onClick={(_) =>{
                                    handleUserClicked(group.id);
                                    handleButtonClick(group.id);
                                }}>
                                    <NotesGroup key={group.id}
                                                groupName={group.groupName}
                                                color={group.color}
                                                buttonColorID={group.id}
                                                />


                                </span>

                            </div>
                        ) : null)}

                </div>
            </div>
        </div>
    )
}

export default HomeLeft;
