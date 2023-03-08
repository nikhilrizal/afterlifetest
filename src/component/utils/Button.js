import { FaDove } from "react-icons/fa";
const Button = (props) => {
  let { placeholder } = props;
  return (
    <>
      <button className="text-white  text-[19px]   h-10 w-36 flex justify-center items-center  bg-theme rounded-3xl bottom-3 left-[34%]">
        {placeholder}
        <FaDove className="text-[19px] ml-3" alt="" />
      </button>
    </>
  );
};

export default Button;
Button.defaultProps = {
  placeholder: "change the name",
};
