import { useState } from 'react';
import { Sun, CloudRain, Snowflake, Leaf, CheckCircle, Download } from 'lucide-react';
import './MaintenanceResources.css';

const seasonalData = [
    {
        id: 'spring',
        icon: <CloudRain size={24} />,
        title: 'Spring Maintenance',
        color: '#4ADE80',
        bg: '#DCFCE7',
        tasks: [
            "Inspect roof shingles for winter damage.",
            "Clean gutters and downspouts.",
            "Check attic for leaks or moisture.",
            "Service your AC unit before summer starts.",
            "Inspect concrete slabs for signs of cracking."
        ]
    },
    {
        id: 'summer',
        icon: <Sun size={24} />,
        title: 'Summer Maintenance',
        color: '#FACC15',
        bg: '#FEF9C3',
        tasks: [
            "Check decks and patios for loose boards.",
            "Clean dryer vents to prevent fires.",
            "Inspect window seals for drafts ($ saving!).",
            "Check for insect activity around foundation.",
            "Test garage door auto-reverse safety features."
        ]
    },
    {
        id: 'fall',
        icon: <Leaf size={24} />,
        title: 'Fall Maintenance',
        color: '#FB923C',
        bg: '#FFEDD5',
        tasks: [
            "Service your heating system/furnace.",
            "Flush water heater to remove sediment.",
            "Seal gaps where mice could enter.",
            "Rake leaves away from foundation.",
            "Winterize outdoor hose bibs/faucets."
        ]
    },
    {
        id: 'winter',
        icon: <Snowflake size={24} />,
        title: 'Winter Maintenance',
        color: '#60A5FA',
        bg: '#DBEAFE',
        tasks: [
            "Check smoke and carbon monoxide detectors.",
            "Inspect basement for snowmelt leaks.",
            "Clean/replace HVAC filters monthly.",
            "Check roof for ice dams after snow.",
            "Vacuum refrigerator coils for efficiency."
        ]
    }
];

const MaintenanceResources = () => {
    const [activeTab, setActiveTab] = useState('spring');

    const handleDownload = () => {
        const printContent = `
            <html>
                <head>
                    <title>Square One - Home Maintenance Checklist</title>
                    <style>
                        body { font-family: 'Helvetica', sans-serif; padding: 40px; color: #333; }
                        h1 { color: #0A192F; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
                        h2 { margin-top: 30px; color: #2D9CDB; font-size: 18px; }
                        ul { list-style: none; padding: 0; }
                        li { margin-bottom: 10px; display: flex; align-items: center; }
                        .checkbox { 
                            display: inline-block; width: 16px; height: 16px; 
                            border: 2px solid #ccc; margin-right: 12px; border-radius: 4px; 
                        }
                        .footer { margin-top: 50px; font-size: 12px; color: #666; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
                    </style>
                </head>
                <body>
                    <h1>Home Maintenance Checklist</h1>
                    <p>Keep your home in top shape year-round with this seasonal guide from Square One Professional Home Inspectors.</p>
                    
                    ${seasonalData.map(season => `
                        <div class="season-section">
                            <h2 style="color: ${season.color}">${season.title}</h2>
                            <ul>
                                ${season.tasks.map(task => `
                                    <li><span class="checkbox"></span> ${task}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}

                    <div class="footer">
                        Square One Professional Home Inspectors | (516) 242-9556 | www.squareonehomeinspectors.com
                    </div>
                    <script>
                        window.onload = function() { window.print(); }
                    </script>
                </body>
            </html>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
    };

    return (
        <section className="section bg-white" id="resources">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-primary">Post-Inspection Resources</h2>
                    <p className="text-light section-subtitle">
                        Your home journey doesn't end at the inspection. Keep your investment safe with our seasonal care guide.
                    </p>
                </div>

                <div className="resources-wrapper">
                    {/* Tabs / Navigation */}
                    <div className="season-tabs">
                        {seasonalData.map((season) => (
                            <button
                                key={season.id}
                                className={`season-tab ${activeTab === season.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(season.id)}
                                style={{
                                    '--accent-color': season.color,
                                    borderColor: activeTab === season.id ? season.color : 'transparent'
                                }}
                            >
                                <span className="tab-icon" style={{ color: activeTab === season.id ? season.color : '#94A3B8' }}>
                                    {season.icon}
                                </span>
                                <span className="tab-title">{season.title.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="resource-card-container">
                        {seasonalData.map((season) => (
                            <div
                                key={season.id}
                                className={`resource-card ${activeTab === season.id ? 'active' : ''}`}
                            >
                                <div className="card-header" style={{ backgroundColor: season.bg }}>
                                    <h3 style={{ color: '#0F172A' }}>{season.title}</h3>
                                    <div className="season-icon-large" style={{ color: season.color }}>
                                        {season.icon}
                                    </div>
                                </div>
                                <div className="card-content">
                                    <ul className="checklist">
                                        {season.tasks.map((task, i) => (
                                            <li key={i} className="checklist-item">
                                                <CheckCircle size={18} className="check-icon" color={season.color} />
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="card-footer">
                                        <button className="download-btn" onClick={handleDownload}>
                                            <Download size={16} />
                                            Download Full Checklist (PDF)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaintenanceResources;
