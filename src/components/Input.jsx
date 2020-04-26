import React from 'react';
import { connect } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { actions } from '../slices';
import UserContext from '../context/UserContext';
import Error from './Error';

const mapStateToProps = (state) => {
  const props = {
    submitState: state.submitState,
    error: state.error,
  };
  return props;
};

const mapDispatchToProps = {
  closeModal: actions.closeModal,
};

const validationMessage = Yup.object().shape({
  text: Yup.string()
    .required('Write message'),
});


class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleClose = () => {
    const { closeModal } = this.props;
    closeModal();
  };

   handleSubmit = async ({ text }, { resetForm, setSubmitting, setErrors }) => {
     const { onSubmit } = this.props;
     try {
       await onSubmit(text);
       this.textInput.current.focus();
       resetForm({});
       this.handleClose();
     } catch (e) {
       this.textInput.current.focus();
       setSubmitting(false);
       setErrors({ text: e.message });
     }
   }

   render() {
     const { submitState } = this.props;
     const disabled = ['ADD_MESSAGE_REQUEST', 'ADD_CHANNEL_REQUEST', 'RENAME_CHANNEL_REQUEST'].includes(submitState);
     return (
       <Formik
         initialValues={{ text: '' }}
         validationSchema={validationMessage}
         onSubmit={this.handleSubmit}
       >
         {() => (
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
                       disabled={disabled}
                       ref={this.textInput}
                     />
                     <Button variant="primary" type="submit" className="ml-1" disabled={disabled}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
