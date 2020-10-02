import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { NoteCardWrap } from '../style';
import NoteCard from '../../../components/note/Card';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Favorite = () => {
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });
  return (
    <Cards title="Task Lists">
      <NoteCardWrap>
        <Row gutter={15}>
          {noteData
            .filter(item => item.label === 'important')
            .map(item => {
              return (
                <Col md={8} key={item.key}>
                  <NoteCard data={item} />
                </Col>
              );
            })}
        </Row>
      </NoteCardWrap>
    </Cards>
  );
};

export default Favorite;
