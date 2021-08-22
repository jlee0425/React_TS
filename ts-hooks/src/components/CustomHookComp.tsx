import React, { useEffect, useState } from 'react';
export interface Drink {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

const useFetchData = <Payload extends unknown>(
  url: string
): { data: Payload[] | null; done: boolean } => {
  const [data, setData] = useState<Payload[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data: Payload[]) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return { data, done };
};

const CustomHookComp = () => {
  const { data, done } = useFetchData<Drink>('/drinks.json');

  return <div>{done && <img alt='Drink Logo' src={data![0].logo} />}</div>;
};

export default CustomHookComp;
