type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite o nome do usuário"
      />
      <button onClick={() => loadUser(userName)}>
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
