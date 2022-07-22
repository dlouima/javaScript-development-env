/* eslint-disable no-console */

import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = "production";

console.log(
    "Generation minified bundle for production. that will take some time"
);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map((error) => console.log(chalk.red(error)));
    }
    if (jsonStats.hasWrnings) {
        console.log(chalk.yellow("webpack generated the following warning: "));
        jsonStats.warnings.map((warning) => console.log(chalk.yellow(warning)));
    }
    console.log(`Webpack starts: ${stats}`);
    console.log(
        chalk.green("Your app has built for production and written to /dist")
    );
    return 0;
});
