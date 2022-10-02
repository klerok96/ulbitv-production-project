import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new MiniCssExtractPlugin({
      // на выходе что выходит
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    // для генерации html
    new HtmlWebpackPlugin({
      // ieper шаблон из папки паблик
      template: paths.html,
    }),
    // Показывает процесс сборки
    new webpack.ProgressPlugin(),
  ];
}
