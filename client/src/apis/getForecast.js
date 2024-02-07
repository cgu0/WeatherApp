const getForecast = ({CITY}) =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=10c517980602db404824afd4d676faa3&units=metric`)
        .then((res) => res.json() )

export default getForecast;