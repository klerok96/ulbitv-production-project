import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Dotenv from 'dotenv-webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new MiniCssExtractPlugin({
      // на выходе что выходит
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // для генерации html
    new HtmlWebpackPlugin({
      // ieper шаблон из папки паблик
      template: paths.html,
    }),
    // Показывает процесс сборки
    new webpack.ProgressPlugin(),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.IS_DEV': isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(
      {
        openAnalyzer: false,
      },
    ),
  ];
}
