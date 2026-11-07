export const serviceLocationLinks = [
    { name: 'Long Island', to: '/areas-served/nassau-county' },
    { name: 'Brooklyn', to: '/areas-served/nyc-queens-brooklyn#brooklyn-neighborhoods' },
    { name: 'Queens', to: '/areas-served/nyc-queens-brooklyn#queens-neighborhoods' },
    { name: 'Manhattan', to: '/areas-served/nyc-queens-brooklyn#manhattan-condo-coop' },
    { name: 'Levittown', to: '/areas-served/nassau-county#levittown-hub' },
    { name: 'Nassau County', to: '/areas-served/nassau-county' },
    { name: 'Suffolk County', to: '/areas-served/suffolk-county' },
    { name: 'New York City', to: '/areas-served/nyc-queens-brooklyn' },
    { name: 'Valley Stream', to: '/areas-served/nassau-county#western-nassau' },
    { name: 'Commack', to: '/areas-served/suffolk-county#commack-huntington' },
    { name: 'Jamaica', to: '/areas-served/nyc-queens-brooklyn#queens-neighborhoods' },
    { name: 'Flushing', to: '/areas-served/nyc-queens-brooklyn#queens-neighborhoods' },
    { name: 'Elmont', to: '/areas-served/nassau-county#western-nassau' },
    { name: 'Westbury', to: '/areas-served/nassau-county#levittown-hub' },
    { name: 'Great Neck', to: '/areas-served/nassau-county#north-shore-nassau' },
    { name: 'Glen Cove', to: '/areas-served/nassau-county#north-shore-nassau' },
    { name: 'Long Beach', to: '/areas-served/nassau-county#south-shore-coastal' },
    { name: 'Roosevelt', to: '/areas-served/nassau-county#south-shore-coastal' },
    { name: 'Lynbrook', to: '/areas-served/nassau-county#western-nassau' },
    { name: 'Freeport', to: '/areas-served/nassau-county#south-shore-coastal' },
    { name: 'Freshmeadows', to: '/areas-served/nyc-queens-brooklyn#queens-neighborhoods' },
    { name: 'Forest Hills', to: '/areas-served/nyc-queens-brooklyn#queens-neighborhoods' },
    { name: 'Parkslope', to: '/areas-served/nyc-queens-brooklyn#brooklyn-neighborhoods' },
    { name: 'Sheepshead Bay', to: '/areas-served/nyc-queens-brooklyn#brooklyn-neighborhoods' }
];

export const regionalPillars = {
    'nassau-county': {
        slug: 'nassau-county',
        name: 'Nassau County',
        badge: 'Nassau County Local Pillar Hub',
        officeBadge: 'HQ: 11 Starlight Lane, Levittown, NY 11756',
        seoTitle: 'Best Home Inspector Nassau County & Levittown NY | Square One',
        seoDescription: 'Licensed Nassau County home inspector based in Levittown, NY. Expert pre-purchase, termite (WDI), radon & thermal imaging inspections in Great Neck, Garden City, Valley Stream, Freeport & Long Beach.',
        heroTitle: 'Nassau County & Levittown',
        heroAccent: 'Home Inspection Guide',
        heroSubtitle: 'Headquartered right in Levittown at 11 Starlight Lane, Square One Professional Home Inspectors has evaluated thousands of Nassau County homes—from expanded post-war Capes and Split-Levels to North Shore estates and South Shore waterfront properties.',
        townsCovered: [
            'Levittown', 'Westbury', 'East Meadow', 'Hicksville', 'Garden City',
            'Valley Stream', 'Elmont', 'Lynbrook', 'Rockville Centre',
            'Great Neck', 'Manhasset', 'Glen Cove', 'Syosset',
            'Freeport', 'Long Beach', 'Roosevelt', 'Massapequa', 'Merrick'
        ],
        sections: [
            {
                id: 'levittown-hub',
                title: '1. Central Nassau: Levittown, Westbury, Hicksville & East Meadow',
                paragraphs: [
                    'As a Levittown-based home inspection company, we know the anatomy of Central Nassau’s post-war housing stock inside and out. Built largely between 1947 and 1960, original Levittown Capes and Ranches were constructed on concrete slabs with copper hot-water radiant heating coils embedded directly inside the slab.',
                    'Over 70+ years, almost every home in Levittown, Westbury, and Hicksville has undergone major structural additions—rear dormers, second-story expansions, garage conversions, and kitchen bump-outs. We inspect header spans, roof framing tie-ins, abandoned underground heating oil tanks, and use infrared thermal cameras to scan in-slab radiant heating loops for hidden leaks.'
                ],
                calloutTitle: 'Levittown & Central Nassau Inspector Focus',
                calloutText: 'Always verify whether original in-slab copper heating coils are still active or have been properly bypassed with baseboard convectors, and check for buried or enclosed fuel oil tanks.'
            },
            {
                id: 'western-nassau',
                title: '2. Western Nassau: Valley Stream, Elmont, Lynbrook & Garden City',
                paragraphs: [
                    'Western Nassau features a dense mix of 1920s–1940s Colonials, brick Tudors, and Cape Cod homes on full basements. Because these homes are approaching 80 to 100 years old, our inspection zeroes in on aging cast-iron waste lines, galvanized water supply piping (which restricts water pressure), ungrounded 2-prong or cloth-sheathed electrical wiring, and Federal Pacific "Stab-Lok" breaker panels.',
                    'We also closely inspect basement foundation walls and sump pump systems for hydrostatic water table intrusion after heavy rains.'
                ]
            },
            {
                id: 'north-shore-nassau',
                title: '3. North Shore Nassau: Great Neck, Glen Cove, Manhasset & Roslyn',
                paragraphs: [
                    'The Gold Coast and North Shore of Nassau County feature larger custom Colonials, historic Tudors, and hilly terrain with steep grades and retaining walls. Multi-zone hydronic boilers, slate or cedar shake roofs, complex roof valleys, and older stone/masonry foundations require an inspector with deep mechanical engineering experience.',
                    'In hilly North Shore areas with glacial granite deposits, we also strongly recommend pairing your inspection with a 48-hour Continuous Radon Monitor test and a thorough Wood-Destroying Insect (WDI) evaluation.'
                ]
            },
            {
                id: 'south-shore-coastal',
                title: '4. South Shore & Barrier Island: Long Beach, Freeport, Roosevelt & Merrick',
                paragraphs: [
                    'Properties along Nassau’s South Shore and barrier island face high coastal water tables, salt-air corrosion on HVAC condensers and electrical meter pans, and FEMA flood-zone considerations. In Long Beach and Freeport, we carefully inspect crawlspaces, structural wood pilings, sill plates, subfloor moisture levels, and exterior decks for rot and subterranean termite activity.'
                ]
            }
        ],
        tableData: {
            caption: 'Nassau County Home Inspection Priorities by Area',
            rows: [
                {
                    area: 'Levittown, Westbury & Hicksville',
                    era: '1947–1960 Post-War Capes, Ranches & Split-Levels',
                    defects: 'In-slab radiant heating leaks, buried oil tanks, unreinforced dormer framing, slab expansion joint termites',
                    recommended: 'Thermal Imaging + Termite (WDI) Inspection'
                },
                {
                    area: 'Valley Stream, Elmont & Lynbrook',
                    era: '1920s–1950s Colonials & Tudors on Full Basements',
                    defects: 'Federal Pacific panels, aging steam/hydronic boilers, basement seepage, chimney mortar deterioration',
                    recommended: 'Full Home Inspection + Radon & Termite'
                },
                {
                    area: 'Great Neck & Glen Cove (North Shore)',
                    era: 'Historic Estates, Custom Colonials & Split-Levels',
                    defects: 'Slate/complex roof flashing leaks, multi-zone HVAC issues, retaining wall movement, elevated basement radon',
                    recommended: '48-Hr Continuous Radon Test + Full Inspection'
                },
                {
                    area: 'Long Beach, Freeport & Roosevelt',
                    era: 'Coastal Bungalows, High-Ranches & Elevated Homes',
                    defects: 'High water-table crawlspace moisture, salt corrosion on electrical/AC units, wood-destroying insects in damp sills',
                    recommended: 'Moisture/Thermal Scan + Mold & Termite (WDI)'
                }
            ]
        },
        faqs: [
            {
                q: 'How quickly can you schedule a home inspection in Nassau County?',
                a: 'Because our main Long Island office is located right in Levittown (11 Starlight Lane), we can typically schedule Nassau County inspections within 24–48 hours—including Saturday and Sunday appointments—and deliver your complete digital report the same day.'
            },
            {
                q: 'Do you use thermal imaging on Levittown slab homes?',
                a: 'Yes! Infrared thermal imaging is one of the best non-invasive ways to evaluate hot-water radiant heating coils embedded in Levittown concrete slabs, helping identify cold zones or abnormal thermal blooms that suggest a sub-slab leak.'
            },
            {
                q: 'Are termite (WDI) inspections necessary in Nassau County?',
                a: 'Absolutely. Nassau County sits in a very active Eastern Subterranean Termite zone. We perform thorough WDI inspections and issue official NPMA-33 clearance forms required by FHA, VA, and conventional mortgage lenders.'
            }
        ]
    },
    'suffolk-county': {
        slug: 'suffolk-county',
        name: 'Suffolk County',
        badge: 'Suffolk County Local Pillar Hub',
        officeBadge: 'Serving All Western & Eastern Suffolk Towns',
        seoTitle: 'Best Suffolk County Home Inspector | Commack, Huntington & LI | Square One',
        seoDescription: 'Licensed Suffolk County home inspection services in Commack, Huntington, Babylon, Islip, Smithtown & Brookhaven. Same-day reports, NPMA-33 Termite (WDI) & 48-Hr Radon testing.',
        heroTitle: 'Suffolk County & Commack',
        heroAccent: 'Home Inspection Guide',
        heroSubtitle: 'From sprawling Colonials and High-Ranches in Commack, Huntington, and Smithtown to South Shore waterfront homes in Babylon and Islip, Square One delivers master-level home inspections across Suffolk County.',
        townsCovered: [
            'Commack', 'Huntington', 'Dix Hills', 'Melville', 'Smithtown',
            'Babylon', 'Lindenhurst', 'West Islip', 'Bay Shore', 'Sayville',
            'Hauppauge', 'kings Park', 'Northport', 'Patchogue', 'Brookhaven'
        ],
        sections: [
            {
                id: 'commack-huntington',
                title: '1. Western Suffolk: Commack, Huntington, Dix Hills & Smithtown',
                paragraphs: [
                    'Western Suffolk townships like Commack, Huntington, and Smithtown are known for 1960s–1980s Center-Hall Colonials, sprawling Ranches, and Split-Levels set on wooded quarter-acre to full-acre lots. Mature trees and shaded rooflines frequently lead to heavy moss accumulation on roof shingles, clogged underground drywells, and carpenter ant or subterranean termite activity along foundation sill plates.',
                    'We inspect multi-zone heating and central air conditioning systems, evaluate attic ventilation and insulation, and scan electrical distribution panels and sub-panels for safe operation.'
                ],
                calloutTitle: 'Suffolk County Soil & Termite Alert',
                calloutText: 'Suffolk County’s sandy, well-drained pine-barrens soil and wooded lots create ideal conditions for Eastern Subterranean Termites and carpenter ants. Always bundle a WDI inspection when buying in Suffolk.'
            },
            {
                id: 'septic-cesspool-drainage',
                title: '2. Private Waste Systems (Cesspools & Septic), Well Water & Drainage',
                paragraphs: [
                    'Unlike NYC and much of Nassau County, a large percentage of Suffolk County homes rely on private on-site wastewater systems (older precast concrete or block cesspools and septic tanks) rather than municipal sewers. During our home inspection, we evaluate visible interior waste piping, functional drainage flow under sustained water load, and identify cleanout/system locations.',
                    'For homes in northern or eastern Suffolk on private wells, we also offer comprehensive laboratory water quality testing for bacteria, nitrates, lead, and volatile organic compounds.'
                ]
            },
            {
                id: 'suffolk-south-shore',
                title: '3. South Shore Suffolk: Babylon, Lindenhurst, Islip & Great South Bay',
                paragraphs: [
                    'Homes near the Great South Bay in Babylon, Lindenhurst, West Islip, and Bay Shore contend with high groundwater tables, crawlspace humidity, and coastal wind exposure. We inspect basement sump pumps, vapor barriers, structural girders and floor joists in crawlspaces, and check decks, bulkheads, and exterior siding for moisture intrusion.'
                ]
            }
        ],
        tableData: {
            caption: 'Suffolk County Home Inspection Priorities by Township',
            rows: [
                {
                    area: 'Commack, Huntington & Dix Hills',
                    era: '1960s–1990s Colonials, Split-Levels & Contemporaries',
                    defects: 'Subterranean termites on wooded lots, roof valley wear, aging multi-zone HVAC, underground oil tanks',
                    recommended: 'Full Inspection + Termite (WDI) & Radon'
                },
                {
                    area: 'Smithtown, Hauppauge & Kings Park',
                    era: 'Ranches, High-Ranches & Expanded Capes',
                    defects: 'Elevated basement radon levels, double-tapped electrical panels, attic moisture/mold from bath fans venting into attic',
                    recommended: '48-Hr Continuous Radon Monitor + Mold Check'
                },
                {
                    area: 'Babylon, Lindenhurst & Islip (South Shore)',
                    era: 'Waterfront Capes, High-Ranches & Raised Homes',
                    defects: 'Crawlspace wood rot & moisture, high water-table seepage, salt-air HVAC corrosion, deck ledger flashing failures',
                    recommended: 'Thermal/Moisture Scan + Termite (WDI)'
                }
            ]
        },
        faqs: [
            {
                q: 'Is Radon testing recommended in Suffolk County?',
                a: 'Yes. Parts of Huntington, Smithtown, Commack, and Brookhaven sit over glacial moraine deposits where elevated basement radon levels (above the EPA 4.0 pCi/L action threshold) are regularly detected during real estate transactions.'
            },
            {
                q: 'Do you inspect High-Ranches and mother-daughter homes in Suffolk?',
                a: 'Yes! High-Ranches and accessory-apartment setups are extremely common in Suffolk County. We inspect secondary kitchens, egress windows, electrical sub-panels, and heating zone distribution thoroughly.'
            },
            {
                q: 'How fast do I get my Suffolk County inspection report?',
                a: 'Your full illustrated digital PDF report—complete with high-resolution photos, thermal images, and clear summary priorities—is delivered the exact same day as your inspection.'
            }
        ]
    },
    'nyc-queens-brooklyn': {
        slug: 'nyc-queens-brooklyn',
        name: 'NYC: Queens, Brooklyn & Manhattan',
        badge: 'NYC Boroughs Local Pillar Hub',
        officeBadge: 'Brooklyn Office: 510 Drew Street, Brooklyn, NY 11208',
        seoTitle: 'Queens & Brooklyn Home Inspector | Multi-Family, Brownstone & NYC | Square One',
        seoDescription: 'Licensed NYC Home Inspector & Operating Engineer serving Queens (Forest Hills, Flushing, Jamaica, Fresh Meadows), Brooklyn (Park Slope, Sheepshead Bay) & Manhattan.',
        heroTitle: 'Queens, Brooklyn & NYC',
        heroAccent: 'Home & Building Inspection Guide',
        heroSubtitle: 'With our Brooklyn office at 510 Drew Street and Vinny Fundaro’s background as an NYC Licensed Operating Engineer, Square One brings unmatched mechanical and structural expertise to 1-to-4 family homes, brownstones, townhomes, and condos across NYC.',
        townsCovered: [
            'Queens', 'Brooklyn', 'Manhattan', 'New York City',
            'Forest Hills', 'Flushing', 'Fresh Meadows', 'Jamaica', 'Bayside', 'Astoria',
            'Park Slope', 'Sheepshead Bay', 'Bay Ridge', 'Brooklyn Heights', 'East New York'
        ],
        sections: [
            {
                id: 'queens-neighborhoods',
                title: '1. Queens Inspections: Forest Hills, Flushing, Fresh Meadows & Jamaica',
                paragraphs: [
                    'Queens features one of the most diverse residential architectures in New York—from historic Tudor and brick homes in Forest Hills and Fresh Meadows to detached Colonials in Flushing and multi-family investment properties in Jamaica. Inspecting Queens properties requires special attention to flat and low-slope roof membranes, parapet wall coping stones, shared party walls, and aging cast-iron main house traps.',
                    'We also inspect legal vs. non-conforming basement and attic conversions, checking for proper electrical circuit sizing, safe heating distribution, and emergency egress.'
                ],
                calloutTitle: 'NYC Licensed Operating Engineer Expertise',
                calloutText: 'Many Queens and Brooklyn homes rely on one-pipe or two-pipe steam boilers, hydronic heating plants, and complex multi-meter electrical services. Vinny Fundaro’s credential as an NYC Licensed Operating Engineer ensures your building’s mechanical heart is evaluated by a true specialist.'
            },
            {
                id: 'brooklyn-neighborhoods',
                title: '2. Brooklyn Inspections: Park Slope, Sheepshead Bay & Brownstone Brooklyn',
                paragraphs: [
                    'From pre-war brownstones and limestone rowhouses in Park Slope to attached brick multi-families and semi-detached homes in Sheepshead Bay, Bay Ridge, and East New York, Brooklyn buildings present unique structural and mechanical challenges.',
                    'We evaluate brownstone facade spalling, brick mortar repointing, flat roof ponding and modified bitumen/EPDM membranes, cellar floor joists Pocketed into masonry party walls, lead/galvanized water service lines, and legacy cloth-insulated or knob-and-tube electrical wiring.'
                ]
            },
            {
                id: 'manhattan-condo-coop',
                title: '3. Manhattan & NYC Townhouse, Condo & Co-Op Inspections',
                paragraphs: [
                    'Buying a luxury townhouse, condo, or co-op in Manhattan, Brooklyn, or Queens? Even when a condo association maintains the exterior envelope, interior leaks from PTAC/HVAC units, radiant floors, windows, electrical sub-panels, and plumbing risers above your ceiling can cost tens of thousands of dollars. We use non-invasive thermal imaging cameras and moisture meters to scan ceilings, walls, and floors before you close.'
                ]
            }
        ],
        tableData: {
            caption: 'NYC Borough Home & Multi-Family Inspection Focus Areas',
            rows: [
                {
                    area: 'Queens (Forest Hills, Flushing, Fresh Meadows, Jamaica)',
                    era: '1920s–1960s Brick Tudors, Detached Colonials & 2-Family Homes',
                    defects: 'Flat roof ponding, parapet flashing leaks, galvanized water pipe low pressure, overloaded multi-family electrical panels',
                    recommended: 'Full Multi-Family Inspection + Thermal Roof Scan'
                },
                {
                    area: 'Brooklyn (Park Slope, Sheepshead Bay, Bay Ridge)',
                    era: 'Pre-War Brownstones, Rowhouses & Attached Brick Multi-Families',
                    defects: 'Steam boiler short-cycling/Hartford loop issues, party-wall joist moisture, cellar seepage, cloth-sheathed wiring',
                    recommended: 'Full Structural/Mechanical + Termite (WDI)'
                },
                {
                    area: 'Manhattan & Luxury NYC Condos / Townhouses',
                    era: 'Historic Townhouses & Modern High-Rise Condos/Co-Ops',
                    defects: 'Concealed window/terrace water intrusion, PTAC/fan-coil leaks, custom bathroom shower pan leaks',
                    recommended: 'Infrared Thermal & Moisture Diagnostic Inspection'
                }
            ]
        },
        faqs: [
            {
                q: 'Do you inspect 2-family, 3-family, and 4-family homes in Queens and Brooklyn?',
                a: 'Yes! Multi-family properties in Queens and Brooklyn are one of our core specialties. We inspect every unit, common utility room, separate gas/electric meters, boilers, water heaters, and flat roofs.'
            },
            {
                q: 'How do you inspect flat roofs on Brooklyn and Queens buildings?',
                a: 'We inspect flat roofs for ponding water, alligatoring/blistering in bitumen membranes, flashing separation along parapet walls and skylights, and combine our exterior check with interior infrared thermal scanning of top-floor ceilings.'
            },
            {
                q: 'Are subterranean termites also an issue in Queens and Brooklyn?',
                a: 'Yes—even attached brick homes and brownstones in Queens and Brooklyn have wooden floor joists, sill plates, and subfloors that frequently suffer subterranean termite damage, especially around damp cellars and rear yard extensions.'
            }
        ]
    }
};

export const getRegionalPillar = (slug) => regionalPillars[slug];
