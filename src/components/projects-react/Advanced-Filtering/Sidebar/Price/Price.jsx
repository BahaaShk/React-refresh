import Input from "../../components/Input";
import "./Price.css";
const Price = ({ handleChange }) => {
  return (
    <div className="ml-5">
      <h2 className="sidebar-title price-title mt-5 text-[22px] mb-5">Price</h2>
       <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
      <Input
        handleChange={handleChange}
        value={50}
        name={"test2"}
        title={"0 - $50"}
      />{" "}
      <Input
        handleChange={handleChange}
        value={100}
        name={"test2"}
        title={"50 - $100"}
      />{" "}
      <Input
        handleChange={handleChange}
        value={150}
        name={"test2"}
        title={"100 - $150"}
      />{" "}
      <Input
        handleChange={handleChange}
        value={150}
        name={"test2"}
        title={"$150 +"}
      />
    </div>
  );
};

export default Price;
