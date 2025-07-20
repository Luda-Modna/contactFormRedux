import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { createContact } from '../../store/slices/contactsSlice';

function ContactsForm ({ createNewContact }) {
  const initialValue = { fullName: '', phone: '' };

  const submitHandler = (values, { resetForm }) => {
    createNewContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:
          <Field
            name='fullName'
            type='text'
            placeholder='ContactName'
            autoFocus
          />
        </label>
        <label>
          Phone:
          <Field
            name='phone'
            type='text'
            maxLength='13'
            placeholder='+ xx xxx xxx xx xx'
          />
          <ErrorMessage name='phone' component='div' />
        </label>
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewContact: data => dispatch(createContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
