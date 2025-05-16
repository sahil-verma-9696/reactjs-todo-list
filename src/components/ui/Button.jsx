import AddTodoIcon from "../icons/AddTodoIcon";
import ListIcon from "../icons/ListIcon";

export function AddTodoBtn() {
  return (
    <button className="w-fit bg-[#CF99FF] dark:bg-[#242424] dark:text-white cursor-pointer text-white font-bold px-4 py-1 rounded-lg">
      Add
    </button>
  );
}

export function FloatingBtn({ setPage, page }) {
  const handleClick = () => {
    setPage(page === "create" ? "todos" : "create");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed hidden bottom-14 right-4 size-20 max-sm:flex justify-center items-center text-5xl font-thin bg-[#CF99FF] dark:bg-[#242424] dark:text-white cursor-pointer text-white rounded-full"
    >
      {page === "create" ? (
        <ListIcon styles="bg-[#CF99FF] dark:bg-[#242424]" />
      ) : (
        <AddTodoIcon styles="bg-[#CF99FF] dark:bg-[#242424]" />
      )}
    </button>
  );
}
