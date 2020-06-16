import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Breadcrumb, Icon, Menu, Alert } from 'antd';
import { BreadcrumbWrapperStyle } from './ui-elements-styled';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink, HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
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

const Breadcrumbs = () => {
  const Apps = () => (
    <ul className="app-list">
      <li>
        <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
      </li>
      <li>
        <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
      </li>
    </ul>
  );

  const breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  };
  const Home = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
      <div className="demo">
        <div className="demo-nav">
          <Link to="/">Home</Link>
          <Link to="/apps">Application List</Link>
        </div>
        <Switch>
          <Route path="/apps" component={Apps} />
          <Route render={() => <span>Home Page</span>} />
        </Switch>
        <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </div>
    );
  });

  return (
    <Fragment>
      <PageHeader title="Breadcrumb" />
      <Main>
        <Row gutter={15}>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Basic">
              <BreadcrumbWrapperStyle>
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
              </BreadcrumbWrapperStyle>
            </Cards>

            <Cards title="Bread crumbs with drop down menu">
              <BreadcrumbWrapperStyle>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <NavLink to="#">Design</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Component</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item overlay={menu}>
                    <NavLink to="#">
                      <Icon type="user" />
                      <span>General</span>
                    </NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Button</Breadcrumb.Item>
                </Breadcrumb>
              </BreadcrumbWrapperStyle>
            </Cards>
            <Cards title="Other Router Integration">
              <BreadcrumbWrapperStyle>
                <Router>
                  <Home />
                </Router>
              </BreadcrumbWrapperStyle>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="With Icon">
              <BreadcrumbWrapperStyle>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application Center</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">
                      <span>Application List</span>
                    </NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
              </BreadcrumbWrapperStyle>
            </Cards>

            <Cards title="Configuring the Separator">
              <BreadcrumbWrapperStyle>
                <Breadcrumb separator=">">
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application Center</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application List</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
              </BreadcrumbWrapperStyle>
            </Cards>

            <Cards title="Configuring the Separator">
              <BreadcrumbWrapperStyle>
                <Breadcrumb separator="">
                  <Breadcrumb.Item>Location</Breadcrumb.Item>
                  <Breadcrumb.Separator>:</Breadcrumb.Separator>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application Center</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator />
                  <Breadcrumb.Item>
                    <NavLink to="#">Application List</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator />
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
              </BreadcrumbWrapperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Breadcrumbs;
