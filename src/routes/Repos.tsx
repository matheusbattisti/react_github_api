import { RepoProps } from "../types/repo";

import Repo from "../components/Repo";
import BackBtn from "../components/BackBtn";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  useEffect(() => {
    const loadrepos = async function (username: string) {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      const orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      setRepos(orderedRepos);
    };

    if (username) {
      loadrepos(username);
    }
  }, []);

  if (!repos) return <p>Carregando...</p>;

  return (
    <div>
      <BackBtn />
      {repos.length === 0 && <p>Não há repositórios.</p>}
      {repos.map((repo: RepoProps) => (
        <Repo {...repo} />
      ))}
    </div>
  );
};

export default Repos;
