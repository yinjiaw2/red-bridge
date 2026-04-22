# Google Account Migration

Use `info@red-bridge.com.au` as the company-owned Google account for Red Bridge's Google Business Profile, Google Maps listing, and Google Analytics access.

## Google Business Profile / Maps

1. Sign in with the current personal owner account and open the Red Bridge Business Profile.
2. Go to Business Profile settings > People and access.
3. Invite `info@red-bridge.com.au` as an Owner.
4. Accept the invitation from `info@red-bridge.com.au`.
5. Wait 7 days if Google applies the new-owner limitation period.
6. From the current primary owner account, change `info@red-bridge.com.au` to Primary owner.
7. After confirming the company account can manage the profile, remove the personal account or reduce it to Manager only if it is still needed.

Important: transfer the existing Business Profile instead of creating a new Maps listing, so reviews and business details stay with the current listing.

## Google Analytics

The website reads the Analytics tag from `NEXT_PUBLIC_GA_ID`.

Current local value:

```env
NEXT_PUBLIC_GA_ID=G-B7DWL6EMN4
```

Preferred migration path:

1. Sign in to Google Analytics with the current personal administrator account.
2. Add `info@red-bridge.com.au` in Admin > Account or Property > Access Management.
3. Give `info@red-bridge.com.au` Administrator and Editor access.
4. If Red Bridge has a separate company Analytics account, move the existing GA4 property to that account. Google keeps the same tag ID when a property is moved, so the website does not need retagging.
5. If creating a brand-new GA4 property instead, replace `NEXT_PUBLIC_GA_ID` in local `.env` and the production hosting environment with the new `G-...` measurement ID.
6. After confirming Realtime reports are receiving traffic under the company account, remove or downgrade the personal account.

## Production Checklist

1. Confirm `info@red-bridge.com.au` is a Google Account or Google Workspace user.
2. Confirm the Business Profile primary owner is `info@red-bridge.com.au`.
3. Confirm Analytics access works from `info@red-bridge.com.au`.
4. Confirm production `NEXT_PUBLIC_GA_ID` matches the intended GA4 property.
5. Deploy after any `NEXT_PUBLIC_GA_ID` change because Next.js embeds public environment variables at build time.
