import { useState } from "react";

import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const loadUser = async function (userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    setUser(data);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User />}
      {error && <Error />}
    </div>
  );
};

export default Home;
