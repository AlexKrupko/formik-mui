import { expect, test } from '@jest/globals';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { StaticTimePicker } from '../StaticTimePicker';

test('StaticTimePicker Renders Correctly', () => {
  const component = renderer.create(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field
            component={StaticTimePicker}
            name="test"
            label="Time"
            textField={{ helperText: 'Helper text' }}
          />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
