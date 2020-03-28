async function generateJokes() {
    clear();
    let count = parseInt(document.querySelector('#jokeCount').value);
    for (let index = 0; index < count; index++) {
        fetch(`https://icanhazdadjoke.com/`, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let newDiv = document.createElement("div");
                newDiv.setAttribute('class', 'jokeCard');
                newDiv.innerHTML =
                    `<button type="button" id="showButton${index}">Show me!</button>
                    <p id='content${index}' style='display:none' margin='0'>${data.joke}</p>`;
                newDiv.addEventListener('click', function () {
                    showJoke(index)
                })
                document.querySelector('#output').appendChild(newDiv);
            })
            .catch((err) => {
                console.log('Something went wrong!', err);
                alert('Something went wrong, please reload the page and try again!');
            });
    }
}

function clear() {
    let elements = document.querySelector('#output');
    elements.innerHTML = '';
}

function showJoke(num) {
    document.querySelector(`#content${num}`).style.display = 'block';
}

document.querySelector(`#jokeCount`).addEventListener('change', generateJokes);
document.querySelector(`#clearButton`).addEventListener('click', clear);