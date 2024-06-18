// submit.js

import { useState } from 'react';

export const SubmitButton = ({ nodes, edges }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const formattedData = {
                nodes: nodes.map(node => ({
                    id: node.id,
                    type: node.type,
                    position: node.position,
                    data: node.data
                })),
                edges
            };

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            alert(`Number of nodes: ${responseData.num_nodes}\nNumber of edges: ${responseData.num_edges}\nIs DAG: ${responseData.is_dag}`);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
            </button>
        </div>
    );
};
