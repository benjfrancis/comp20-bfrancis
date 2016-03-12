

request = new XMLHttpRequest();

request.open("GET", "data.json", true);

request.onreadystatechage = parse;

request.send(NULL);