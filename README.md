## This is an API for two endpoints; '''/api/comments''' and '''/api/posts'''.
It was developed with core Nodejs modules. No dependencies like Express was used.
Though a development dependency; nodemon, was used to help restart the server
as soon as a change is made. It helped facilitate the development process.

It comprises of app.js, controller.js, promisify.js. The app.js is the entry point of this application,
controller.js handles the request events while promisify.js creates a '''Promise''' for the '''https.get()''' method
which takes some time to retrieve the data from '''https://jsonplaceholder.typicode.com/comments'''. The data is then consumed
using "async - await" so that the '''Event-Loop''' is not blocked. The '''then()''' can also be used to consume the '''Promise'''.

## Running the application.
To run this application, simply type: '''node app''' or '''npm start''' as I included the "node_modules" folder and configured the package.json file as required.

All these commands should be done on the command line and on the root folder containing these files.

## Making Queries
Once the server is started, head to your browser, preferrably Postman for better view of the API's results.
To get the comments, simply enter this URL: '''http://localhost:8000/api/comments''' in your browser and hit enter.
To get the posts, simply enter this URL: '''http://localhost:8000/api/posts''' in your browser and hit enter.
You could add a query to the URL to limit the number of comments or posts retrieved as shown:
'''http://localhost:8000/api/comments?limit=9''' or '''http://localhost:8000/api/posts?limit=9''' depending on the resource.
