import App from './App.svelte'

import './styles/styles.scss';
import { mount } from "svelte";

const app = mount(App, { target: document.body });

export default app;
