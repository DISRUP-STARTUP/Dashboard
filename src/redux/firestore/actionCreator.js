import { notification } from 'antd';
import actions from './actions';

const addNotificationSuccess = () => {
  notification['success']({
    message: 'Your Record hasbeen Submited',
  });
};

const addNotificationError = err => {
  notification['error']({
    message: err,
  });
};

const deleteNotificationSuccess = () => {
  notification['success']({
    message: 'Your Record hasbeen Deleted',
  });
};

const deleteNotificationError = err => {
  notification['error']({
    message: err,
  });
};

const updateNotificationSuccess = () => {
  notification['success']({
    message: 'Your Record hasbeen updated',
  });
};

const updateNotificationError = err => {
  notification['error']({
    message: err,
  });
};

const {
  fbAddBegin,
  fbAddSuccess,
  fbAddErr,

  fbDeleteBegin,
  fbDeleteSuccess,
  fbDeleteErr,

  fbSingleDataBegin,
  fbSingleDataSuccess,
  fbSingleDataErr,

  fbUpdateBegin,
  fbUpdateSuccess,
  fbUpdateErr,
} = actions;

const fbDataSubmit = data => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbAddBegin());
      await db
        .collection('crud')
        .doc(`${data.id}`)
        .set(data);
      await dispatch(fbAddSuccess(data));
      await addNotificationSuccess();
    } catch (err) {
      await dispatch(fbAddErr(err));
      await addNotificationError(err);
    }
  };
};

const fbDataDelete = id => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbDeleteBegin());
      await db
        .collection('crud')
        .doc(`${id}`)
        .delete();
      await dispatch(fbDeleteSuccess());
      await deleteNotificationSuccess();
    } catch (err) {
      await dispatch(fbDeleteErr(err));
      await deleteNotificationError(err);
    }
  };
};

const fbDataUpdate = (id, data) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbUpdateBegin());
      await db
        .collection('crud')
        .doc(`${id}`)
        .update({
          ...data,
        });

      const query = await db
        .collection('crud')
        .where('id', '==', id)
        .get();
      await query.forEach(doc => {
        dispatch(fbUpdateSuccess(doc.data()));
      });

      await updateNotificationSuccess();
    } catch (err) {
      await dispatch(fbUpdateErr(err));
      await updateNotificationError(err);
    }
  };
};

const fbDataSingle = id => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    try {
      await dispatch(fbSingleDataBegin());
      const query = await db
        .collection('crud')
        .where('id', '==', id)
        .get();
      await query.forEach(doc => {
        dispatch(fbSingleDataSuccess(doc.data()));
      });
    } catch (err) {
      await dispatch(fbSingleDataErr(err));
    }
  };
};

export { fbDataSubmit, fbDataDelete, fbDataSingle, fbDataUpdate };
