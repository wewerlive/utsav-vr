module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    // General rules
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-extra-semi': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-arrow-callback': 'warn',
    'arrow-spacing': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'always-multiline'],
    'max-len': ['warn', { code: 80 }],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'linebreak-style': ['warn', 'windows'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],

    // React specific rules
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'warn',
  },
};
