# Nasr.ai — Final multi-chat package

This package contains two separate upload sets:

- `github-pages/` — upload these files to the existing GitHub Pages website repository.
- `vercel-backend/` — upload these files to a separate GitHub repository, then import that repository into Vercel.

## Files you must edit

### 1. Logo

Replace:

`github-pages/assets/logo.svg`

with your actual logo.

### 2. Vercel endpoint

In:

`github-pages/index.html`

replace:

`https://YOUR-PROJECT.vercel.app/api/chat`

with your real deployed Vercel endpoint.

### 3. Privacy email

In:

`github-pages/privacy.html`

replace every occurrence of:

`example@example.com`

with your actual privacy contact email.

## DeepSeek setup

Official pages:

- Platform and API key: https://platform.deepseek.com/
- First API call: https://api-docs.deepseek.com/
- Current models and prices: https://api-docs.deepseek.com/quick_start/pricing/

Create an API key and keep it private. Do not put it in GitHub Pages or any public repository.

The backend uses:

`deepseek-v4-flash`

with thinking mode disabled and a maximum response size of 900 tokens.

## Vercel backend deployment

Official pages:

- Vercel dashboard: https://vercel.com/
- Functions documentation: https://vercel.com/docs/functions
- Environment variables: https://vercel.com/docs/environment-variables

Steps:

1. Create a new GitHub repository, for example `nasr-ai-backend`.
2. Upload only the contents of `vercel-backend/` to that repository.
3. Sign in to Vercel with GitHub.
4. Select Add New → Project.
5. Import the backend repository.
6. Open Environment Variables and add:
   - `DEEPSEEK_API_KEY` — your real DeepSeek API key.
   - `ALLOWED_ORIGINS` — your website origins, comma-separated.
   - `DEEPSEEK_MODEL` — optional; use `deepseek-v4-flash`.
7. Apply the variables to Production. Preview is useful while testing.
8. Deploy.
9. Copy the deployment endpoint, normally:
   `https://YOUR-PROJECT.vercel.app/api/chat`
10. Paste that endpoint into `github-pages/index.html`.
11. Redeploy after changing environment variables, because changes apply only to new deployments.

Example allowed origins:

`https://nasr.ai,https://www.nasr.ai`

Do not add trailing slashes.

## GitHub Pages upload

Official pages:

- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart
- Custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

Steps:

1. Open the existing GitHub repository connected to Nasr.ai.
2. Upload the contents of `github-pages/` to the publishing root:
   - `index.html`
   - `privacy.html`
   - the `assets` folder containing `logo.svg`
3. Do not upload the `vercel-backend` folder to the public Pages repository.
4. Commit the changes.
5. Open Settings → Pages.
6. Under Build and deployment, select Deploy from a branch if it is not already enabled.
7. Select the correct branch, normally `main`, and the root folder.
8. Confirm the custom domain is set correctly.
9. Enable Enforce HTTPS when available.
10. Wait for GitHub Pages to publish the new commit.

## Test checklist

1. Open Nasr.ai in a private/incognito browser window.
2. Send one message.
3. Confirm the response appears and auto-scroll works.
4. Send a follow-up that relies on the previous message.
5. Refresh the page and confirm the conversation remains in the sidebar.
6. Create a second conversation.
7. Switch between both chats.
8. Delete one and confirm it disappears from that browser.
9. Test the mobile sidebar.
10. Open the Privacy Policy and verify the email is correct.
11. Confirm the browser console does not reveal the DeepSeek key.
12. Test that the Vercel endpoint rejects requests from an unapproved website origin.

## Limits in this starter

- Up to 20 recent messages are sent to DeepSeek.
- Each message is limited to 3,000 characters.
- Total submitted history is limited to 20,000 characters.
- Output is capped at 900 tokens.
- The browser retains at most 50 conversations.
- The basic in-memory rate limiter permits about five requests per minute per apparent client address.

The rate limiter is only best-effort. Separate Vercel serverless instances do not share the same memory.
Add persistent rate limiting or bot protection before heavily promoting the site.


## Automatic light and dark mode

The frontend now follows the visitor's operating-system or browser preference through
`prefers-color-scheme`.

- Dark system setting: dark interface
- Light system setting: light interface
- The logo always remains black artwork on a white circular background
- All logo containers use `border-radius: 100px`

No manual theme switch is included in this version.


## Logo and favicon update

- Logo containers remain circular with a permanent white background.
- Logo padding has been removed.
- Logo borders have been removed.
- `github-pages/assets/favicon.ico` is used as the browser-tab and URL-bar icon.
