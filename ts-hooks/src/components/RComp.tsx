import React, { ReactElement, ReactNode } from 'react';

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

type ListItem = string;

export const List = ({
  items,
  render
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

function RComp (): ReactElement {
  return (
    <div>
      <Heading title='heading' />
      <List
        items={['a', 'b', 'c']}
        render={(str: string) => <strong>{str}</strong>}
      />
    </div>
  );
}

export default RComp;
