import './styles.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';

interface TitleProps {
  text: string;
}
const Title = ({text}: TitleProps) => <h1>{text}</h1>

const container = document.getElementById("container");
const root = createRoot(container);
root.render(<Title text={'Hello, Webpack!'} />);