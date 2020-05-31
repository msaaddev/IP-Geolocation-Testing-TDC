// importing axios in the file
const axios = require('axios');

// an asychronous function to make the API call
(async () => {
    await axios
        .get('https://api.ipgeolocationapi.com/countries')
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err));
})();

