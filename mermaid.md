
  ```mermaid
  sequenceDiagram
    participant browser
    participant server
    participant style
    browser->>server: The browser fetches the HTML code defining the content and the structure of the page from the server using an HTTP GET request
    server->>style: Links in the HTML code cause the browser to also fetch the CSS style sheet main.css and the JavaScript code file main.js
    style->>browser: The browser executes the JavaScript code. The code makes an HTTP GET request to the address https://studies.cs.helsinki.fi/exampleapp/data.json, which returns the notes as JSON data.
    browser->>browser: When the data has been fetched, the browser executes an event handler, which renders the notes to the page using the DOM-API.
```

The browser fetches the HTML code defining the content and the structure of the page from the server using an HTTP GET request.
Links in the HTML code cause the browser to also fetch the CSS style sheet main.css...
...and the JavaScript code file main.js
The browser executes the JavaScript code. The code makes an HTTP GET request to the address https://studies.cs.helsinki.fi/exampleapp/data.json, which returns the notes as JSON data.
When the data has been fetched, the browser executes an event handler, which renders the notes to the page using the DOM-API.
```
