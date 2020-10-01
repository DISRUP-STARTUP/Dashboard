import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { NoteCardWrap } from '../style';
import NoteCard from '../../../components/note/Card';
import { Cards } from '../../../components/cards/frame/cards-frame';

const All = () => {
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });
  return (
    <Cards title="Note Lists">
      <NoteCardWrap>
        <Row gutter={15}>
          {noteData.map(item => {
            return (
              <Col xxl={8} xl={12} md={8} key={item.key}>
                <NoteCard data={item} />
              </Col>
            );
          })}
        </Row>
      </NoteCardWrap>
    </Cards>
  );
};

export default All;
