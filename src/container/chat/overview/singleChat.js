import React, { Fragment, useState, useEffect } from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MessageList, Footer } from '../style';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';

const ChatApp = ({ chat, match }) => {
  const [state, setState] = useState({
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].userName,
    inputValue: '',
  });

  const { singleContent, name, me, inputValue } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        chatData: chat,
        singleContent: chat[0].content,
        name: chat[0].userName,
        inputValue: '',
      });
    }
    return () => {
      unmounted = true;
    };
  }, [match, chat]);

  const handleChange = e => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const pushcontent = {
      content: inputValue,
      time: new Date().getTime(),
      seen: false,
      reaction: false,
      email: me,
    };

    setState({
      ...state,
      singleContent: [...singleContent, pushcontent],
      inputValue: '',
    });
  };

  const content = (
    <Fragment>
      <NavLink to="#">
        <FeatherIcon icon="users" size={14} />
        <span>More one</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="trash-2" size={14} />
        <span>More two</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="slash" size={14} />
        <span>More three</span>
      </NavLink>
    </Fragment>
  );

  return (
    <Cards title={name} more={content}>
      <ul>
        {singleContent.length ? (
          singleContent.map((mes, index) => {
            const id = mes.time;
            const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
            return (
              <div key={index + 1} style={{ overflow: 'hidden' }}>
                <div>
                  <Heading as={'h5'}>
                    {mes.email !== me && name}
                    <span>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>
                  </Heading>
                </div>
                <Icon type="smile" />
                <MessageList>{mes.content}</MessageList>
              </div>
            );
          })
        ) : (
          <p>No data found</p>
        )}
      </ul>
      <Footer>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Type your message..."
            name="chat"
            id="chat"
            style={{ width: '70%' }}
            value={inputValue}
          />
          <Button type="default">
            <FeatherIcon icon="camera" size={18} />
          </Button>
          <Button type="default">
            <FeatherIcon icon="paperclip" size={18} />
          </Button>
          <Button onClick={handleSubmit} type="primary">
            <FeatherIcon icon="send" size={18} />
          </Button>
        </form>
      </Footer>
    </Cards>
  );
};

const mapStateToProps = state => {
  return {
    chat: state.chatSingle.data,
  };
};

export default connect(mapStateToProps)(ChatApp);
