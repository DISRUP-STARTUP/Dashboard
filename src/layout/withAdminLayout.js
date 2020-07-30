import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { ThemeProvider } from 'styled-components';
import MenueItems from './sidebar/MenueItems';
import { Div, SmallScreenAuthInfo, SmallScreenSearch } from './style';
import HeaderSearch from '../components/header-search/header-search';
import AuthInfo from '../components/utilities/auth-info/info';
import config from '../config/config';

const { darkTheme } = require('../config/theme/themeVariables');

const { Header, Footer, Sider, Content } = Layout;
const { darkMode } = config;

const footerStyle = {
  padding: '20px 30px',
  color: 'rgba(0, 0, 0, 0.65)',
  fontSize: '14px',
  background: 'rgba(255, 255, 255, .90)',
  width: '100%',
  boxShadow: '0 -5px 10px rgba(146,153,184, 0.05)',
};

const SideBarStyle = {
  margin: '64px 0 0 0',
  padding: '15px 15px 55px 15px',
  overflowY: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  zIndex: 9999,
};

const ThemeLayout = WrappedComponent => {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        hide: true,
        searchHide: true,
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
      this.setState({
        collapsed: window.innerWidth <= 1200 && true,
      });
    }

    renderThumb = ({ style, ...props }) => {
      const thumbStyle = {
        borderRadius: 6,
        backgroundColor: darkMode ? '#ffffff16' : '#F1F2F6',
      };
      return <div style={{ ...style, ...thumbStyle }} props={props} />;
    };

    render() {
      const { collapsed, hide, searchHide } = this.state;

      const toggleCollapsed = () => {
        this.setState({
          collapsed: !collapsed,
        });
      };

      const onShowHide = () => {
        this.setState({
          hide: !hide,
          searchHide: true,
        });
      };

      const handleSearchHide = e => {
        e.preventDefault();
        this.setState({
          searchHide: !searchHide,
          hide: true,
        });
      };

      return (
        <Div darkMode={darkMode}>
          <Layout>
            <Header
              style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
              }}
            >
              <Row>
                <Col md={4} sm={5} xs={12} className="align-center-v navbar-brand">
                  <Button type="link" style={{ marginTop: 0 }} onClick={toggleCollapsed}>
                    <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                  </Button>
                  <NavLink to="/">
                    <img src={require(`../static/img/logo.png`)} alt="" />
                  </NavLink>
                </Col>

                <Col md={6} sm={0} xs={0}>
                  <HeaderSearch />
                </Col>

                <Col md={14} sm={0} xs={0}>
                  <AuthInfo />
                </Col>

                <Col md={0} sm={19} xs={12}>
                  <>
                    <div className="mobile-action">
                      <Link className="btn-search" onClick={handleSearchHide} to="#">
                        {searchHide ? <FeatherIcon icon="search" /> : <FeatherIcon icon="x" />}
                      </Link>
                      <Link className="btn-auth" onClick={onShowHide} to="#">
                        <FeatherIcon icon="more-vertical" />
                      </Link>
                    </div>
                  </>
                </Col>
                <Col md={0} sm={24} xs={24}>
                  <div className="small-screen-headerRight">
                    <SmallScreenSearch hide={searchHide} darkMode={darkMode}>
                      <HeaderSearch />
                    </SmallScreenSearch>
                    <SmallScreenAuthInfo hide={hide} darkMode={darkMode}>
                      <AuthInfo />
                    </SmallScreenAuthInfo>
                  </div>
                </Col>
              </Row>
            </Header>

            <Layout>
              <ThemeProvider theme={darkTheme}>
                <Sider width={280} style={SideBarStyle} collapsed={collapsed} theme={!darkMode ? 'light' : 'dark'}>
                  <Scrollbars
                    className="custom-scrollbar"
                    autoHide
                    autoHideTimeout={500}
                    autoHideDuration={200}
                    renderThumbHorizontal={this.renderThumb}
                    renderThumbVertical={this.renderThumb}
                  >
                    <p className="sidebar-nav-title">MAIN MENU</p>
                    <MenueItems darkMode={darkMode} />
                  </Scrollbars>
                </Sider>
              </ThemeProvider>
              <Layout className="atbd-main-layout">
                <Content>
                  <WrappedComponent />
                  <Footer class="admin-footer" style={footerStyle}>
                    <Row>
                      <Col md={12} xs={24}>
                        <span className="admin-footer__copyright">2020 © AazzTech</span>
                      </Col>
                      <Col md={12} xs={24}>
                        <div className="admin-footer__links">
                          <NavLink to="#">About</NavLink>
                          <NavLink to="#">Team</NavLink>
                          <NavLink to="#">Contact</NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Footer>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Div>
      );
    }
  }

  return LayoutComponent;
};
export default ThemeLayout;
