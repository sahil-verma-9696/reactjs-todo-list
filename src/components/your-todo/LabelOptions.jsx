import React from "react";
import { Label } from "../ui/Label";
import DownIcon from "../icons/DownIcon";

const LabelOptions = ({ todo }) => {
  const filterConfig = {
    all: { emoji: "", text: "All", color: "slate" },
    important: { emoji: "⚠️", text: "Important", color: "yellow" },
    urgent: { emoji: "⏰", text: "Urgent", color: "purple" },
    important_urgent: { emoji: "🚨", text: "Important & Urgent", color: "red" },
    completed: { emoji: "✅", text: "Completed", color: "green" },
    none: { emoji: "🚫", text: "None", color: "gray" },
  };
  return (
    <div className="w-50 flex items-center max-sm:hidden">
      <Label color={filterConfig[todo.label].color} active={true}>
        {filterConfig[todo.label].emoji && `${filterConfig[todo.label].emoji} `}
        <span className="text-nowrap">{filterConfig[todo.label].text}</span>
        <DownIcon />
      </Label>
    </div>
  );
};

export default LabelOptions;
