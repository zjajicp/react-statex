module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    // enable additional rules
    "import/prefer-default-export": "off",
    "eslint(react/jsx-filename-extension": "off",
    "react/destructuring-assignment":"off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "prefer-destructuring": ["off"],
    "max-len": ["error", 125],
    "comma-dangle": ["off"],
    "arrow-parens": ["off"],
    "object-curly-newline": ["error", {
      "ObjectExpression": {
        "minProperties": 1
      },
      "ObjectPattern": {
        "minProperties": 6,
        "multiline": true
      }
    }],
    "arrow-body-style": ["warn"],
    "function-paren-newline": ["error", "consistent"]
  },
  "globals": {
      "test": true,
      "expect": true,
      "describe": true,
      "xdescribe": true,
      "jest": true,
      "beforeEach": true,
      "afterEach": true,
      "xtest": true
  }
};