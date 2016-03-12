



function parse() 
{
        
        request = new XMLHttpRequest();

        request.open("GET", "messages.json", true);

        request.onreadystatechange = parse;

        request.send(NULL);

        if (request.readyState == 4 && request.status == 200) {
                result = "";
                raw = request.responseText;
                theMessages = JSON.parse(raw);
                elem = document.getElementById("messages");
                
                for(i = 0; i < theMessages.length; i++) {
                      result += theMessages[i]['id'] + " " + 
                                theMessages[i]['content'] " " + 
                                theMessages[i]['username'] + "<br>"; 
                }

                elem.innerHTML = result;


}