import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
    const joke = await getJoke();
    core.setOutput("joke", joke);
}

run();