import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoader } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    // выбирает от куда брать проект
    entry: paths.entry,
    // определяет куда складывать билд
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true, // очищает buid при каджой сборке
    },
    // Влияет на сборку вебпак
    plugins: buildPlugins(options),
    module: {
      // обрабатывать файлы которые не js, чтобы можно было использовать их в проекте
      rules: buildLoader(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
