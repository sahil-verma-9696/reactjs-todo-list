import ListSvg from "../../assets/fa-solid_list-ul.svg?react";

const ListIcon = ({ styles, ...props }) => {
  return (
    <div
      {...props}
      className={`h-fit w-fit px-2 hover:bg-[#CF99FF] rounded-lg cursor-pointer ${styles}`}
    >
      <ListSvg
        className={`w-10 ${
          styles.includes("bg-[#CF99FF]") ? "text-white" : "text-[#4E4E4E]"
        } hover:text-white`}
      />
    </div>
  );
};

export default ListIcon;
