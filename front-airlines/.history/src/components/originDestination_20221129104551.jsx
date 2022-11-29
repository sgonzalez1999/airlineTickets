import * as React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import { Dropdown } from 'rsuite';

const originDestination = () => {
    return (
      <div
        style={{
          display: "block",
          width: 700,
          paddingLeft: 30,
        }}
      >
        <Dropdown
          open={open}
          trigger={<button onClick={handleOpen}>Dropdown</button>}
          menu={[
            <button onClick={handleMenuOne}>Menu 1</button>,
            <button onClick={handleMenuTwo}>Menu 2</button>,
          ]}
        />
        <Dropdown title="Origen">
          <Dropdown.Item>Madrid (MAD)</Dropdown.Item>
        </Dropdown>
      </div>
    );
}

export default originDestination;
