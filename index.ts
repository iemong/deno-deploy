async function handleRequest(request) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/weather")) {
        const res = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/140000.json')
        const json = await res.json()

        return new Response(json, {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        });
    }
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});