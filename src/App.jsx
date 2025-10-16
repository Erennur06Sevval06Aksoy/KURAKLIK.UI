import React, { useEffect, useState } from 'react';
import { getFeatures } from './api';
function App() {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        getFeatures()
            .then(res => setFeatures(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Features ({features.length})</h1>
            <pre>{JSON.stringify(features, null, 2)}</pre>
        </div>
    );
}

export default App;
