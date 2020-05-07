import React from 'react';
import EmailContent from './Content';
import { connect } from 'react-redux';

const Sent = ({ searchData, email }) => {
  return (
    <EmailContent
      email={email.filter(email => {
        return email.type === 'sent';
      })}
      searchData={searchData}
    />
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    email: state.email.allMessage,
  };
};

export default connect(mapStateToProps)(Sent);
