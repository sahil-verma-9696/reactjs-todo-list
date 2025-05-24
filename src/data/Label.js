export const labels = [
  {
    id: 1,
    name: "🚨 Important & Urgent",
    color: "red",
  },
  {
    id: 2,
    name: "⏰ Urgent",
    color: "purple",
  },
  {
    id: 3,
    name: "⚠️ Important",
    color: "yellow",
  },
  {
    id: 4,
    name: "✅ Completed",
    color: "green",
  },
  {
    id: 5,
    name: "🚫 None",
    color: "gray",
  },
];

export function getLabel(id) {
  return labels.find((label) => label.id === id);
}
