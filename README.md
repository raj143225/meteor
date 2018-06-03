Prerequisites:
--------------
 - npm >= v5.6.0
 - node >= v10.2.1
 - meteor >= 1.6.1.1

Clone:
-----
git clone https://github.com/raj143225/meteor.git /path/to/dir
cd /path/to/dir

Development setup:
-----------
```cmd
Start database server first:
  meteor mongo (from project's root)

Open another terminal and chnage to project path:
Steps:-
 meteor npm install
 meteor --port 3000

```

Production Build Steps:
----------------------
```cmd
 npm install --production
 meteor build /path/to/build --architecture os.linux.x86_64
 cd my_build_bundle_directory
 cd programs/server
 npm install
 cd ../../
 MONGO_URL=mongodb://******:*******@ds147440.mlab.com:47440/learn-tasks ROOT_URL=https://react-meteor-demo.herokuapp.com/ node main.js
```

Demo:
----
https://react-meteor-demo.herokuapp.com/

- Deployed Mondo DB in mLab
- Deployed production build in heroku