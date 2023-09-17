import { RJSFSchema } from '@rjsf/utils';
import Form from '@rjsf/fluent-ui';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
};

function DemoForm() {
  return <Form schema={schema} validator={validator} onSubmit={console.log} />;
}
