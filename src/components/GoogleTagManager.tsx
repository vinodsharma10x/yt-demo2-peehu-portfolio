"use client";

import Script from "next/script";

// Set NEXT_PUBLIC_GTM_ID (e.g. GTM-XXXXXXX) in the environment to enable.
// Everything else (GA4, Clarity, and any later tool) is configured inside the
// GTM container, not in code, so adding a tool is a GTM publish rather than a
// deploy. Renders nothing when the var is unset, which is why preview and local
// builds stay out of the production GA4 property.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Where a consent banner, if one is ever added, stores the visitor's choice.
const CONSENT_KEY = "gtm-consent";

export function GtmScript() {
  if (!GTM_ID) return null;
  // Consent Mode v2 defaults are set BEFORE the container loads, so Google tags
  // honour them from the very first request. Granted worldwide, denied in the
  // EEA/UK/CH until the visitor accepts. A previously stored choice wins.
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted',functionality_storage:'granted',personalization_storage:'granted',security_storage:'granted'});
gtag('consent','default',{region:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'],ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',wait_for_update:500});
try{var c=localStorage.getItem('${CONSENT_KEY}');if(c==='granted'||c==='denied'){gtag('consent','update',{ad_storage:c,ad_user_data:c,ad_personalization:c,analytics_storage:c,functionality_storage:c,personalization_storage:c});}}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
