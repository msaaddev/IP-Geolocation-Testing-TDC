const axios = require('axios');

(async () => {
    await axios
        .get('https://api.ipgeolocationapi.com/countries')
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err));
})();
