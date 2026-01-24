
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const saveToDB = async (data) => {
    try {
        const response = await fetch(`${API_URL}/enquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Database Save Error:', error);
        return { success: false, error: error.message };
    }
};
