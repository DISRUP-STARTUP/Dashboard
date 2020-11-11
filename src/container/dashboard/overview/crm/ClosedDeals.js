import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardBarChart } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';
import { closeDealFilterData, closeDealGetData } from '../../../../redux/chartContent/actionCreator';

const ClosedDeals = () => {
  const dispatch = useDispatch();
  const { closeDealState, cdIsLoading } = useSelector(state => {
    return {
      closeDealState: state.chartContent.closeDealData,
      cdIsLoading: state.chartContent.cdLoading,
    };
  });

  const [state, setState] = useState({
    closeDealTabActive: 'year',
  });

  useEffect(() => {
    if (closeDealGetData) {
      dispatch(closeDealGetData());
    }
  }, [dispatch]);

  const closeDealDatasets = closeDealState !== null && [
    {
      data: closeDealState.won,
      backgroundColor: '#20C99780',
      hoverBackgroundColor: '#20C997',
      label: 'Won',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 49,
    },
    {
      data: closeDealState.amount,
      backgroundColor: '#5F63F280',
      hoverBackgroundColor: '#5F63F2',
      label: 'Amount',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 60,
    },
  ];

  const handleActiveChangeYoutube = value => {
    setState({
      ...state,
      closeDealTabActive: value,
    });
    dispatch(closeDealFilterData(value));
  };

  return (
    <>
      {closeDealState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.closeDealTabActive === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.closeDealTabActive === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.closeDealTabActive === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Closed Deals Performance"
          size="large"
        >
          {cdIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {closeDealDatasets.map((item, key) => {
                  return (
                    <div key={key + 1} className="card-bar-top">
                      <Heading as="h3">
                        {item.label}
                        <sub>
                          <FeatherIcon icon={item.percent >= 50 ? 'arrow-up' : 'arrow-down'} size={14} />
                          {item.percent}%
                        </sub>
                      </Heading>
                    </div>
                  );
                })}
              </div>

              <ChartjsBarChartTransparent
                labels={closeDealState.labels}
                datasets={closeDealDatasets}
                options={{
                  maintainAspectRatio: true,
                  responsive: true,
                  layout: {
                    padding: {
                      top: 20,
                    },
                  },
                  legend: {
                    display: false,
                    position: 'top',
                    align: 'end',
                    labels: {
                      boxWidth: 6,
                      display: true,
                      usePointStyle: true,
                    },
                  },

                  scales: {
                    yAxes: [
                      {
                        gridLines: {
                          color: '#e5e9f2',
                          borderDash: [3, 3],
                          zeroLineColor: '#e5e9f2',
                          zeroLineWidth: 1,
                          zeroLineBorderDash: [3, 3],
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          fontColor: '#182b49',
                          max: Math.max(...closeDealState.won),
                          stepSize: Math.max(...closeDealState.won) / 5,
                          display: true,
                          min: 0,
                          padding: 10,
                        },
                      },
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          display: true,
                          zeroLineWidth: 2,
                          zeroLineColor: '#fff',
                          color: 'transparent',
                          z: 1,
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          fontColor: '#182b49',
                          min: 0,
                        },
                      },
                    ],
                  },
                }}
              />
              <ul>
                {closeDealDatasets &&
                  closeDealDatasets.map((item, key) => {
                    return (
                      <li key={key + 1} className="custom-label">
                        <span
                          style={{
                            backgroundColor: item.hoverBackgroundColor,
                          }}
                        />
                        {item.label}
                      </li>
                    );
                  })}
              </ul>
            </CardBarChart>
          )}
        </Cards>
      )}
    </>
  );
};

export default ClosedDeals;
