import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import { blogPosts } from './data/blogData';

export function render(url) {
    return renderToString(
        <StaticRouter location={url}>
            <AppRoutes />
        </StaticRouter>
    );
}

const baseUrl = 'https://squareonehomeinspectors.com';

export const routesToPrerender = [
    {
        path: '/',
        title: 'Best Home Inspector Long Island & NY | Square One Home Inspection',
        description: 'Professional, licensed home inspection services in Long Island, NY. Square One offers expert inspections in Nassau, Suffolk, Queens & Brooklyn. Same-day reports & certified master inspectors.'
    },
    {
        path: '/services/home-inspection-long-island',
        title: 'Complete Long Island Home Inspection Guide (2026) | Square One NY',
        description: 'The definitive guide to home inspections in Long Island, Nassau, Suffolk, Queens & Brooklyn. Learn what our 500+ point NY State licensed inspection covers, typical costs, and local red flags.',
        jsonLd: {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Service',
                    name: 'Complete Long Island & NY Home Inspection',
                    serviceType: 'Residential Home Inspection',
                    provider: {
                        '@type': 'HomeAndConstructionBusiness',
                        name: 'Square One Professional Home Inspectors',
                        telephone: '+1-516-242-9556',
                        url: baseUrl
                    },
                    areaServed: ['Nassau County', 'Suffolk County', 'Queens', 'Brooklyn', 'Long Island'],
                    description: 'Comprehensive 500+ point NY State licensed home inspection covering structure, roof, electrical, plumbing, HVAC, and infrared thermal diagnostics.'
                },
                {
                    '@type': 'FAQPage',
                    mainEntity: [
                        {
                            '@type': 'Question',
                            name: 'How fast will I receive my home inspection report?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: 'We deliver our comprehensive, high-resolution photo-documented digital inspection report the same day.'
                            }
                        },
                        {
                            '@type': 'Question',
                            name: 'Should I bundle Termite (WDI) and Radon testing with my home inspection?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: 'Yes. Bundling Termite/WDI inspection and Radon testing during your primary inspection saves both time and money, and ensures all results arrive within your contract contingency period.'
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        path: '/services/termite-inspection-long-island',
        title: 'Termite & WDI Inspection Long Island | NPMA-33 Certified | Square One',
        description: 'Licensed Termite & Wood-Destroying Insect (WDI) inspections in Long Island, Nassau, Suffolk, Queens & Brooklyn. Official FHA/VA NPMA-33 reports delivered same day.',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Termite & Wood-Destroying Insect (WDI) Inspection Long Island',
            serviceType: 'Termite & WDI Inspection (NPMA-33)',
            provider: {
                '@type': 'HomeAndConstructionBusiness',
                name: 'Square One Professional Home Inspectors',
                telephone: '+1-516-242-9556',
                url: baseUrl
            },
            areaServed: ['Nassau County', 'Suffolk County', 'Queens', 'Brooklyn', 'Long Island'],
            description: 'Thorough visual and probing inspections for Eastern Subterranean Termites, carpenter ants, and powderpost beetles, including FHA/VA NPMA-33 clearance forms.'
        }
    },
    {
        path: '/services/radon-testing-long-island',
        title: 'Radon Testing Long Island & NY | 48-Hr Continuous Monitoring | Square One',
        description: 'Professional EPA-compliant Radon Testing in Long Island, Nassau, Suffolk, Queens & Brooklyn. Continuous electronic radon monitoring with hourly data for NY home buyers.',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Professional Radon Testing Long Island & NY',
            serviceType: 'Continuous Electronic Radon Monitoring',
            provider: {
                '@type': 'HomeAndConstructionBusiness',
                name: 'Square One Professional Home Inspectors',
                telephone: '+1-516-242-9556',
                url: baseUrl
            },
            areaServed: ['Nassau County', 'Suffolk County', 'Queens', 'Brooklyn', 'Long Island'],
            description: '48-hour EPA-compliant continuous electronic radon monitoring for real estate transactions across Long Island and New York City.'
        }
    },
    {
        path: '/blog',
        title: 'Long Island Home Inspection Blog & Buyer Guides | Square One NY',
        description: 'Expert home inspection articles, checklists, and local Long Island property guides by Certified Master Inspector Vinny Fundaro. Serving Nassau, Suffolk, Queens & Brooklyn.'
    },
    ...blogPosts.map((post) => ({
        path: `/blog/${post.slug}`,
        title: `${post.title} | Square One Home Inspection Blog`,
        description: post.excerpt,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            author: {
                '@type': 'Person',
                name: 'Vinny Fundaro',
                jobTitle: 'InterNACHI Certified Master Inspector & NYC Licensed Operating Engineer'
            },
            publisher: {
                '@type': 'Organization',
                name: 'Square One Professional Home Inspectors',
                url: baseUrl
            },
            mainEntityOfPage: `${baseUrl}/blog/${post.slug}`
        }
    }))
];
