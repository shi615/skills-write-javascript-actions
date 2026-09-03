import request from "request-promise"

const options = {
    mothod: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Write javaScript action GitHub Skills exercise.",
    },
    json: true,
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

export default getJoke;