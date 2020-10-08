/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Input, Upload, message, Comment, Avatar } from 'antd';
import Picker from 'emoji-picker-react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { AllPosts, Title } from './style';
import { Cards } from '../../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../../components/buttons/buttons';
import { likeUpdate } from '../../../../../redux/profile/actionCreator';

const ExampleComment = ({ children, replay }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<span>{replay.name}</span>}
    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
    content={<p>{replay.text}</p>}
  >
    {children}
  </Comment>
);

const Posts = ({ postId, from, time, img, like, comment, content, author }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => {
    return {
      posts: state.Profile.posts,
    };
  });

  const [state, setState] = useState({
    inputValue: '',
    fileList: [],
    fileList2: [],
  });

  const [pickerShow, setPickerShow] = useState(false);
  const [textValue, setTextValue] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    setTextValue(textValue + emojiObject.emoji);
  };

  const onPickerShow = () => {
    setPickerShow(!pickerShow);
  };

  const onTextChange = e => {
    setTextValue(e.target.value);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    listType: 'picture-card',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const attachment = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList2: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onLikeUpdate = id => {
    return dispatch(likeUpdate(posts, id));
  };

  return (
    <AllPosts>
      <Cards
        title={
          <Title>
            <img src={require(`../../../../../${author}`)} alt="" />
            <p>
              {from} <span>{moment(parseInt(time, 10)).fromNow()}</span>
            </p>
          </Title>
        }
        more={
          <>
            <Link to="#">Delete</Link>
          </>
        }
      >
        <div className="gallery">
          {img.length ? (
            <>
              <Masonry
                breakpointCols={img.length <= 2 ? img.length : 2}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {img.map((src, key) => {
                  return (
                    key <= 1 && (
                      <img key={key + 1} style={{ width: '100%' }} src={require(`../../../../../${src}`)} alt="" />
                    )
                  );
                })}
              </Masonry>
              {img.length > 2 && (
                <Masonry
                  breakpointCols={img.length <= 2 ? img.length : 3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {img.map((src, key) => {
                    return (
                      key > 1 && (
                        <img key={key + 1} style={{ width: '100%' }} src={require(`../../../../../${src}`)} alt="" />
                      )
                    );
                  })}
                </Masonry>
              )}
            </>
          ) : null}
        </div>
        <div className="post">{content}</div>
        <div className="share">
          <span>
            <Link onClick={() => onLikeUpdate(postId)} to="#">
              <FeatherIcon icon="thumbs-up" size={14} />
            </Link>
            {like}
          </span>
          <span>
            <Link to="#">
              <FeatherIcon icon="message-square" size={14} />
            </Link>
            {comment.length}
          </span>

          <Link to="#">
            <FeatherIcon icon="share-2" size={14} />
            Share
          </Link>
        </div>

        <div className="comments">
          <div className="commentArea">
            <img src={require('../../../../../static/img/chat-author/t1.jpg')} alt="" />
            <Input.TextArea onChange={onTextChange} value={textValue} placeholder="Write comment...." />
            <div className="chatbox-reply-action d-flex">
              <span className="smile-icon">
                {pickerShow && <Picker onEmojiClick={onEmojiClick} />}
                <Link onClick={onPickerShow} to="#">
                  <FeatherIcon icon="smile" size={24} />
                </Link>
              </span>

              <Link to="#">
                <Upload {...props}>
                  <FeatherIcon icon="image" size={18} />
                </Upload>
              </Link>
              <Link to="#">
                <Upload {...attachment}>
                  <FeatherIcon icon="paperclip" size={18} />
                </Upload>
              </Link>
              <Button type="primary" className="btn-send">
                <FeatherIcon icon="send" size={18} />
              </Button>
            </div>
          </div>
        </div>
        {comment.length ? (
          <div className="commentReplay">
            <ExampleComment
              replay={{
                name: comment[0].from,
                text: comment[0].text,
              }}
            >
              {comment.length > 1
                ? comment.map((item, key) => {
                    return (
                      key <= 1 && (
                        <ExampleComment
                          replay={{
                            name: item.name,
                            text: item.text,
                          }}
                        />
                      )
                    );
                  })
                : null}
            </ExampleComment>
          </div>
        ) : null}
      </Cards>
    </AllPosts>
  );
};

export default Posts;
