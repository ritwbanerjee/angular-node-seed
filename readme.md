### Pre-requites
NodeJS, Redis

### Run the project
Hit npm run start. This will internally start webpack and node server. If your webpack build is successful, you can see the dist in the root of your directory

### Social integrations
On hit of FB button on dashboard, redirect to /auth/facebook. If everything is good, you will see the session is response.
For Google, hit the route /auth/google.

If the calls fail, you will hit the /failure block.

The routes for social integration is defined under server/routes/login/login.js

### Define node routes
Create logically grouped folders for the functionality the routes serve. create <routename.js> inside the folder.
Require the same in server/routes/api.js

### Config Object
server/config.js shall hold all the environment variables grouped by Environments
The object name that equals the node env name is served. 
Require it by require(path_to_config);

### Server side storage
Redis server

### Created By:
Ritwik Banerjee