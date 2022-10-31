import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../build/types/config';

export const buildCssLoader = (option: BuildOptions) => ({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings при дев
    // MiniCssExtractPlugin для создание отдельных файлов css для
    // прод чтобы не грузить все в js файле
    option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          // если не модуль, то не будет использовать модульный подход
          auto: (resPath: string) => resPath.includes('.module.'),
          localIdentName: option.isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
          exportLocalsConvention: 'camelCase',
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
});
