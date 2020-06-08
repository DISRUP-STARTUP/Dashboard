import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Select, Radio } from 'antd';
import { Main } from '../styled';
import { SelectWrapperStyle } from './ui-elements-styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const { Option, OptGroup } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const Selects = () => {
  const [state, setState] = useState({
    selectedItems: [],
    size: 'default',
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  });

  const handleChange = selectedItems => {
    setState({ ...state, selectedItems });
  };

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const handleSizeChange = e => {
    setState({ ...state, size: e.target.value });
  };
  const { size, cities } = state;

  const { selectedItems } = state;
  const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

  const handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  const onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };

  return (
    <Fragment>
      <PageHeader ghost title="Select" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic">

              <SelectWrapperStyle>
                <Select defaultValue="lucy" style={{ width: 120, marginRight: "10px" }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120, marginRight: "10px" }} disabled>
                  <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120 }} loading>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </SelectWrapperStyle>
              
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Select Coordinate">
              <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                {provinceData.map(province => (
                  <Option key={province}>{province}</Option>
                ))}
              </Select>
              <Select style={{ width: 120 }} value={state.secondCity} onChange={onSecondCityChange}>
                {cities.map(city => (
                  <Option key={city}>{city}</Option>
                ))}
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Search and select">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Multiple select">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['jack', 'tom']}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Select Size">
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <br />
              <br />
              <Select size={size} defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
                {children}
              </Select>
              <br />
              <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {children}
              </Select>
              <br />
              <Select
                mode="tags"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {children}
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Tags select">
              <Select mode="tags" style={{ width: '100%' }} placeholder="Please select">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Custom">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={['china']}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <span role="img" aria-label="China">
                    🇨🇳
                  </span>
                  China
                </Option>
                <Option value="usa" label="USA">
                  <span role="img" aria-label="USA">
                    🇺🇸
                  </span>
                  USA
                </Option>
                <Option value="japan" label="Japan">
                  <span role="img" aria-label="Japan">
                    🇯🇵
                  </span>
                  Japan
                </Option>
                <Option value="korea" label="Korea">
                  <span role="img" aria-label="Korea">
                    🇰🇷
                  </span>
                  Korea
                </Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Custom">
              <Select defaultValue="lucy" style={{ width: 200 }}>
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                  <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Hide Already Selected">
              <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {filteredOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Automatic Completion">
              <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
                {children}
              </Select>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Selects;
