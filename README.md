# REACT.js

React Basics 
1) working with GIT 

2) javascript 

3) React Hooks 

<hr />
INSTALLATION OF advance css in package.json
Advance css- sass .scss

install using
```
npm install node -sass
```
<hr/>
<img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"/>

<hr/>
DEPLOYING surge !
First, ensure you have a recent version of Node.js

Then, install Surge using npm by running the following command:
```
npm install --global surge
```

You may need to preface this command with sudo

Now, run surge from within any directory, to publish that directory onto the web.

That’s it! Running surge inside the directory you want to deploy will get your started. You’ll be able to create an account right from the command line, deploy, and host your site for free on Surge.

<img src="https://surge.sh/images/help/getting-started-with-surge.gif"/>

FOR ANIMATION 

```
npm install react-fade-in
```

Deployemnt in github pages 

setp 1 pacakge.json (add your homepage where the app needs to be deployed)

```
"homepage":"https://myusername.github.io/my-app"
```
2 setp install github page config

```
npm install --save gh-pages
```

step 3 add scripts to package.json

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
```

step 5 run and deploy

```
npm run deploy
```

PROGRESSIVE WEB APP (PWA)

1. SECURE -HTTPS
2. SERVICE WORKER -(SCRIPT as proxy for server)
3. MANIFEST FILE -(JSON File)