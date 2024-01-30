import React from 'react';

// Да, я понимаю, что memo сам делает поверхностную проверку,
// мне просто хотелось применить все практики из урока :)
const renderPredicate = (prevProps, nextProps) => {
  return prevProps.number === nextProps.number;
}

export const SimpleComponent = React.memo(({ number, componentRerenderedTimes }) => {
  componentRerenderedTimes.current++;

  const onPress = () => alert(number);

  return <div onClick={onPress}>Number: {number}</div>;
}, renderPredicate);