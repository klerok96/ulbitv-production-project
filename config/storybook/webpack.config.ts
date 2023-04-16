import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { BuildOptions, BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../loaders/buildCssLoader';
import { buildSvgLoader } from '../loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  const options: BuildOptions = {
    mode: 'development',
    paths,
    isDev: true,
    port: 0,
  };

  if (
    !config.resolve ||
    !config.resolve.modules ||
    !config.resolve.extensions ||
    !config.module ||
    !config.module.rules
  ) {
    throw new Error('Config has empty object');
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader(options));

  config.plugins?.push(new DefinePlugin({ __IS_DEV__: true }));

  return config;
};
