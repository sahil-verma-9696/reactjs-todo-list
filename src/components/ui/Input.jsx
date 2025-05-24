export function TitleInput({ ...props }) {
  return (
    <input
      {...props}
      className="w-full font-thin bg-[#F6ECFF] dark:bg-[#242424] dark:text-white text-lg p-2 rounded-lg"
      placeholder="Enter TODO Title"
    />
  );
}
export function DescriptionInput({ ...props }) {
  return (
    <textarea
      {...props}
      className="w-full h-50 font-thin bg-[#F6ECFF] dark:bg-[#242424] dark:text-white text-lg p-2 rounded-lg"
      placeholder="Describe your TODO"
    />
  );
}
