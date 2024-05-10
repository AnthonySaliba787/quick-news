import { FaNewspaper } from "react-icons/fa";

function Navbar({ active, setActive, setCategory }) {
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <>
      <nav className="w-full h-auto flex flex-col justify-center items-center mx-auto shadow-xl bg-red-700 text-center">
        <h1 className="text-2xl md:text-3xl text-white font-bold py-4">
          <span>
            <FaNewspaper size={40} className="w-full" />
          </span>
          Quick News
        </h1>
        <ul className="w-full flex flex-row flex-wrap justify-center items-center bg-black shadow-xl">
          {links.map((link) => (
            <li
              key={link.id}
              className={
                active === link.id
                  ? "text-base font-normal text-red-500 cursor-pointer p-2 duration-300 hover:text-red-700 border-b-2 border-red-500"
                  : "text-base font-normal text-white cursor-pointer p-2 hover:text-red-400 duration-300 border-b-2 border-transparent"
              }
              onClick={() => onClick(link.id, link.value)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
