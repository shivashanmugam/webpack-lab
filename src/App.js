import React from 'react';
import { add } from './utils';
import { ClockIcon } from 'dpw-uds-icons-react';

function App() {
    return (
        <div>
            <h1>{add(1, 3)}</h1>
            <h1>Hello, React!</h1>
            <div>{ClockIcon}</div>
        </div>
    );
}

export default App;