$(document).ready(()=> {
    fetch('http://api.icndb.com/jokes/random/5')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.value.map(joke => {
                let jokeElement =  $("<p>");
                jokeElement.text(joke.joke);
                $("#jokes").append(jokeElement);
            });
        });
});