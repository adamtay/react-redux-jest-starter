module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
        // This should be the last configuration in the extends array.
        'plugin:prettier/recommended'
    ],
    plugins: ['react-hooks', 'jsx-a11y', 'prettier'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true
    }
};
