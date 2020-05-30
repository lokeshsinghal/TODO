import React from 'react';
import './App.css';
import Delete from './deleteimage.png';
import FlipMove from 'react-flip-move'

export default function Items(props){
      const item = props.item;
      const itemList = item.map((items)=>{
          return(
              <div>
                <div className={items.color === "per20" ? "per20" : items.color==="per40" ? "per40" : items.color==="per80" ? "per80" : items.color==="per100" ? "per100" : "item-box"} key={items.key}>
                    <span>{items.text}</span>
                    <p className="delete-button"><img src={Delete} alt="logo" height="30px" onClick={()=>props.deleteItem(items.key)} /></p>
                </div>
                <span>
                    <button className="percentage-width btn-color1"  onClick={()=>props.progressMeter("per20",items.key)}>20%</button>
                    <button className="percentage-width btn-color2" onClick={()=>props.progressMeter("per40",items.key)}>40%</button>
                    <button className="percentage-width btn-color3" onClick={()=>props.progressMeter("per80",items.key)}>80%</button>
                    <button className="percentage-width btn-color4" onClick={()=>props.progressMeter("per100",items.key)}>100%</button>
                </span>
              </div>
          )
      })
      return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {itemList}
            </FlipMove>
        </div>
      );
}
