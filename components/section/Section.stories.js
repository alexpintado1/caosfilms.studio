import React from 'react';

import { Section } from './Section';

const story = {
  title: 'Elements/Section',
  component: Section,
};
export default story;

const Template = (props) => <Section {...props} />;
const WithTWStyle = (props) => <Section className="bg-brand p-4" {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Texto</div>,
};

export const WithBrandBG = WithTWStyle.bind({});
WithBrandBG.args = {
  children: <div>Texto</div>,
};
