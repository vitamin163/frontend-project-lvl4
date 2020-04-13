import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import UserContext from '../UserContext';
import { asyncActions } from '../../slices';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const mapDispatchToProps = {
  addMessageActions: asyncActions.addMessageActions,
};

const Input = (props) => {
  const userName = useContext(UserContext);

  const submitHandler = (value) => {
    const { currentChannelId, addMessageActions } = props;
    const newMessage = {
      userName,
      currentChannelId,
      text: value,
    };
    addMessageActions(newMessage);
  };

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values) => submitHandler(values)}
    >
      <Form>
        <Field name="message">
          {({ field, formProps }) => (
            <FormGroup controlId="message">
              <FormLabel>message</FormLabel>
              <FormControl type="text" value={field.value} onChange={field.onChange} placeholder="message" />
            </FormGroup>
          )}
        </Field>
      </Form>

    </Formik>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
