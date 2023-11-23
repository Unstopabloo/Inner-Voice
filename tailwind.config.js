import { nextui } from '@nextui-org/react'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#0070F0',
      back: '#000',
      container: 'hsl(240, 2%, 8%, 60%)',
      gray: '#1E1E1E',
      fore: '#A1A1AA'
    }
  },
  darkMode: 'class',
  plugins: [nextui({})]
}
