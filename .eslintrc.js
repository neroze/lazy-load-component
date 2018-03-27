module.exports = {
    "extends": "standard",
    "plugins": [
        "class-property"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules":{
      "no-var": "error",
      "indent": ["error", "tab"],
      "no-tabs": 0,
      "no-multi-spaces": 1,
    	"no-irregular-whitespace": 1,
    	"no-mixed-spaces-and-tabs": 1,
    	"react/jsx-closing-bracket-location": 1,
      "react/jsx-equals-spacing": 1,
      "react/jsx-no-undef": 1,
      "react/jsx-indent": [
        1,
        "tab"
      ],
      "react/jsx-indent-props": [
        1,
        "tab"
      ],
      "react/jsx-tag-spacing": [
        1,
        {
          "beforeSelfClosing": "always"
        }
      ],
    }
};