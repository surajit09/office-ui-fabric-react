import * as React from 'react';
import {
  Link
} from '../../../components/index';
import {
  ExampleCard,
  PropertiesTableSet
} from '../../components/index';

import SpinnerBasicExample from './examples/Spinner.Basic.Example';
let SpinnerBasicExampleCode = require('./examples/Spinner.Basic.Example.tsx');

export default class SpinnerPage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className='ms-font-xxl'>Spinner</h1>
        <div>
          <Link target='_blank' href='http://dev.office.com/fabric/components/Spinner'>Spinners</Link>
          <span> provide a ui indicator for progress.</span>
        </div>
        <h2 className='ms-font-xl'>Examples</h2>
        <ExampleCard
          title='Various Spinner Types'
          code={ SpinnerBasicExampleCode }
        >
          <SpinnerBasicExample />
        </ExampleCard>
        <PropertiesTableSet componentName='Spinner' />
      </div>
    );
  }

}