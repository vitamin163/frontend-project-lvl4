import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { actions } from '../slices';
import Error from './Error';


export default (props) => {
  const validationMessage = Yup.object().shape({
    text: Yup.string()
      .required('Write message'),
  });

  const dispatch = useDispatch();
  const textInput = useRef(null);
  const { closeModal } = actions;

  const handleClose = () => {
    dispatch(closeModal());
  };

  const focus = () => textInput.current.focus();
  useEffect(focus);

  const handleSubmit = async ({ text }, { resetForm, setSubmitting, setErrors }) => {
    const { onSubmit } = props;
    try {
      await onSubmit(text);
      resetForm({});
      handleClose();
      focus();
    } catch (e) {
      setSubmitting(false);
      setErrors({ text: e.message });
      focus();
    }
  };


  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={validationMessage}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <ErrorMessage component={Error} name="text" />
          <Field name="text">
            {({ field }) => (
              <FormGroup controlId="text" className="mt-3">
                <div className="d-flex flex-row">
                  <FormControl
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                    ref={textInput}
                  />
                  <Button variant="primary" type="submit" className="ml-1" disabled={isSubmitting}>
                    Submit
                  </Button>
                </div>
              </FormGroup>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
};
