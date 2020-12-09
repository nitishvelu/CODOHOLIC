
# **CODOHOLIC**

<p align="center">
 <img src="./client/public/logo_head.svg" width="350">
</p>
#  [WE ARE LIVE](https://codoholic.herokuapp.com/)

## **Typing web app for coders**
 A repo for the CODOHOLIC project.<br>
 This project is aimed at making coders type faster<br>
 **why choose this over traditonal typing websites?**<br>
 - code snippets as samplet text
 - choice of preferred programming languages
 - finger indicator 
 - progress tracking
 ***
 ## Contribute

### setting up dev environment
 - install [node](https://nodejs.org/en/download/) 
 - create a [mongoDB atlas](mongodb.com/cloud/atlas/register) account 
 - clone the repo
```bash
git clone https://github.com/nitishvelu/webtechpro.git
```

### To install node dependencies
```bash
cd CODOHOLIC
npm install
cd client 
npm install

```
### setup database connection
- Rename the file /config/Xdefault.json to default.json<br>
- Get the [api keys](https://youtu.be/1duX6Nfevhc?t=17) from mongodb and paste them in the defaut.json in the particular mongoURI field<br>
- dont forget to remove the <passwd> tag and replace it with the user password<br>
### starting the node servers
the following bash commands opens the front end server(react) on [localhost port 3000](http://localhost:3000) and the backend on [port 5000](http://localhost:5000)
```bash
cd ..
npm run dev
```
use [postman](https://www.postman.com/downloads/) for testing out the backend api
