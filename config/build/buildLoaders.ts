import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoader(option: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = {
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
  };

  // если не используем тайскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [['i18next-extract', { locales: ['ru', 'en'] }]],
      },
    },
  };

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
