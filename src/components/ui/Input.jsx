export function TitleInput() {
  return (
    <input
      className="w-full font-thin bg-[#F6ECFF] text-lg p-2 rounded-lg"
      placeholder="Enter TODO Title"
    />
  );
}
export function DescriptionInput() {
  return (
    <textarea
      className="w-full h-50 font-thin bg-[#F6ECFF] text-lg p-2 rounded-lg"
      placeholder="Describe your TODO"
    />
  );
}
