import { useMemo } from 'react';

import { toKebabCase } from '../lib/kebab-case';
import Item from './item';
import { useGetItemsQuery } from '../services/item-service';

type ItemsProps = {
  title: string;
};

const ItemList = ({ title = 'Items' }: ItemsProps) => {
  const id = toKebabCase(title);
  const { data, isLoading } = useGetItemsQuery();
  const items = useMemo(() => data?.items || [], [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id={id} className="w-full border-2 border-primary-200 p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      {!items.length && <p className="text-primary-400">(Nothing to show.)</p>}
    </section>
  );
};

export default ItemList;
