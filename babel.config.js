module.exports = {
   presets: ['babel-preset-expo','module:metro-react-native-babel-preset'],
   plugins: [
      [
         'module-resolver',
         {
            alias: {
               // add your aliases here
               '@components': './src/components',
               '@screens': './src/screens',
            },
         },
      ],
   ],
};