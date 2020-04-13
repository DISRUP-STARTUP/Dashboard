import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import Heading from '../../components/heading/heading';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Cards } from '../../components/cards/frame/cards-frame';

const SearchResult = ({ searchData }) => {
  const [state, setState] = useState({
    notdata: searchData,
  });
  const { notdata } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const handleChange = e => {
    e.preventDefault();
    e.target
      .closest('ul')
      .querySelector('a.active')
      .classList.remove('active');
    e.target.classList.add('active');
  };
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    console.log(current, pageSize);
  };
  return (
    <Fragment>
      <PageHeader ghost title="Search Result" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <AutoComplete onSearch={handleSearch} dataSource={notdata} width="40%" patterns />
          </Col>
          <Col md={24}>
            <ul>
              <li>
                <Link className="active" onClick={handleChange} data-filter="" to="#">
                  All
                </Link>
              </li>
              <li>
                <Link onClick={handleChange} data-filter="webDesign" to="#">
                  Web Design
                </Link>
              </li>
              <li>
                <Link onClick={handleChange} data-filter="uiDesign" to="#">
                  UI Design
                </Link>
              </li>
              <li>
                <Link onClick={handleChange} data-filter="wireframe" to="#">
                  Wireframe
                </Link>
              </li>
              <li>
                <Link onClick={handleChange} data-filter="Presentation" to="#">
                  Presentation
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={24}>
            <Cards headless>
              <Row>
                <Col md={12}>
                  <Heading as="h6">207 results found for “Keyword”</Heading>
                </Col>
                <Col md={12}>
                  <p>Showing 1-10 of 76 results</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={24}>
                  <nav>
                    <ul>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                      <li>
                        <Heading as="h6">Keyword installing lorem multi vendor marketplace</Heading>
                        <p>
                          Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed
                          diam nonumy eirmod...
                        </p>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
              <hr />
              <Pagination
                onChange={onHandleChange}
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                pageSize={10}
                defaultCurrent={1}
                total={40}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    //galleryFilter: (column, value) => dispatch(galleryFilter(column, value)),
  };
};
const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
