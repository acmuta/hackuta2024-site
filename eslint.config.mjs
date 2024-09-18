import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    { ignores: ['.next/'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['src/components/ui/*.tsx'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'prefer-const': 'off',
        },
    },
    eslintConfigPrettier,
]
