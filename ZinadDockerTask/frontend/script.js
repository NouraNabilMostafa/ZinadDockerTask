document.getElementById('myButton').addEventListener('click', async () => {
    const responseElement = document.getElementById('response');
    try {
        // Use the external port mapping (5000) for development
        const response = await fetch('http://localhost:5000/message');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        responseElement.textContent = data;
    } catch (error) {
        console.error('Fetch error:', error);
        responseElement.textContent = `Error: ${error.message}`;
    }
});