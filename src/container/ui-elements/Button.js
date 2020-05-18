import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';
import { Dropdown } from '../../components/dropdown/dropdown';

const Buttons = () => {
  return (
    <Cards headless>
      <PageHeader title="Button" />
      <Main className="button-example">
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic" size="large">
              <Button type="primary">Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="success">Success</Button>
              <Button type="info">Info</Button>
              <Button type="warning">Warning</Button>
              <Button type="danger">Danger</Button>
              <Button type="link">Link</Button>
              <Button type="dark">Dark</Button>
              <Button type="light">Light</Button>
              <Button type="white">White</Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Outline" size="large">
              <Button outlined type="primary">
                Primary
              </Button>
              <Button outlined type="secondary">
                Secondary
              </Button>
              <Button outlined type="success">
                Success
              </Button>
              <Button outlined type="info">
                Info
              </Button>
              <Button outlined type="warning">
                Warning
              </Button>
              <Button outlined type="danger">
                Danger
              </Button>
              <Button outlined type="dark">
                Dark
              </Button>
              <Button outlined type="light">
                Light
              </Button>
              <Button outlined type="dashed">
                Dashed
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Light Color" size="large">
              <Button lightColored type="primary">
                Primary
              </Button>
              <Button lightColored type="secondary">
                Secondary
              </Button>
              <Button lightColored type="success">
                Success
              </Button>
              <Button lightColored type="info">
                Info
              </Button>
              <Button lightColored type="warning">
                Warning
              </Button>
              <Button lightColored type="danger">
                Danger
              </Button>
              <Button lightColored type="dark">
                Dark
              </Button>
              <Button lightColored type="light">
                Light
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Raised" size="large">
              <Button raised type="primary">
                Primary
              </Button>
              <Button raised type="secondary">
                Secondary
              </Button>
              <Button raised type="success">
                Success
              </Button>
              <Button raised type="info">
                Info
              </Button>
              <Button raised type="warning">
                Warning
              </Button>
              <Button raised type="danger">
                Danger
              </Button>
              <Button raised type="dark">
                Dark
              </Button>
              <Button raised type="white">
                White
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Rounded" size="large">
              <Button shape="circle" type="primary">
                Primary
              </Button>
              <Button shape="circle" type="secondary">
                Secondary
              </Button>
              <Button shape="circle" type="success">
                Success
              </Button>
              <Button shape="circle" type="info">
                Info
              </Button>
              <Button shape="circle" type="warning">
                Warning
              </Button>
              <Button shape="circle" type="danger">
                Danger
              </Button>
              <Button shape="circle" type="dark">
                Dark
              </Button>
              <Button shape="circle" type="light">
                Light
              </Button>
              <Button shape="circle" type="white">
                White
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Rounded Outline" size="large">
              <Button outlined shape="circle" type="primary">
                Primary
              </Button>
              <Button outlined shape="circle" type="secondary">
                Secondary
              </Button>
              <Button outlined shape="circle" type="success">
                Success
              </Button>
              <Button outlined shape="circle" type="info">
                Info
              </Button>
              <Button outlined shape="circle" type="warning">
                Warning
              </Button>
              <Button outlined shape="circle" type="danger">
                Danger
              </Button>
              <Button outlined shape="circle" type="dark">
                Dark
              </Button>
              <Button outlined shape="circle" type="light">
                Light
              </Button>
              <Button outlined shape="circle" type="white">
                White
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards headless title="Square Buttons" size="large" caption="Buttons without border radius.">
              <Button squared type="primary">
                Primary
              </Button>
              <Button squared type="secondary">
                Secondary
              </Button>
              <Button squared type="success">
                Success
              </Button>
              <Button squared type="error">
                Error
              </Button>
              <Button squared type="warning">
                Warning
              </Button>
              <Button squared type="default">
                Default
              </Button>
              <Button squared type="info">
                Info
              </Button>
              <Button squared type="link">
                Link
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Square Outline Buttons" size="large" caption="Buttons without border radius.">
              <Button squared outlined type="primary">
                Primary
              </Button>
              <Button squared outlined type="secondary">
                Secondary
              </Button>
              <Button squared outlined type="success">
                Success
              </Button>
              <Button squared outlined type="error">
                Error
              </Button>
              <Button squared outlined type="warning">
                Warning
              </Button>
              <Button squared outlined type="default">
                Default
              </Button>
              <Button squared outlined type="info">
                Info
              </Button>
              <Button squared outlined type="link">
                Link
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Icon Buttons" size="large" caption="Default Antd buttons style with icon.">
              <Button icon="smile" type="primary">
                Primary
              </Button>
              <Button icon="global" type="secondary">
                Secondary
              </Button>
              <Button icon="check" type="success">
                Success
              </Button>
              <Button icon="warning" type="warning">
                Warning
              </Button>
              <Button icon="info" type="info">
                Info
              </Button>
              <Button icon="link" type="link">
                Link
              </Button>
              <Button type="primary">
                <Icon type="smile" />
              </Button>
              <Button type="secondary">
                <Icon type="global" />
              </Button>
              <Button type="success">
                <Icon type="check" />
              </Button>
              <Button type="warning">
                <Icon type="warning" />
              </Button>
              <Button type="info">
                <Icon type="info" />
              </Button>
              <Button type="link">
                <Icon type="link" />
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Icon Buttons" size="large" caption="Default Antd buttons style with icon.">
              <Button social color="#2366B8">
                <FeatherIcon size={16} icon="facebook" />
                Facebook
              </Button>
              <Button social color="#00ABE4">
                <FeatherIcon size={16} icon="twitter" />
                Twitter
              </Button>
              <Button social color="#9D2E98">
                <FeatherIcon size={16} icon="instagram" />
                Instagram
              </Button>
              <Button social color="#E32212">
                <FeatherIcon size={16} icon="youtube" />
                Youtube
              </Button>
              <Button social color="#007CBC">
                <FeatherIcon size={16} icon="linkedin" />
                Linkedin
              </Button>
              <Button social color="#ED553B">
                <FeatherIcon size={16} icon="rss" />
                Feed
              </Button>
              <Button social color="#2366B8">
                <FeatherIcon size={16} icon="facebook" />
              </Button>
              <Button social color="#00ABE4">
                <FeatherIcon size={16} icon="twitter" />
              </Button>
              <Button social color="#9D2E98">
                <FeatherIcon size={16} icon="instagram" />
              </Button>
              <Button social color="#E32212">
                <FeatherIcon size={16} icon="youtube" />
              </Button>
              <Button social color="#007CBC">
                <FeatherIcon size={16} icon="linkedin" />
              </Button>
              <Button social color="#ED553B">
                <FeatherIcon size={16} icon="rss" />
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Button Sizes" size="large" caption="Fancy larger or smaller buttons.">
              <Row>
                <Button size="small" type="primary">
                  Small
                </Button>
                <Button size="default" type="primary">
                  Medium
                </Button>
                <Button size="large" type="primary">
                  Large
                </Button>
              </Row>
              <Row>
                <Button icon="smile" size="small" type="primary">
                  Small
                </Button>
                <Button icon="smile" size="default" type="primary">
                  Medium
                </Button>
                <Button icon="smile" size="large" type="primary">
                  Large
                </Button>
              </Row>
              <p>Loading button</p>
              <Row>
                <Button load size="large" type="primary">
                  Loading
                </Button>
                <Button load size="large" type="primary">
                  Click
                </Button>
              </Row>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Button Group" size="large" caption="Fancy larger or smaller buttons.">
              <Row>
                <BtnGroup>
                  <Button size="small" type="primary">
                    Left
                  </Button>
                  <Button size="small" type="primary">
                    Middle
                  </Button>
                  <Button size="small" type="primary">
                    Right
                  </Button>
                </BtnGroup>
              </Row>

              <Row>
                <BtnGroup>
                  <Button type="secondary">Left</Button>
                  <Button type="secondary">Middle</Button>
                  <Button type="secondary">Right</Button>
                </BtnGroup>
              </Row>
              <Row>
                <BtnGroup>
                  <Button outlined size="large" type="primary">
                    Left
                  </Button>
                  <Button outlined size="large" type="primary">
                    Middle
                  </Button>
                  <Button outlined size="large" type="primary">
                    Right
                  </Button>
                </BtnGroup>
              </Row>
              <p>Button toolbar</p>
              <BtnGroup>
                <Button type="primary">1</Button>
                <Button type="primary">2</Button>
                <Button type="primary">3</Button>
                <Button type="primary">4</Button>
                <Button type="primary">5</Button>
              </BtnGroup>
              <BtnGroup>
                <Button type="primary">6</Button>
                <Button type="primary">7</Button>
                <Button type="primary">8</Button>
              </BtnGroup>
              <BtnGroup>
                <Button type="primary">9</Button>
              </BtnGroup>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Button Popover" size="large" caption="Dropdowns styles with buttons.">
              <Popover placement="bottomLeft" action="click">
                <Button type="primary">
                  Primary
                  <Icon type="down" />
                </Button>
              </Popover>
              <Popover placement="bottomRight" title="with title">
                <Button type="secondary">
                  Secondary
                  <Icon type="down" />
                </Button>
              </Popover>

              <Popover placement="topLeft">
                <Button type="error">
                  Error
                  <Icon type="down" />
                </Button>
              </Popover>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Button Dropdown" size="large" caption="Dropdowns styles with buttons.">
              <Dropdown placement="bottomLeft" action={['click']}>
                <Button type="primary">
                  Primary
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomRight" title="with title">
                <Button type="secondary">
                  Secondary
                  <Icon type="down" />
                </Button>
              </Dropdown>

              <Dropdown placement="topLeft">
                <Button type="error">
                  Error
                  <Icon type="down" />
                </Button>
              </Dropdown>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Cards>
  );
};

export default Buttons;
