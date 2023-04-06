# Sorting project

# Commands

* ```tsc --index.ts``` : To create the index.js file.
* ```tsc --init``` : To create the tsconfig.json file.
* ```tsc -w```: To run on watch mode, meaning: on second plane is going to continuously run on each change and regenerate the builded files in the build directory.
# Settings
After creating the tsconfig.json file, we modify the two lines:

```
"rootDir": "./src",/* 
"outDir": "./build",
```

So the src is now the rootDir and the build dir is now the outDir.

After this, we can just run ```tsc``` in the terminal. And after that run the app with ```node build/index.js```.

Now we want to automatically do that.

Then we run

* ```npm init -y``` to create package.json 

Then we install:

* ```npm install nodemon concurrently ```

Then we edit the package.json with:

```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

* ```start``` Command will run concurrently the scripts that start with ```start```.

After all this we run ```npm start``` and it will compile and run the code.
