# TikTok review resubmission text

Use this in the TikTok app review Apply Reason field after you deploy the website.

```text
We updated the Website URL to a fully developed public website for Flash Shopping Manager:

Website URL: https://YOUR-DOMAIN-HERE.com
Privacy Policy: https://YOUR-DOMAIN-HERE.com/privacy.html
Terms of Service: https://YOUR-DOMAIN-HERE.com/terms.html
Demo: https://YOUR-DOMAIN-HERE.com/demo.html

The website is public and does not require login to review the product overview, demo workflow, Privacy Policy, Terms of Service, contact details, and TikTok integration explanation.

Flash Shopping Manager is a creator workflow tool for organizing product assets, generating short promotional videos, preparing captions, and publishing creator-authorized content to connected platforms. TikTok is used only after the user connects their TikTok account through OAuth. The app does not store TikTok passwords.

If reviewer dashboard access is required, please use this test account:
Email: REVIEWER_EMAIL_HERE
Password: REVIEWER_PASSWORD_HERE

Test steps:
1. Open the public website and review the product overview, demo, Privacy Policy, and Terms.
2. Log in to the test dashboard if required.
3. Open Queue.
4. Select a prepared product video.
5. Review the generated caption and connected TikTok account.
6. Submit a TikTok test post through the approved Content Posting API workflow.
```

# TikTok support form response

If you contact support using the page in your screenshot, paste this structure:

```text
== Issue Description ==
Our production app changes were not approved because the Website URL was rejected. The reviewer note says the externally facing website must be fully developed and cannot be a landing or login page. We have updated the website to a public, fully developed product website with product overview, demo workflow, Privacy Policy, Terms of Service, and contact information. Please review the updated website URL and advise if any additional changes are required.

== App Credentials ==
App ID: 7661911805254387730
Client Key: CLIENT_KEY_HERE

== cURL Information ==
cURL Command: N/A - this is an app review / Website URL approval issue, not an API request failure.

== Steps to reproduce ==
1. Open the TikTok Developer Portal app review page.
2. Review the submitted Website URL.
3. The app change is rejected with the note: "Your externally facing website must be fully developed and cannot be a landing or login page."
4. Open the updated public website URL: https://YOUR-DOMAIN-HERE.com
5. Verify that the public site includes Home, Demo, Privacy Policy, Terms of Service, TikTok integration explanation, and Contact information without requiring login.

== Log ID ==
N/A - this issue is not related to a TikTok API response. No x-tt-logid is available because no API request failed.
```

# What to replace

- Replace `https://YOUR-DOMAIN-HERE.com` with your real deployed website URL.
- Replace `CLIENT_KEY_HERE` with the Client Key from your TikTok app page.
- Replace reviewer test credentials if your actual app dashboard requires login.
