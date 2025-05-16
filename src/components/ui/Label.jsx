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
    text: "text-slate-800",
    bg: "bg-slate-300",
  },
};

export function Label({
  color = "gray",
  active = false,
  children,
  className = "",
  ...props
}) {
  const colorClasses = colorMap[color] || colorMap.gray;

  return (
    <span
      {...props}
      className={`flex items-center gap-1 w-fit cursor-pointer px-2 py-1 text-sm font-medium rounded-md
        ${colorClasses.text} ${
        active ? colorClasses.bg : "bg-transparent"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function ImpLabel() {
  return (
    <span className="px-2 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-md">
      ⚠️ Important
    </span>
  );
}

export function UrgLabel() {
  return (
    <span className="px-2 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-md">
      ⏰ Urgent
    </span>
  );
}

export function ImpUrgLabel() {
  return (
    <span className="px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-md">
      🚨 Important & Urgent
    </span>
  );
}

export function CompLabel() {
  return (
    <span className="px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-md">
      ✅ Completed
    </span>
  );
}

export function NoneLabel() {
  return (
    <span className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-300 rounded-md">
      🚫 None
    </span>
  );
}
export function AllLabel() {
  return (
    <span className="px-2 py-1 text-sm font-medium text-slate-800 bg-slate-300 rounded-md">
      All
    </span>
  );
}
