# Deploy instructions

TikTok will not accept `localhost` as the Website URL. Deploy this folder to a public URL.

Recommended simple options:

1. Cloudflare Pages
2. Netlify
3. GitHub Pages
4. Any paid domain hosting

After deployment, update these URLs in TikTok Developer Portal:

- Website URL: `https://YOUR-DOMAIN-HERE.com`
- Privacy Policy URL: `https://YOUR-DOMAIN-HERE.com/privacy.html`
- Terms of Service URL: `https://YOUR-DOMAIN-HERE.com/terms.html`

Important:

- Do not point Website URL to a login page.
- Do not point Website URL to localhost.
- Do not use a blank landing page.
- Make Privacy Policy and Terms visible from the public homepage.
- If your private dashboard requires login, provide a reviewer test account in the Apply Reason field.
