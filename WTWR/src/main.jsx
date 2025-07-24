import { createRoot } from 'react-dom/client';
import './vendor/normalize.css';
import './blocks/index.css';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
<App></App>
);

