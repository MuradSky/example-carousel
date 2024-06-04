(()=> {
    const location = window.location
    const params = location.search || decodeURIComponent(location.pathname).replace(/[/?]/g, '')
    const urlParams = new URLSearchParams(params)
    detectMobileAppParams()

    if (location.pathname === '/profile' && urlParams.has('token')) {
        window.history.pushState({}, document.title, '/profile')
        document.cookie = `_kfc_token=${urlParams.get('token')}`
        document.cookie = `_kfc_expires_in=${urlParams.get('expires_in')}`
    }

    if (urlParams.has('uuid') && urlParams.has('confirmation')) {
        window.history.pushState({}, document.title, '/')
        document.cookie = `_kfc_email_token=${urlParams.get('confirmation')}`
        document.cookie = `_kfc_email_uuid=${urlParams.get('uuid')}`
    }

    function detectMobileAppParams() {
        const isQuery = urlParams.has('app_version') || urlParams.has('device_id') || urlParams.has('device_name') || urlParams.has('platform')
        if (isQuery) {
            const deviceData = {}
            for (const [key, value] of urlParams.entries()) {
                deviceData[key] = value
            }
            localStorage.setItem('_device_data', JSON.stringify(deviceData))
        }
    }
})()
