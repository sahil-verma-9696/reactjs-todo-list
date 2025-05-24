import EditSvg from "../../assets/fluent_edit-16-filled.svg?react";

const EditIcon = ({ styles, ...props }) => {
  return (
    <div
      {...props}
      className={`h-fit w-fit rounded-lg cursor-pointer ${styles}`}
    >
      <EditSvg className="w-10 text-[#4E4E4E] hover:text-blue-500" />
    </div>
  );
};

export default EditIcon;
