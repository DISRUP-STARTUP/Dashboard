import React, { useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { useSelector } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import Heading from '../../components/heading/heading';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Cards } from '../../components/cards/frame/cards-frame';
import { SearchResultWrapper, ResultList } from './style';

const SearchResult = () => {
  const searchData = useSelector(state => state.headerSearchData);
  const [state, setState] = useState({
    notdata: searchData,
    activeClass: 'all',
  });
  const { notdata } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const handleChange = value => {
    setState({
      ...state,
      activeClass: value,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    console.log(current, pageSize);
  };

  return (
    <>
      <PageHeader ghost title="Search Result" />
      <Main>
        <SearchResultWrapper>
          <Row gutter={25}>
            <Col xs={24}>
              <AutoComplete onSearch={handleSearch} dataSource={notdata} width="40%" patterns />
            </Col>
            <Col xs={24}>
              <div className="search-filter-menu">
                <ul>
                  <li>
                    <Link
                      className={state.activeClass === 'all' && 'active'}
                      onClick={() => handleChange('all')}
                      to="#"
                    >
                      All
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={state.activeClass === 'webDesign' && 'active'}
                      onClick={() => handleChange('webDesign')}
                      to="#"
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={state.activeClass === 'uiDesign' && 'active'}
                      onClick={() => handleChange('uiDesign')}
                      to="#"
                    >
                      UI Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={state.activeClass === 'wireframe' && 'active'}
                      onClick={() => handleChange('wireframe')}
                      to="#"
                    >
                      Wireframe
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={state.activeClass === 'presentation' && 'active'}
                      onClick={() => handleChange('presentation')}
                      to="#"
                    >
                      Presentation
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24}>
              <ResultList>
                <Cards headless>
                  <div className="result-list-top">
                    <Row>
                      <Col md={12} xs={24}>
                        <p className="search-found-text">
                          <span className="result-count">207</span>
                          results found for
                          <span className="result-keyword">“Keyword”</span>
                        </p>
                      </Col>
                      <Col md={12} xs={24}>
                        <p className="result-limit">Showing 1-10 of 76 results</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="result-list-content">
                    <Row>
                      <Col md={24}>
                        <nav>
                          <ul>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                            <li>
                              <Heading className="result-list-title" as="h6">
                                <span className="search-keyword">Keyword</span> installing lorem multi vendor
                                marketplace
                              </Heading>
                              <p>
                                Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
                                elitr, sed diam nonumy eirmod...
                              </p>
                            </li>
                          </ul>
                        </nav>
                      </Col>
                    </Row>
                  </div>
                  <Pagination
                    onChange={onHandleChange}
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    pageSize={10}
                    defaultCurrent={1}
                    total={40}
                  />
                </Cards>
              </ResultList>
            </Col>
          </Row>
        </SearchResultWrapper>
      </Main>
    </>
  );
};

export default SearchResult;
