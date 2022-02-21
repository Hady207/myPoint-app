module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './app/assets',
          '@components': './app/components',
          '@atoms': './app/components/atoms',
          '@molecules': './app/components/molecules',
          '@organisms': './app/components/organisms',
          '@containers': './app/containers',
          '@config': './app/config',
          '@hooks': './app/hooks',
          '@localization': './app/localization',
          '@navigations': './app/navigations',
          '@redux': './app/redux',
          '@services': './app/services',
          '@socket': './app/socket',
          '@styles': './app/styles',
          '@utils': './app/utils',
        },
      },
    ],
  ],
};
