import './styles.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';

const Hello = () => <h1>Hello!</h1>

const container = document.getElementById("container");
const root = createRoot(container);
root.render(<Hello />);