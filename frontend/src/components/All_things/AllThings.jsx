import "./All_things.css";
import { FinalAllThings } from "./FinalAllThings";
import { Sdata } from "./Sdata";
export const AllThings = () => {
  return (
    <div>
      <div className="Allthings"> All things to do</div>
      <div className="cardcontainer">
        {Sdata.map((val, index) => {
          return (
            <FinalAllThings key={val.id} title={val.title} things={val.things} />
          );
        })}
      </div>
    </div>
  );
};
