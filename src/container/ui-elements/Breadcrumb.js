import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Breadcrumb, Icon, Menu } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);
const Breadcrumbs = props => {
  return (
    <Fragment>
      <PageHeader title="Breadcrumb" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="#">Application Center</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="#">Application List</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="With Icon" caption="The simplest use with Icon">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="#">Application Center</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="#">
                    <Icon type="user" />
                    <span>Application List</span>
                  </NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="With dropdown" caption="The simplest use with dropdown">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="#">Application Center</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item overlay={menu}>
                  <NavLink to="#">
                    <Icon type="user" />
                    <span>Application List</span>
                  </NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Breadcrumbs;
