# @deegeemee/tweetshot-cli

A Node.js CLI tool to take screenshots of tweets

## Installation

```bash
npm install -g @deegeemee/tweetshot-cli
```

## Usage

```bash
Usage: tweetshot-cli [options] <tweetUrl> <outputFile>

Take a screenshot of a tweet

Options:
  -V, --version            output the version number
  -w, --width <width>      Width of the screenshot, must be 220-550 (default: 550)
  -f, --format <format>    Output format, must be one of png, jpeg, or webp (default: "webp")
  -t, --theme <theme>      Theme to use, must be either light or dark (default: "dark")
  -q, --quality <quality>  Output quality, must be between 0 and 100, not applicable for png (default: 100)
  -h, --help               display help for command
```
