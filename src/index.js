#!/usr/bin/env node
import { program } from 'commander';
import { tweetShot } from '@deegeemee/tweetshot';
import ora from 'ora';

program.name('tweetshot-cli').description('Screenshot tweets!').version('0.0.1');

program
  .arguments('<tweetUrl> <outputFile>')
  .option('-w, --width <width>', 'Width of the screenshot, must be 220-550', 550)
  .option('-f, --format <format>', 'Output format, must be one of png, jpeg, or webp', 'webp')
  .option('-t, --theme <theme>', 'Theme to use, must be either light or dark', 'dark')
  .option(
    '-q, --quality <quality>',
    'Output quality, must be between 0 and 100, not applicable for png',
    100
  )
  .description('Take a screenshot of a tweet')
  .action(async (tweetUrl, outputFile, options) => {
    const spinner = ora(`Rendering tweet ${tweetUrl}`).start();
    return tweetShot({
      tweetUrl,
      outFile: outputFile,
      imageWidth: options.width,
      imageType: options.format,
      imageQuality: options.quality,
      theme: options.theme,
    })
      .then((output) => {
        spinner.succeed(
          `Tweet screenshot successfully saved to ${outputFile}, ${output.width}x${output.height}px, ${output.size} bytes`
        );
      })
      .catch((err) => {
        spinner.fail(`Error taking screenshot: ${err.message}`);
      });
  })
  .parse();
