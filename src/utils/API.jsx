export const getKeyValuePairs = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/settings/all-settings`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  return response.json();
}


