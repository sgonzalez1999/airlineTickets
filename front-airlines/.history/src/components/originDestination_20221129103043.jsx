import React from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const originDestination = () => {
    return (
        <div style={{
            display: 'block', width: 700, paddingLeft: 30
          }}>
            <Dropdown title="Origen">
              <Dropdown.Item>Madrid (MAD)</Dropdown.Item>
            </Dropdown>
          </div>
    );
}

export default originDestination;
