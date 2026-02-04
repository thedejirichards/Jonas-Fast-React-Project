import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-24 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 sm:focus:w-72 transition-all duration-300 focus:ring focus:ring-yellow-200 focus:outline-none sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
