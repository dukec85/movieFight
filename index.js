const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey:'4335b527',
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fetchData(event.target.value);
  }, 500);
};

input.addEventListener('input', onInput);
