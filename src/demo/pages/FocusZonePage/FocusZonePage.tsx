import * as React from 'react';
import {
  ExampleCard,
  PropertiesTableSet
} from '../../components/index';

import FocusZonePhotosExample from './examples/FocusZone.Photos.Example';
let FocusZonePhotosExampleCode = require('./examples/FocusZone.Photos.Example.tsx');

import FocusZoneListExample from './examples/FocusZone.List.Example';
let FocusZoneListExampleCode = require('./examples/FocusZone.List.Example.tsx');

export default class FocusZonePage extends React.Component<any, any> {

  public render() {
    return (
      <div className='ms-FocusZonePage'>
        <h1 className='ms-font-xxl'>FocusZone</h1>
        <div>FocusZones are used to delimit keyboard navigation behavior.</div>
        <h2 className='ms-font-xl'>Examples</h2>
        <ExampleCard title='Non-uniform photos within bidirectional FocusZone' code={ FocusZonePhotosExampleCode }>
          <FocusZonePhotosExample />
        </ExampleCard>
        <ExampleCard title='Nesting FocusZones in list rows' code={ FocusZoneListExampleCode }>
          <FocusZoneListExample />
        </ExampleCard>
        <PropertiesTableSet componentName='FocusZone' componentPath='utilities/focus/' />
      </div>
    );
  }

}