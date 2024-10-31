import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import autoImport from './.eslintrc-auto-import.json' assert { type: 'json' }

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImport.globals
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    ignores: [
      'config/*',
      '.husky',
      '.local',
      'public/*',
      '.vscode',
      'node_modules'
    ]
  },
  {
    rules: {
      '@typescript-eslint/ban-types': 'off',
      'vue/multi-word-component-names': 'off', // 允许index文件存在
      '@typescript-eslint/no-explicit-any': ['off'], // 允许any类型
      'no-useless-escape': 0
    }
  }
]
