async function handleRequest(request:any) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/weather")) {
        const res = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/140000.json')
        return new Response(res.body, {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        });
    }


    return new Response(
        "<html> Hello </html>",
        {
            status: 200,
            headers: {
                "content-type": "text/html; charset=UTF-8",
            },
        },
    );
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});