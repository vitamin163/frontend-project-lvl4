import React from 'react';
import { connect } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import {
  FormControl, FormGroup, Alert, Button,
} from 'react-bootstrap';
import * as Yup from 'yup';
import UserContext from '../context/UserContext';

const mapStateToProps = (state) => {
  const props = {
    submitState: state.submitState,
  };
  return props;
};

const validationMessage = Yup.object().shape({
  text: Yup.string()
    .required(<Alert variant="warning">Write message</Alert>),
});

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  render() {
    const { submitState, onSubmit } = this.props;
    return (
      <Formik
        initialValues={{ text: '' }}
        validationSchema={validationMessage}
        onSubmit={onSubmit(this.textInput)}
      >
        {() => (
          <Form>
            <ErrorMessage name="text" />
            <Field name="text">
              {({ field }) => (
                <FormGroup controlId="text" className="mt-3">
                  <div className="d-flex flex-row">
                    <FormControl
                      type="text"
                      value={field.value}
                      onChange={field.onChange}
                      disabled={submitState === 'request'}
                      ref={this.textInput}
                    />
                    <Button variant="primary" type="submit" className="ml-1">
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
  }
}

Input.contextType = UserContext;

export default connect(mapStateToProps)(Input);
