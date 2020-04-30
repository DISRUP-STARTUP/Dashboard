import React from 'react';
import { Icon, Input, Row, Col } from 'antd';
import { Div } from './header-search-style';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { headerSearchAction } from '../../redux/headerSearch/actionCreator';
import PropTypes from 'prop-types';
import { Popover } from '../popup/popup';

const HeaderSearch = props => {
  const { searchData, headerSearch } = props;

  const search = e => {
    headerSearch(e.target.value);
  };

  const content = (
    <div>
      {searchData.length ? (
        searchData.map(group => {
          const { title, count, id } = group;
          return (
            <NavLink key={id} to="#">
              {title}
              <span className="certain-search-item-count">{count} people</span>
            </NavLink>
          );
        })
      ) : (
        <NavLink to="#">Data Not found....</NavLink>
      )}
    </div>
  );
  return (
    <Div className="certain-category-search-wrapper" style={{ width: '100%' }}>
      <Row>
        <Col xs={2}>
          <Icon type="search" className="certain-category-icon" />
        </Col>
        <Col xs={22}>
          <Popover placement="bottomLeft" content={content} title="Search List" trigger="focus">
            <Input placeholder="Search..." onInput={search} />
          </Popover>
        </Col>
      </Row>
    </Div>
  );
};
HeaderSearch.propTypes = {
  searchData: PropTypes.array,
  headerSearch: PropTypes.func,
};
const mapDispatchToProps = dispatch => {
  return {
    headerSearch: value => dispatch(headerSearchAction(value)),
  };
};
const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
