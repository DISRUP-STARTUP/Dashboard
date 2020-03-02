import React, { Fragment, useState } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { CardFreshFrame } from '../../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';

import rechartdata from '../../../config/dataService/recharts.json';
const { data01, data02 } = rechartdata;
const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const ReChartPie = () => {
  const [state, setState] = useState({
    activeIndex: 0,
  });

  const onPieEnter = (data, index) => {
    setState({
      activeIndex: index,
    });
  };

  // pie chart with customize label
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <Fragment>
      <PageHeader title="Rechats Pie Chart" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="TWO LEVEL PIE CHART" size="large" more={false}>
              <PieChart width={750} height={400}>
                <Pie data={data01} dataKey="value" cx={325} cy={200} outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx={325} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
              </PieChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="STRAIGHT ANGLE PIE CHART" size="large" more={false}>
              <PieChart width={750} height={400}>
                <Pie dataKey="value" startAngle={180} endAngle={0} data={data01} cx={325} cy={200} outerRadius={80} fill="#8884d8" label />
              </PieChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="CUSTOM ACTIVE SHAPE PIE CHART" size="large" more={false}>
              <PieChart width={750} height={400}>
                <Pie activeIndex={state.activeIndex} activeShape={renderActiveShape} data={data01} cx={325} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value" onMouseEnter={onPieEnter} />
              </PieChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="PIE CHART WITH CUSTOMIZED LABEL" size="large" more={false}>
              <PieChart width={750} height={400}>
                <Pie data={data01} cx={375} cy={200} labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="value">
                  {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="TWO SIMPLE PIE CHART" size="large" more={false}>
              <PieChart width={750} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
              </PieChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="PIE CHART WITH PADDING ANGLE" size="large" more={false}>
              <PieChart width={750} height={400} onMouseEnter={onPieEnter}>
                <Pie data={data01} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                  {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Pie data={data01} cx={420} cy={200} startAngle={180} endAngle={0} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                  {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ReChartPie;
