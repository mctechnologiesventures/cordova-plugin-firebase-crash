const path = require("path");
const ConfigParser = require("cordova-common").ConfigParser;

module.exports = {
  BUILD_PHASE_COMMENT: "Crashlytics",

  getXcodeProjectPath: function (context) {
    const appName = new ConfigParser("config.xml").name();
    return path.join(
      "platforms",
      "ios",
      appName + ".xcodeproj",
      "project.pbxproj"
    );
  },
};
