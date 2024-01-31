import {useKeyboard} from '@/hooks/useKeyboard';
import {ThrottleTest} from '@/components/ThrottleTest';
import {DebounceTest} from '@/components/DebounceTest';
import {WindowSizeTest} from '@/components/WindowSizeTest';
import {LocalStorageTest} from '@/components/LocalStorageTest';

export default function App() {
  const pressedKey = useKeyboard();

  return (
    <div>
      <p><strong>Pressed key:</strong> {pressedKey}</p>
      <DebounceTest />
      <ThrottleTest />
      <WindowSizeTest />
      <LocalStorageTest />
    </div>
  )}
