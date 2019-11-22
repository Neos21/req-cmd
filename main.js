#!/usr/bin/env node

/** The Function */
function reqCmd() {
  console.log('@neos21/req-cmd by Neo (@Neos21) http://neo.s21.xrea.com/');
}

if(process.env.npm_lifecycle_script === 'req-cmd') {
  // Executed 'req-cmd' command
  reqCmd();
}
else {
  // Otherwise : require()
  module.exports = reqCmd;
}
