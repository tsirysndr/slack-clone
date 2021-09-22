import React, { FC } from 'react';

const MessageView: FC = () => {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          fontSize: 20,
          padding: 20,
          borderBottom: '1px solid #0000001c',
        }}
      >
        <div style={{ flex: 1, fontWeight: 'bold' }}># aléatoire</div>
        <div
          className="button"
          style={{ fontWeight: 500, paddingRight: 10, cursor: 'pointer' }}
        >
          Logout
        </div>
      </div>
      <div
        style={{
          overflowY: 'scroll',
          height: 'calc(100vh - (66px + 56px + 25px))',
        }}
      >
        <div style={{ padding: 15 }}>
          <div style={{ fontWeight: 'bold' }}>Tsiry Sandratraina</div>
          <div style={{ padding: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div style={{ padding: 15, fontWeight: 500 }}>
          <div style={{ fontWeight: 'bold' }}>Koto</div>
          <div style={{ padding: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            style={{
              fontSize: 18,
              paddingLeft: 25,
              paddingRight: 25,
              height: 50,
              width: '90%',
              marginLeft: 10,
              marginRight: 10,
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
