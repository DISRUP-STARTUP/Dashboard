import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Table } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import {
  ChartjsAreaChart,
  ChartjsBarChartTransparent,
  ChartjsLineChart,
  ChartjsDonutChart,
} from '../../components/charts/chartjs';
import { NavLink } from 'react-router-dom';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from '../../config/dataService/vector.json';
import { Link } from 'react-router-dom';
import { CardBarChart2, LocationMapWrapper, RevenueWrapper, RevenueTableWrapper, RevenueChartWrapper, ECahrtCard } from './style';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const content = (
  <Fragment>
    <NavLink to="#">
      <span>More one</span>
    </NavLink>
    <NavLink to="#">
      <span>More two</span>
    </NavLink>
    <NavLink to="#">
      <span>More three</span>
    </NavLink>
  </Fragment>
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
          display: false,
        },
        ticks: {
          display: false,
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
          display: false,
        },
      },
    ],
  },
};

const revenuecolumns = [
  {
    title: 'Name of Sourse',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: 'Page View',
    dataIndex: 'page_View',
    key: 'page_View',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
    width: 120,
  },
];
const revenuedata = [
  {
    key: '1',
    name: 'Google',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#5F63F2',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '2',
    name: 'Facebook',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#FF69A5',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '3',
    name: 'Email marketing',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#20C997',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '4',
    name: 'Direct website',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#2C99FF',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '5',
    name: 'Referral',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#FA8B0C',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
];

const sellingcolumns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];
const sellingdata = [
  {
    key: '1',
    name: 'Samsung Galaxy S8 256GB',
    price: '$280',
    sold: '126',
    revenue: '$38,536',
  },
  {
    key: '2',
    name: 'Half Sleeve Shirt',
    price: '$25',
    sold: '80',
    revenue: '$20,573',
  },
  {
    key: '3',
    name: 'Marco Shoes',
    price: '$32',
    sold: '58',
    revenue: '$20,573',
  },
  {
    key: '4',
    name: 'Marco Shoes',
    price: '$32',
    sold: '58',
    revenue: '$20,573',
  },
  {
    key: '5',
    name: '15" Mackbook Pro',
    price: '$950',
    sold: '58',
    revenue: '$20,573',
  },
  {
    key: '6',
    name: 'Apple iPhone X',
    price: '$985',
    sold: '90',
    revenue: '$20,573',
  },
];

const locationcolumns = [
  {
    title: 'Top Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];
const locationdata = [
  {
    key: '1',
    location: 'United States',
    order: '397',
    revenue: '$38,536',
  },
  {
    key: '2',
    location: 'United Kingdom',
    order: '420',
    revenue: '$38,536',
  },
  {
    key: '3',
    location: 'Canada',
    order: '210',
    revenue: '$38,536',
  },
  {
    key: '4',
    location: 'China',
    order: '108',
    revenue: '$38,536',
  },
];

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
const Ecommerce = () => {
  return (
    <Fragment>
      <PageHeader
        ghost
        title="Ecommerce Dashboard"
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
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <ECahrtCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">7,461</Heading>
                    <span>Orders</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#5F63F210',
                        hoverBackgroundColor: '#5F63F2',
                      },
                    ]}
                    options={options}
                  />
                </div>
              </ECahrtCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <ECahrtCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">$28,947</Heading>
                    <span>Revenue</span>
                    <p>
                      <span className="growth-downward">
                        <FeatherIcon icon="arrow-down" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#FF69A510',
                        hoverBackgroundColor: '#FF69A5',
                      },
                    ]}
                    options={options}
                  />
                </div>
              </ECahrtCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <ECahrtCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">$3,241</Heading>
                    <span>Avg. order value</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#20C99710',
                        hoverBackgroundColor: '#20C997',
                      },
                    ]}
                    options={options}
                  />
                </div>
              </ECahrtCard>
            </Cards>
          </Col>
          <Col xxl={6} md={12} sm={12} xs={24}>
            <Cards headless>
              <ECahrtCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <Heading as="h1">45.2k</Heading>
                    <span>Unique visitors</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
                <div className="card-chunk">
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#2C99FF10',
                        hoverBackgroundColor: '#2C99FF',
                      },
                    ]}
                    options={options}
                  />
                </div>
              </ECahrtCard>
            </Cards>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <RevenueWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Today
                        </Link>
                      </li>
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
                more={content}
                title="Total Revenue"
                size="large"
              >
                <Heading className="revenue-count" as="h1">
                  <span className="currnt-revenue">$72,784</span>
                  <span className="prev-revenue"> $52,240</span>
                </Heading>

                <ChartjsAreaChart
                  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  datasets={[
                    {
                      data: [5, 25, 18, 22, 15, 30, 25, 35, 20, 22, 20, 40],
                      borderColor: '#5F63F2',
                      borderWidth: 3,
                      fill: true,
                      backgroundColor: '#5F63F210',
                      label: 'Current period',
                    },
                    {
                      data: [15, 20, 18, 25, 20, 30, 25, 20, 20, 22, 15, 30],
                      borderColor: '#C6D0DC',
                      borderWidth: 2,
                      fill: false,
                      backgroundColor: '#00173750',
                      label: 'Previous period',
                      borderDash: [10, 5],
                    },
                  ]}
                  options={{
                    maintainAspectRatio: true,
                    legend: {
                      display: true,
                      labels: {
                        display: true,
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                    scales: {
                      yAxes: [
                        {
                          stacked: false,
                          gridLines: {
                            display: true,
                            color: '#e5e9f2',
                          },
                          ticks: {
                            beginAtZero: false,
                            fontSize: 10,
                            display: true,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          stacked: true,
                          gridLines: {
                            display: false,
                          },
                          ticks: {
                            beginAtZero: false,
                            fontSize: 11,
                            display: true,
                          },
                        },
                      ],
                    },
                  }}
                  height={120}
                />
              </Cards>
            </RevenueWrapper>
          </Col>
          <Col xxl={12} xs={24}>
            <RevenueTableWrapper>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li>
                          <Link onClick={handleActiveChange} to="#">
                            Today
                          </Link>
                        </li>
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
                  more={content}
                  title="Source Of Revenue Generated"
                  size="large"
                >
                  <div className="table-bordered revenue-table table-responsive">
                    <Table columns={revenuecolumns} dataSource={revenuedata} pagination={false} />
                  </div>
                </Cards>
              </div>
            </RevenueTableWrapper>
          </Col>
          <Col xxl={8} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Today
                        </Link>
                      </li>
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
                title="Top Selling Products"
                size="large"
                bodypadding="0px"
              >
                <div className="table-bordered top-seller-table table-responsive">
                  <Table columns={sellingcolumns} dataSource={sellingdata} pagination={false} />
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <LocationMapWrapper>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-nav">
                      <ul>
                        <li>
                          <Link onClick={handleActiveChange} to="#">
                            Today
                          </Link>
                        </li>
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
                  title="Sales By Location"
                  size="large"
                >
                  <div className="location-map d-flex justify-content-center">
                    <VectorMap {...worldLowRes} fill="#E3E6EF" stroke="white" />
                  </div>

                  <div className="location-table">
                    <Table columns={locationcolumns} dataSource={locationdata} pagination={false} />
                  </div>
                </Cards>
              </div>
            </LocationMapWrapper>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <RevenueChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Today
                        </Link>
                      </li>
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
                title="Revenue By Device"
                size="large"
              >
                <ChartjsDonutChart
                  labels={['Desktop', 'Mobile', 'Tablets']}
                  datasets={[
                    {
                      data: [5870, 4483, 2420],
                      backgroundColor: ['#560bd0', '#007bff', '#00cccc'],
                    },
                  ]}
                />
              </Cards>
            </RevenueChartWrapper>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Ecommerce;
