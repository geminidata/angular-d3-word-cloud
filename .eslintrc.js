module.exports = {
   "env": {
      "commonjs": true,
      "es6": true,
      "browser": true
   },
   "extends": ["eslint:recommended", "angular"],
   "globals": {
      "before": true,
      "beforeEach": true,
      "d3": true,
      "describe": true,
      "expect": true,
      "inject": true,
      "it": true,
      "process": true,
      "spyOn": true,
      "__dirname": true,
      "__testBase": true,
      "$": true
   },
   "rules": {
      "indent": [
         "error",
         3
      ],
      "angular/controller-as-vm": "off",
      "angular/log": "off",
      "angular/angularelement": "off",
      "no-undef": "error",
      "no-console": "off",
      "linebreak-style": [
         "error",
         "windows"
      ],
      "quotes": [
         "error",
         "single"
      ],
      "semi": [
         "error",
         "always"
      ]
   }
};
