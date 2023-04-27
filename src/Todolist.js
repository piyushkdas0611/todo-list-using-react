import "./Todolist.css";
import React, { useState } from "react";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedList = listData.filter((element, index) => {
      return i !== index;
    });
    setListData(updatedList);
  }
  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="header">
            <h1>TODO LIST</h1>
          </div>
          <div className="inputTask">
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={addActivity}>Add</button>
          </div>
          <p className="tasks">Tasks</p>
          <hr />
          {listData !== [] &&
            listData.map((data, index) => {
              return (
                <>
                  <p key={index}>
                    <div className="task-list">
                      <div className="list-data">{data}</div>
                      <button
                        className="btn"
                        onClick={() => removeActivity(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </p>
                </>
              );
            })}
          {listData >= 1 && (
            <button className="btn" onClick={removeAll}>
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Todolist;
