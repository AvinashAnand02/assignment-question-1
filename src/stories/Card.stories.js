import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../component/card/Card';

const cardData = {
  key1: 'Value 1',
  key2: 'Value 2',
  key3: 'Value 3',
};

storiesOf('Card', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Default', () => (
    <Card cardData={cardData} title="Card Sample" />
  ));