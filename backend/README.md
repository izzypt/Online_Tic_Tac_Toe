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
    
    bcrypt.hash(<password>, saltLength) to generate a hashedPassword.
    
    bcrypt.compare(<input_password>, <hashed_password>)
    
   ## JWT
    JWT is used for authorization. 
    Making sure that the user sending requests to the server is the same user that logged in. 
    (Usually done using session and session ID).
    
    User agent should send the JWT, typically in the Authorization http header using the Bearer schema.
    Authorization: Bearer <token>

   ## uuid
    Will help us generate unique ID's for the application user's

   ## Nodemon
    To restart our server automatically whenever there are changes in our code.

