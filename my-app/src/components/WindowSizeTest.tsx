import {useWindowSize} from '@/hooks/useWindowSize';

export const WindowSizeTest = () => {
  const {width, height} = useWindowSize();

  return (
    <div>
      <h3>Window size</h3>
      <p>x: {width}</p>
      <p>y: {height}</p>
    </div>
  )
}