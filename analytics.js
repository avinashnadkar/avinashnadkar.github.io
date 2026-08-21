(function initializeGoogleAnalytics() {
    const measurementId = document
        .querySelector('meta[name="google-analytics-id"]')
        ?.getAttribute('content')
        ?.trim();

    if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId) || measurementId === 'G-XXXXXXXXXX') {
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
}());
