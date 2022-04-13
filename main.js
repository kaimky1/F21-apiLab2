const getResidents = document.querySelector('#button')

var config = {
  method: 'get',
  url: 'https://swapi.dev/api/planets/2',
  headers: { }
};


const btn = () => {
    axios(config) 
    .then(function (response) {
      for(let i = 0; i < response.data.residents.length; i++){
        axios.get(`${response.data.residents[i]}`)
        .then((response) => { //name in the url
            let name = response.data.name; 
            console.log(name)
            let resident = document.createElement('h2');
            resident.textContent = response.data.name;
            document.body.appendChild(resident);
        })
        console.log(JSON.stringify(response.data.residents));
        let resident = document.createElement
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

getResidents.addEventListener('click', btn)