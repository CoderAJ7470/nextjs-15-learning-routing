export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'src/**/*.mjs'],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/no-unescaped-entities': 0,
      'react/jsx-no-target-blank': 'off',
      'react/no-unused-vars': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
