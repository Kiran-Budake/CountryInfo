let cl = console.log;

var info = document.getElementById('info')
let result = " ";

countries.forEach((country) => {
  result += `
    <div class="col">
        <div class="card">
            <div class="imgContainer">
                <img src="${country.flag}" alt="">
            </div>
            <h3 class="countryName">${country.name}</h3>
            <p>
                capital: ${country.capital}
            </p>
            <p>
                languages: ${country.languages}

            </p>
            <p>
                population: ${country.population}
            </p>
        </div>
    </div>
    `
})

info.innerHTML = result;