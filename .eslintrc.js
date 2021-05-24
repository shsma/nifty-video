module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', { singleQuote: true, tabWidth: 4 }],
        '@typescript-eslint/indent': ['error', 4],
        'no-undef': 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        camelcase: [2, { properties: 'always' }],
        eqeqeq: ['error', 'smart'],
        'no-caller': 2,
        'default-case': 2,
        'use-isnan': 2,
        'no-duplicate-imports': 0,
        'no-sequences': 'error',
        'eol-last': ['error', 'always'],
        curly: 'error',
        'no-empty-function': 'error',
        'max-lines': [
            'error',
            { max: 1000, skipBlankLines: true, skipComments: true }
        ],
        complexity: ['error', 12],
        'max-lines-per-function': ['error', { max: 700 }],
        'max-params': ['error', 8],
        'consistent-return': 'error',
        'max-len': [
            'error',
            {
                code: 180,
                tabWidth: 4,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true
            }
        ],
        'prefer-const': 'error',
        'no-magic-numbers': [0, { ignore: [-1, 0, 1, 2] }],
        'object-shorthand': 'error',
        'no-labels': ['error', { allowLoop: true, allowSwitch: true }],
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-shadow': 'error',
        'no-self-compare': 'error',
        '@typescript-eslint/prefer-for-of': 2,
        '@typescript-eslint/explicit-function-return-type': [
            1,
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true
            }
        ]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
