const colorMap = {
  yellow: {
    text: "text-yellow-800",
    bg: "bg-yellow-100",
  },
  purple: {
    text: "text-purple-800",
    bg: "bg-purple-100",
  },
  red: {
    text: "text-red-800",
    bg: "bg-red-100",
  },
  green: {
    text: "text-green-800",
    bg: "bg-green-100",
  },
  gray: {
    text: "text-gray-800",
    bg: "bg-gray-300",
  },
  slate: {
    text: "text-slate-800 dark:text-white",
    bg: "bg-slate-300",
  },
};

export function Label({ color = "gray", label, className = "", ...props }) {
  const colorClasses = colorMap[color] || colorMap.gray;
  return (
    <span
      {...props}
      className={`flex items-center gap-1 w-fit cursor-pointer px-2 py-1 text-sm font-medium rounded-md  
        ${colorClasses.text}    
        ${className?.includes("bg") ? "" : colorClasses.bg}    
        ${className} `}
    >
      {label}
    </span>
  );
}
