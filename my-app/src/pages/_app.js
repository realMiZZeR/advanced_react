import React from 'react';
import {SimpleComponent} from '@/components/SimpleComponent';

export default function App() {
  const componentRerenderedTimes = React.useRef(0);
  const [data, setData] = React.useState(
    new Array(1000)
      .fill({ number: 0 })
      .map((item, index) => ({ number: item.number, id: String(index + 1) }))
  );

  const randomize = React.useCallback(() => {
    setData(
      data.map(({ id }) => ({ number: Math.floor(1 + Math.random() * 10), id })));
  }, []);

  const onClickAddToTop = React.useCallback(() => {
    setData(data => [{ number: 0, id: Math.random() }, ...data])
  }, []);

  return (
    <div>
      <div>Was rendered: {componentRerenderedTimes.current}</div>
      <button onClick={randomize}>random</button>
      <button onClick={onClickAddToTop}>add to top</button>
      {data.map(item => (
        <SimpleComponent
          key={item.id}
          number={item.number}
          componentRerenderedTimes={componentRerenderedTimes}
        />
      ))}
    </div>
  );
}