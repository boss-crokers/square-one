import { useEffect } from 'react';

const SEOHead = ({ title, description, canonicalPath = '/' }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', description);
        }

        const baseUrl = 'https://squareonehomeinspectors.com';
        const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', `${baseUrl}${cleanPath}`);
    }, [title, description, canonicalPath]);

    return null;
};

export default SEOHead;
