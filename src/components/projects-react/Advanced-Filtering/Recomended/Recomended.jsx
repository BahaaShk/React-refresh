import "./Recomended.css";
import Buttons from "../components/Buttons";
const Recomended = ({handleClick}) => {

  return (
    <>
      <h2 className="ml-[20rem] mb-5 mt-5 text-[20px]">Recommended</h2>
      <div className="flex ml-[20rem]">
        <div className="recomended-btns">
          <button className="btns" onClick={handleClick}>All Products</button>

          <Buttons onClickHandler={handleClick} value={"Nike"} title={"Nike"} />
          <Buttons onClickHandler={handleClick} value={"Puma"} title={"Puma"} />
          <Buttons onClickHandler={handleClick} value={"Vans"} title={"Vans"} />
          <Buttons onClickHandler={handleClick} value={"Adidas"} title={"Adidas"} />
        </div>
      </div>
    </>
  );
};

export default Recomended;
