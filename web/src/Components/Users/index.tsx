import React, { FC } from 'react';

const Users: FC = () => {
  const handleSelectUser = (user: any) => {

  }
  return (
    <>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>Direct Messages</div>
      <div>
        <div onClick={() => handleSelectUser('')} className="link" style={{ padding: 5, cursor: 'pointer' }}>
          Tsiry Sandratraina
        </div>
        <div className="link" style={{ padding: 5, cursor: 'pointer' }}>
          Koto
        </div>
      </div>
    </>
  );
};

export default Users;
