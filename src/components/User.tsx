type UserProps = {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
};

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return <div>User</div>;
};

export default User;
