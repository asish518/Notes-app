import React, { useState } from 'react';
import HomeLeft from './HomeLeft';
import "./Home.css";
import HomeRight from './HomeRight';
import { Modal } from 'react-responsive-modal';
import ReactDOM from 'react-dom';
import Notes from "./Notes";
const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [colorgroupChoice, setColorgroupChoice] = useState(false)
  const [colorChoice, setColorChoice] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [userClicked, setUserClicked] = useState(0);
  const handleUserClicked = IDnum => {
    setUserClicked(IDnum);
  };
  //setting stored data 
  const [createGroup, setCreateGroup] = useState({
    id: 0,
    groupName: "",
    color: "",
    create: false,
  });
  const { id, groupName, color, create } = createGroup;
  const submitCheck = () => {
    if (colorChoice === true && groupName !== "") {
      return true;
    } else {
      return false;
    };
  };
  const handleClick = (open) => {
    setOpen(open);
  };
  const handleSubmit = (e) => {
    console.log(submitCheck + "submitCheck");
    if (submitCheck() === true) {
      setCreateGroup({ ...createGroup, create: true });
      setOpen(false);
    }
  };
  const funColor1 = () => {
    setCreateGroup({ ...createGroup, color: "#B38BFA" });
    setColorChoice(true);
  };

  const funColor2 = () => {
    setCreateGroup({ ...createGroup, color: "#FF79F2" });
    setColorChoice(true);
  };

  const funColor3 = () => {
    setCreateGroup({ ...createGroup, color: "#43E6FC" });
    setColorChoice(true);
  };

  const funColor4 = () => {
    setCreateGroup({ ...createGroup, color: "#F19576" });
    setColorChoice(true);
  };

  const funColor5 = () => {
    setCreateGroup({ ...createGroup, color: "#0047FF" });
    setColorChoice(true);
  };

  const funColor6 = () => {
    setCreateGroup({ ...createGroup, color: "#6691FF" });
    setColorChoice(true);
  };
  return(
    <>
    <div className='HomeMain'>
      {submitCheck()? (<div className='HideWhenMobile'>
        <HomeLeft
          handleClick={handleClick}
          handleUserClicked = {handleUserClicked}
          id={id}
          groupName={groupName}
          color={color}
          create={create}
        />
      </div>):(<div className='HideWhenMobile'>
        <HomeLeft handleClick={handleClick}handleUserClicked={handleUserClicked}/>
      </div>)}
      {
        (userClicked>0)?(
          <div className='HideWhenMobile'>
            <Notes userClicked={userClicked}/>
          </div>
        ):(
          <div className='HideWhenMobile'><HomeRight /></div>
        )
      }

      {/* mobile version */}
      { submitCheck() && isVisible ? (
        <div className="hideWhenPc">
          <HomeLeft
            handleClick={handleClick}
            handleUserClicked={handleUserClicked}
            id={id}
            groupName={groupName}
            color={color}
            create={create}
           
          />
          </div>
        ) : (
          (isVisible) ?(
          <div className="hideWhenPc" onClick={()=>setIsVisible(false)}>
          <HomeLeft handleClick={handleClick} handleUserClicked={handleUserClicked}/>
          {console.log(isVisible)}
          </div>
          )
        :(null)
        )
        }
        {
          (userClicked>0) ? (
            <div className="hideWhenPc">
            <Notes userClicked={userClicked}/>
            </div>
          ):(
            open > 0 && (
              <div className="hideWhenPc">
                <HomeLeft
                  handleClick={handleClick}
                  handleUserClicked={handleUserClicked}
                  id={id}
                  groupName={groupName}
                  color={color}
                  create={create}
                />
              </div>
            )
          )
        }

    </div>
    <Modal 
      open={open}
      onClose={() => {setOpen(false);window.location.reload()}}
      closeOnOverlayClick={true}
      center={true}
      showCloseIcon={false}
      >
        <h2 className='Text1'>Create New Notes group</h2>
        <form action=''>
          <p>
            <label htmlFor='GroupName'>
              <span className='Text2'> Group Name</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                 type="text"
                 placeholder="Enter your group name...."
                 className="placeHold"
                 onChange={(e) => handleNotesChange(e)}
              />
              {colorgroupChoice === false && groupName === "" ? (
            <p style={{ color: "red" }}>Please Enter Group Name!</p>
          ) : null}
            </label>
          </p>
          <p className='Choosecolor'>
            <label htmlFor='Choosecolor'>
              <span className='Text2'>Choose color</span>
              <span className='ChoosecolouBreak'>
                &nbsp;&nbsp;
                <button
                   type='button'
                   className='colorButton1'
                   onClick={funColor1}
                ></button>
                &nbsp;&nbsp;
                <button
                   type='button'
                   className='colorButton2'
                   onClick={funColor2}
                ></button>
                &nbsp;&nbsp;
                <button
                   type='button'
                   className='colorButton3'
                   onClick={funColor3}
                ></button>
                &nbsp;&nbsp;
                <button
                   type='button'
                   className='colorButton4'
                   onClick={funColor4}
                ></button>
                &nbsp;&nbsp;
                <button
                   type='button'
                   className='colorButton5'
                   onClick={funColor5}
                ></button>
                &nbsp;&nbsp;
                <button
                   type='button'
                   className='colorButton6'
                   onClick={funColor6}
                ></button>
                &nbsp;&nbsp;

              </span>
            </label>
          </p>
          {colorChoice === false ? (
            <p style={{ color: "red" }}>Please Choose The Color!</p>
          ) : null}
          <input
             type='submit'
             value="create"
             className='create'
             onClick={handleSubmit}
          />

        </form>


      </Modal>

    </>
  )
}

export default Home;
