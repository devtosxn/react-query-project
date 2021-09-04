module.exports = {
  root: true, // Makes sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Uses the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enables JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detects the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // This is the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    indent: ['error', 2],
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx']
    }
  ]
};
