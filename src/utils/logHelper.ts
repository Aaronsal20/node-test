import chalk from "chalk";

export const log = console.log;

export const infoChalk = (message?: any, ...optionalParams: any[]) =>
  log(chalk.blue.bold(`${message}`), ...optionalParams);

export const successChalk = (message?: any, ...optionalParams: any[]) =>
  log(chalk.hex("#27AE60")(`${message}`), ...optionalParams);

export const errorChalk = (message?: any, ...optionalParams: any[]) => {
  log(chalk.white.bgRed.bold(`${message}`), ...optionalParams);
};

console.info = (message?: any, ...optionalParams: any[]) =>
  log(chalk.hex("#615ae8")(`${message}`), ...optionalParams);

console.error = (message?: any, ...optionalParams: any[]) => {
  log(chalk.white.bgRed.bold(`${message}`), ...optionalParams);
};

console.log = (message?: any, ...optionalParams: any[]) =>
  log(chalk.hex("#e3e85c")(`${message}`), ...optionalParams);

console.warn = (message?: any, ...optionalParams: any[]) =>
  log(chalk.white.bgHex("#d25900")(`${message}`), ...optionalParams);
