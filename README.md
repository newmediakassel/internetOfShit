# InternetOfShit

## How to run this Session

### Install Node.js

Make sure you have [Node.js](https://nodejs.org/) installed by running `node --version` in your terminal. The version should be `v4.*.*`.  
If you haven't installed the Node.js program on your machine simply download the Long-Term-Support (v4) Version [here](https://nodejs.org/en/download/) and you're good to go.
If you've already installed another version of Node.js I suggest the [node version manager](https://github.com/creationix/nvm) ([windows version](https://github.com/coreybutler/nvm-windows)) to switch Node.js versions easily.


### Prepare Arduino

Download the [Arduino-Software](http://arduino.cc/) and upload the __Examples__ -> __Firmata__ -> __StandardFirmata__ to the board.

### Get the Code

```bash
# clone the repo
# NOTE: If you already cloned the repo run 'git pull' inside the repo folder instead to fetch the latest sessions and updates.
git clone https://github.com/newmediakassel/internetOfShit.git internetOfShit-repo

# jump into the repository folder
cd internetOfShit-repo

# switch to the session-02 branch
git checkout session-03
```

### Run the Code

```bash
# install dependencies
npm install

# run it!
node wind-turbine
```
