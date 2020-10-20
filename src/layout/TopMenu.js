import React, { useLayoutEffect } from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { TopMenuStyle } from './style';

const TopMenu = () => {
  const { path } = useRouteMatch();

  useLayoutEffect(() => {
    const active = document.querySelector('.strikingDash-top-menu a.active');
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper');
      const hasSubMenuLeft = active.closest('.has-subMenu-left');
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active');
        hasSubMenuLeft && hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
      }
      // active.closest('ul').previousSibling.classList.add('active');
    };
    window.addEventListener('load', active && activeDefault);
    return () => window.removeEventListener('load', activeDefault);
  }, []);

  const addParentActive = event => {
    document.querySelectorAll('.parent').forEach(element => {
      element.classList.remove('active');
    });

    const hasSubMenuLeft = event.currentTarget.closest('.has-subMenu-left');
    const megaMenu = event.currentTarget.closest('.megaMenu-wrapper');
    if (!megaMenu) {
      event.currentTarget.closest('ul').previousSibling.classList.add('active');
      if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
    } else {
      event.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
    }
  };
  return (
    <TopMenuStyle>
      <div className="strikingDash-top-menu">
        <ul>
          <li className="has-subMenu">
            <Link className="parent">Dashboard</Link>
            <ul className="subMenu">
              <li>
                <NavLink to={`${path}/social`} onClick={addParentActive}>
                  Social Media
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/business`} onClick={addParentActive}>
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/performance`} onClick={addParentActive}>
                  Site Perfomence
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/eco`} onClick={addParentActive}>
                  Ecomerce
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-subMenu">
            <Link className="parent">Firestore Crud</Link>
            <ul className="subMenu">
              <li>
                <NavLink onClick={addParentActive} to={`${path}/firestore/fbView`}>
                  View all
                </NavLink>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/firestore/fbAdd`}>
                  Add new
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-subMenu">
            <Link className="parent">Apps</Link>
            <ul className="subMenu">
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/calendar/year`}>
                  <FeatherIcon icon="calendar" />
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/main/chat/private/rofiq@gmail.com`}>
                  <FeatherIcon icon="message-square" />
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/contact`}>
                  <FeatherIcon icon="user-check" />
                  Contact
                </NavLink>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">
                  <FeatherIcon icon="shopping-cart" />
                  eComerce
                </Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/products`}>
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/productDetails/1`}>
                      Products Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/add-product`}>
                      Product Add
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/edit-product`}>
                      Product Edit
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/cart`}>
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/orders`}>
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/sellers`}>
                      Sellers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/Invoice`}>
                      Invoices
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">
                  <FeatherIcon icon="mail" />
                  Email
                </Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/email/inbox`}>
                      Inbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/email/single/1585118055048`}>
                      Read Email
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/note/all`}>
                  <FeatherIcon icon="bookmark" />
                  Note
                </NavLink>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">
                  <FeatherIcon icon="user" />
                  Social App
                </Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/profile/myProfile/overview`}>
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/profile/settings`}>
                      Settings
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/to-do/`}>
                  <FeatherIcon icon="activity" />
                  To Do
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="mega-item has-subMenu">
            <Link className="parent">Pages</Link>
            <ul className="megaMenu-wrapper megaMenu-small">
              <li>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/project/view`}>
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/project/create`}>
                      Project Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/project/projectDetails/1`}>
                      Create Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/team`}>
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/users`}>
                      User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/add-user/info`}>
                      Add User
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/dataTable`}>
                      User Table
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/gallery`}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/pricing`}>
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/faq`}>
                      Faqs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/search`}>
                      Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/maintenance`}>
                      Maintenance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/pages/404`}>
                      404
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mega-item has-subMenu">
            <Link className="parent">Components</Link>
            <ul className="megaMenu-wrapper megaMenu-wide">
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Alert
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/auto-complete`}>
                      AutoComplete
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/avatar`}>
                      Avatar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/badge`}>
                      Badge
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/breadcrumb`}>
                      Breadcrumb
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/button`}>
                      Buttons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/calendar`}>
                      Calendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/cards`}>
                      Card
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/carousel`}>
                      Carousel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/cascader`}>
                      Cascader
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/checkbox`}>
                      Checkbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/collapse`}>
                      Collapse
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/comments`}>
                      Comments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/base`}>
                      Dashboard Base
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/date-picker`}>
                      DataPicker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/drag`}>
                      Drag & Drop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/drawer`}>
                      Drawer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/dropdown`}>
                      Dropdown
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/empty`}>
                      Empty
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/form`}>
                      Form
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/grid`}>
                      Grid
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/input`}>
                      Input
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/list`}>
                      List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/menu`}>
                      Menu
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/message`}>
                      Message
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/modals`}>
                      Modals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/notification`}>
                      Notifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/page-headers`}>
                      Page Headers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/pagination`}>
                      Pagination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/confirm`}>
                      PopConfirm
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/popover`}>
                      PopOver
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/progress`}>
                      Progress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/radio`}>
                      Radio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/rate`}>
                      Rate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/result`}>
                      Result
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/select`}>
                      Select
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/skeleton`}>
                      Skeleton
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/slider`}>
                      Slider
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/spiner`}>
                      Spiner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/statistic`}>
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/steps`}>
                      Steps
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/switch`}>
                      Switch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/tabs`}>
                      Tabs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/tags`}>
                      Tags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/timeline`}>
                      Timeline
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/timepicker`}>
                      TimePicker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/tree-select`}>
                      Tree Select
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/upload`}>
                      Upload
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-subMenu">
            <Link className="parent">Features</Link>
            <ul className="subMenu">
              <li className="has-subMenu-left">
                <Link className="parent">
                  <FeatherIcon icon="grid" />
                  Icons
                </Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/icons/feathers`}>
                      Feather Icons(svg)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/icons/font-awesome`}>
                      Font Awesome
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/icons/antd`}>
                      Ant Design Icons
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">
                  <FeatherIcon icon="bar-chart-2" />
                  Charts
                </Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/charts/chartjs`}>
                      Chart Js
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/charts/google-chart`}>Google Chart</NavLink>
                  </li>
                  <li className="has-subMenu-left">
                    <Link>Rechart</Link>
                    <ul className="subMenu">
                      <li>
                        <NavLink to={`${path}/charts/recharts/bar`}>Bar Chart</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/area`}>Area Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/composed`}>Composed Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/line`}>Line Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/pie`}>Pie Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/radar`}>Radar Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/radial`}>Radial Charts</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to={`${path}/charts/peity`}>Peity Chart</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={`${path}/tables`}>
                  <FeatherIcon icon="cpu" />
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/forms`}>
                  <FeatherIcon icon="disc" />
                  Form
                </NavLink>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">
                  <FeatherIcon icon="map" />
                  Maps
                </Link>
                <ul className="subMenu">
                  <li>
                    <NavLink to={`${path}/maps/google`}>Google Maps</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/maps/leaflet`}>Leaflet Maps</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/maps/Vector`}>Vector Maps</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </TopMenuStyle>
  );
};

export default TopMenu;
