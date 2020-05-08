import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Formik, Form, ErrorMessage,
} from 'formik';
import { Modal, Button } from 'react-bootstrap';
import { actions } from '../../slices';
import routes from '../../routes';
import Error from '../Error';

export default () => {
  const dispatch = useDispatch();
  const { closeModal } = actions;

  const modalState = useSelector((state) => state.modalState);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const removeChannelHandler = async (removeChannel, { setErrors }) => {
    const { channelId } = modalState;
    const url = routes.channelPath(channelId);
    const data = {
      id: channelId,
    };
    try {
      await axios.delete(url, { data });
      handleClose();
    } catch (e) {
      setErrors({ removeChannel: e.message });
    }
  };

  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete channel?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Formik
          initialValues={{ removeChannel: null }}
          onSubmit={removeChannelHandler}
        >
          {({ isSubmitting }) => (
            <Form>
              <ErrorMessage component={Error} name="removeChannel" />
              <Button variant="primary" type="submit" className="mr-1" disabled={isSubmitting}>
                Yes
              </Button>
              <Button
                variant="primary"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                No
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Footer>
    </Modal>
  );
};
