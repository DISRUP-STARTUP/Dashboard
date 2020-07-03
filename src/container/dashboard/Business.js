import React, { Fragment } from 'react';
import { Row, Col, Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { Focard, CardBarChart, Exlist, RatioCard, IncomeExpenseWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const content = (
  <>
    <NavLink to="#">
      <span>More one</span>
    </NavLink>
    <NavLink to="#">
      <span>More two</span>
    </NavLink>
    <NavLink to="#">
      <span>More three</span>
    </NavLink>
  </>
);

const options = {
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: true,
        },
        ticks: {
          display: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        barPercentage: 1,
        gridLines: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
};

/**
 * @todo Direct dom manupulation discouraged
 */
const handleActiveChange = e => {
  const link = e.currentTarget;
  link
    .closest('ul')
    .querySelectorAll('li')
    .forEach(li => {
      li.classList.remove('active');
    });

  link.closest('li').classList.add('active');
};

const Business = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Finance Dashboard"
        buttons={[
          <div className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <Row gutter={25}>
              <Col md={12}>
                <Focard>
                  <div className="forcast-card-box">
                    <Cards headless title="Profit">
                      <div className="focard-details growth-downward">
                        <Heading as="h1">$25,872</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="arrow-down" /> 25%
                          </span>
                          <span>Since last month</span>
                        </p>
                      </div>
                      <ChartjsAreaChart
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                        datasets={[
                          {
                            data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                            borderColor: '#5F63F2',
                            borderWidth: 3,
                            fill: true,
                            backgroundColor: '#5F63F230',
                          },
                        ]}
                        height={80}
                      />
                    </Cards>
                  </div>
                </Focard>
              </Col>
              <Col md={12}>
                <Focard>
                  <div className="forcast-card-box">
                    <Cards headless title="Gross Profit">
                      <div className="focard-details growth-upward">
                        <Heading as="h1">$25,872</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="arrow-up" /> 25%
                          </span>
                          <span>Since last month</span>
                        </p>
                      </div>
                      <ChartjsAreaChart
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                        datasets={[
                          {
                            data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                            borderColor: '#20C997',
                            borderWidth: 3,
                            fill: true,
                            backgroundColor: '#20C99730',
                          },
                        ]}
                        height={80}
                      />
                    </Cards>
                  </div>
                </Focard>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <RatioCard>
                  <Cards headless title="Quick Ratio">
                    <div className="ratio-content">
                      <Heading as="h1">1.8</Heading>
                      <Progress percent={80} status="success" />
                      <p>
                        <strong>1 or higher</strong> quick ratio target
                      </p>
                    </div>
                  </Cards>
                </RatioCard>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <RatioCard>
                  <Cards headless title="Current Ratio">
                    <div className="ratio-content">
                      <Heading as="h1">2.4</Heading>
                      <Progress percent={72} status="warning" />
                      <p>
                        <strong>3 or higher</strong> current ratio target
                      </p>
                    </div>
                  </Cards>
                </RatioCard>
              </Col>
            </Row>
          </Col>
          <Col xxl={12} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Week
                      </Link>
                    </li>
                    <li className="active">
                      <Link onClick={handleActiveChange} to="#">
                        Month
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title={
                <div>
                  Cash Flow <span>Nov 23, 2019 - Nov 29, 2019</span>
                </div>
              }
              size="large"
              more={content}
            >
              <CardBarChart>
                <div className="card-bar-top d-flex flex-grid">
                  <div className="flex-grid-child">
                    <p>Current Balance</p>
                    <Heading as="h3" className="color-primary">
                      $25,472
                    </Heading>
                  </div>
                  <div className="flex-grid-child">
                    <p>Cash In</p>
                    <Heading as="h3">$35,414</Heading>
                  </div>
                  <div className="flex-grid-child">
                    <p>Cash Out</p>
                    <Heading as="h3">$45,798</Heading>
                  </div>
                </div>
                <ChartjsBarChartTransparent
                  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  datasets={[
                    {
                      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                      backgroundColor: '#20C99750',
                      hoverBackgroundColor: '#20C997',
                      label: 'Cash in',
                    },
                    {
                      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                      backgroundColor: '#FF4D4F50',
                      hoverBackgroundColor: '#FF4D4F',
                      label: 'Cash out',
                    },
                  ]}
                  height={126}
                />
              </CardBarChart>
            </Cards>
          </Col>
          <Col md={24}>
            <IncomeExpenseWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Week
                        </Link>
                      </li>
                      <li className="active">
                        <Link onClick={handleActiveChange} to="#">
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title={
                  <div>
                    Income And Expenses <span>Nov 23, 2019 - Nov 29, 2019</span>
                  </div>
                }
                size="large"
                more={content}
              >
                <Row gutter="25">
                  <Col xxl={6} sm={24}>
                    <Exlist>
                      <div>
                        <p>Total income</p>
                        <Heading as="h1">
                          <span>$952,784</span>
                          <sub>
                            <span>
                              <FeatherIcon icon="arrow-up" /> 37%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                      <div>
                        <p>Total expenses</p>
                        <Heading as="h1">
                          <span>$274,784</span>
                          <sub className="growth-downward">
                            <span>
                              <FeatherIcon icon="arrow-down" /> 25%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                      <div>
                        <p>Cost of goods sold</p>
                        <Heading as="h1">
                          <span>$532,784</span>
                          <sub>
                            <span>
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                      <div>
                        <p>Net profit</p>
                        <Heading as="h1">
                          <span>$252,727</span>
                          <sub>
                            <span>
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                    </Exlist>
                  </Col>
                  <Col xxl={18} sm={24}>
                    <ChartjsBarChartTransparent
                      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                      datasets={[
                        {
                          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                          backgroundColor: '#5F63F240',
                          hoverBackgroundColor: '#5F63F2',
                          label: 'Total Income',
                        },
                        {
                          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                          backgroundColor: '#FF69A540',
                          hoverBackgroundColor: '#FF69A5',
                          label: 'Cost of goods sold',
                        },
                        {
                          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                          backgroundColor: '#FA8B0C40',
                          hoverBackgroundColor: '#FA8B0C',
                          label: 'Total expenses',
                        },
                        {
                          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                          backgroundColor: '#20C99740',
                          hoverBackgroundColor: '#20C997',
                          label: 'Net profit',
                        },
                      ]}
                      height={100}
                      options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        legend: {
                          display: true,
                          position: 'bottom',
                          labels: {
                            boxWidth: 6,
                            display: true,
                            usePointStyle: true,
                          },
                        },
                        layout: {
                          padding: {
                            left: '0',
                            right: 0,
                            top: 0,
                            bottom: '0',
                          },
                        },
                        scales: {
                          yAxes: [
                            {
                              gridLines: {
                                color: '#e5e9f2',
                              },
                              ticks: {
                                beginAtZero: true,
                                fontSize: 10,
                                fontColor: '#182b49',
                                max: 80,
                                stepSize: 20,
                                callback(label, index, labels) {
                                  return `${label}k`;
                                },
                              },
                            },
                          ],
                          xAxes: [
                            {
                              gridLines: {
                                display: false,
                              },
                              barPercentage: 0.6,
                              ticks: {
                                beginAtZero: true,
                                fontSize: 11,
                                fontColor: '#182b49',
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </Col>
                </Row>
              </Cards>
            </IncomeExpenseWrapper>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Cards title="Account Receivable" more={content}>
              <ChartjsLineChart
                labels={['Current', '1-30', '30-60', '60-90', '90']}
                datasets={[
                  {
                    data: [7, 10, 8, 14, 7],
                    borderColor: '#FA8B0C',
                    borderWidth: 3,
                    fill: false,
                  },
                ]}
                height={100}
                options={{
                  ...options,
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            </Cards>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Cards title="Account Payable" more={content}>
              <ChartjsLineChart
                labels={['Current', '1-30', '30-60', '60-90', '90']}
                datasets={[
                  {
                    data: [7, 10, 8, 14, 7],
                    borderColor: '#2C99FF',
                    borderWidth: 3,
                    fill: false,
                  },
                ]}
                height={100}
                options={{
                  ...options,
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Business;
