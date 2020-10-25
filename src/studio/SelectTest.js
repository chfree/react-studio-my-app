import React from 'react';
import { Select, Divider, Input } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

// let index = 0;

class SelectTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sopen: false,
      items: ['jack', 'lucy'],
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { items, name } = this.state;
    return (
      <Select
      style={{ width: 240 }}
      placeholder="custom dropdown render"
      dropdownRender={menu => (
        <div>
          {menu}
          <Divider style={{ margin: '4px 0' }} />
          <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
            <Input style={{ flex: 'auto' }} value={name} />
          </div>
        </div>
      )}
    >
      {items.map(item => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
    );
  }
}

export default SelectTest