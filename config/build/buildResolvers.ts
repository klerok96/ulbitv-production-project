import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    // позволяет игнорировать написание расширений
    extensions: ['.tsx', '.ts', '.js'],
    // для path tsconfig
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
