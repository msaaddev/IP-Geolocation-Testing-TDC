const axios = require('axios');

(async () => {
    await axios
        .get('https://api.ipgeolocationapi.com/geolocate')
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err));
})();
