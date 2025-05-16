import TrashSvg from "../../assets/cuida_trash-outline.svg?react";

const TrashIcon = ({ styles, ...props }) => {
  return (
    <div
      {...props}
      className={`h-fit w-fit  rounded-lg cursor-pointer ${styles}`}
    >
      <TrashSvg className="w-10 text-[#4E4E4E] hover:text-red-500" />
    </div>
  );
};

export default TrashIcon;
