import Input from "../../components/Input";
import "./Colors.css";
const Colors = ({ handleChange }) => {
  return (
    <div className="mr-4">
      <h2 className="sidebar-title price-title mt-5 text-[22px] mb-5">
        Colors
      </h2>
     <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark"></span>All
        </label>
      <Input
        handleChange={handleChange}
        value={"black"}
        color={'black'}
        name={"test3"}
        title={"Black"}
      />{" "}
      <Input
        handleChange={handleChange}
        value={"blue"}
        color={'blue'}
        name={"test3"}
        title={"Blue"}
      />{" "}
      <Input
        handleChange={handleChange}
        value={"red"}
        color={"red"}
        name={"test3"}
        title={"Red"}
      />{" "}
      <Input
        handleChange={handleChange}
        value={"green"}
        color={"green"}
        name={"test3"}
        title={"Green"}
      />
      <Input
        handleChange={handleChange}
        value={"white"}
        color={"white"}
        name={"test3"}
        title={"White"}
      />
    </div>
  );
};

export default Colors;
