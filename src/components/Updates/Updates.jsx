import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}<br/></span>
                <span> {update.serviceType}<br/></span>
                <span> {update.salonName}<br/></span>
                <span> {update.address}</span>
              </div>
                {/* <span>{update.time}</span> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
