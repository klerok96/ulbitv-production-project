import webpack from "webpack";

export function buildResolve(): webpack.ResolveOptions {
  return {
    // позволяет игнорировать написание расширений
    extensions: [".tsx", ".ts", ".js"],
  };
}
