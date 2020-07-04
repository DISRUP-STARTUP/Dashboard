import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import FeatherIcon from 'feather-icons-react';
import { BlockSpan, ChatWrapper } from '../style';
import { textRefactor } from '../../../Helper';
import { filterSinglepageGroup } from '../../../redux/chat/actionCreator';
import { Button } from '../../../components/buttons/buttons';

const GroupChat = ({ match }) => {
  const chatData = useSelector(state => state.groupChat.data);
  const dispatch = useDispatch();

  const dataFiltering = email => {
    dispatch(filterSinglepageGroup(email));
  };

  return (
    <ChatWrapper>
      <div className="create-action">
        <Button className="btn-add" size="default" type="default" shape="circle" block>
          <FeatherIcon icon="edit" size={14} />
          Create New Group
        </Button>
      </div>

      <ul>
        {chatData &&
          chatData
            .sort((a, b) => {
              return b.time - a.time;
            })
            .map((user, index) => {
              const { groupName, content, id } = user;
              const { time } = content[content.length - 1];
              const same = moment(time).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
              return (
                <li key={index + 1} className="chat-link-signle">
                  <NavLink onClick={() => dataFiltering(id)} to={`${match.path}/${id}`}>
                    <div className="author-figure">
                      <img src={require('../../../static/img/avatar/NoPath (2).png')} alt="" />
                    </div>

                    <div className="author-info">
                      <BlockSpan className="author-name">{groupName}</BlockSpan>
                      <BlockSpan className="author-chatText">
                        {textRefactor(content[content.length - 1].content, 5)}
                      </BlockSpan>
                    </div>
                    <div className="author-chatMeta">
                      <BlockSpan>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</BlockSpan>
                    </div>
                  </NavLink>
                </li>
              );
            })}
      </ul>
    </ChatWrapper>
  );
};

export default GroupChat;
