$.getJSON('../config.json', function(config) {
    const SECRET_KEY = config.secret_key;
    // Your Turnstile code here
    async function handlePost(request) {
        const body = await request.formData();
        // Turnstile injects a token in "cf-turnstile-response".
        const token = body.get('cf-turnstile-response');
        const ip = request.headers.get('CF-Connecting-IP');
        // Validate the token by calling the
        // "/siteverify" API endpoint.
        let formData = new FormData();
        formData.append('secret', SECRET_KEY);
        formData.append('response', token);
        formData.append('remoteip', ip);
        const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const result = await fetch(url, {
            body: formData,
            method: 'POST'
        });
        const outcome = await result.json();
        outcome.success;
    }
});

//# sourceMappingURL=index.fbc7aa77.js.map
