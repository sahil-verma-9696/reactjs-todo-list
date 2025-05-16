import HamburgerSvg from "../../assets/pajamas_hamburger.svg?react";

const HamburgerIcon = () => {
  return (
    <div className="h-fit w-fit px-2 bg-[#CF99FF] rounded-lg cursor-pointer">
      <HamburgerSvg className="w-10 text-[#4E4E4E] " />
    </div>
  );
};

export default HamburgerIcon;
