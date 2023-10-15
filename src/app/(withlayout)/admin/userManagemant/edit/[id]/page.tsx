import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserEditPage = (props: Props) => {
  const { id } = props.params;
  return (
    <div>
      <h1>User Edit Page {id}</h1>
    </div>
  );
};

export default UserEditPage;
