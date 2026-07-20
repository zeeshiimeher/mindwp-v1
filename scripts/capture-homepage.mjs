#!/usr/bin/env node

import { runCapture } from "./capture-route.mjs";

await runCapture(process.argv.slice(2), {
  defaultRoute: "/",
  defaultOutputName: "mindwp-homepage-screenshots",
  filenamePrefix: "homepage",
});
