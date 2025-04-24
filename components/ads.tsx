import {useEffect} from 'react';

export function AdScript() {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052551});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      id="1052551" data-width="300" data-height="262"
    />
  );
}
