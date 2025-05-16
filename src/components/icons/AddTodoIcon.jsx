import AddTodoSvg from "../../assets/fluent_tab-add-32-filled.svg?react";

const AddTodoIcon = ({ styles, ...props }) => {
  return (
    <div
      {...props}
      className={`h-fit w-fit px-2 hover:bg-[#CF99FF] dark:hover:bg-[#242424] rounded-lg cursor-pointer ${styles}`}
    >
      <AddTodoSvg
        className={`w-10 ${
          styles?.includes("bg-[#CF99FF]") ? "text-white" : "text-[#4E4E4E]"
        } hover:text-white`}
      />
    </div>
  );
};

export default AddTodoIcon;
