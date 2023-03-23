import React from "react";

function Experiences({ datas }) {
  console.log(datas);
  return (
    <div className="cursus mb3">
      <h2 className="h2">Experiences profesionneles</h2>
      {datas.map((item) => (
        <>
          <div className="grid_row" key={item.id}>
            <div className="grid_item">
              <p className="grid_date">{item.date}</p>
              <img src={item.logo} alt="" className="grid_logo" />
            </div>
            <div className="grid_item">
              <h3 className="grid_title">{item.title}</h3>
              <p className="grid_location">{item.location}</p>
              <p className="grid_text">{item.text}</p>
              <ul className="grid_missions">
                {item.missions.map((mission) => (
                  <li className="grid_mission" key={mission.id}>
                    {mission.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="barre-horizontale"/>
        </>
      ))}
    </div>
  );
}

export default Experiences;
