### The backend
  
  The backend for this project is running on node with the following dependencies:

  ## Express
    To help us build the server, handle middleware and routes:
    
    import express from "express";
    
    const app = express()
    
    express.json() will be in our middleware to enable json.
    
   ## cors
    To help us handle cross origin request resources. ( Help different ports communicate with each other) :
    
    app.use(cors())
        
   ## bcrypt
    To hash the passwords
    
   ## JWT
    JWT is used for authorization. 
    Making sure that the user sending requests to the server is the same user that logged in. 
    (This is usually done using session and session ID).

   ## uuid
    Will help us generate unique ID's for the application user's

   ## Nodemon
    To restart our server automatically whenever there are changes in our code.

