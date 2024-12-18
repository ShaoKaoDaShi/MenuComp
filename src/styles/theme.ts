export const theme = {
  colors: {
    primary: '#3b82f6',
    primaryLight: '#eff6ff',
    text: {
      primary: '#374151',
      secondary: '#6b7280',
    },
    background: {
      main: '#f3f4f6',
      paper: '#ffffff',
    },
    hover: {
      background: '#f3f4f6',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem'
  },
  shadows: {
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  }
} as const;