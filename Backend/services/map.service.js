const axios = require('axios');

async function getCoordinates(address) {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 'OK') {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error('Address not found');
    }
  } catch (error) {
    console.error(error);
  }
}

