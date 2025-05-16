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
