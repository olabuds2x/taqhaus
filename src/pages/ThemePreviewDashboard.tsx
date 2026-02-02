import { useEffect } from 'react';

export default function ThemePreviewDashboard() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        return () => {
            document.documentElement.classList.remove('dark');
        };
    }, []);

    return (
        <div className="flex min-h-screen w-full bg-[#1a1615] text-[#bba29b] antialiased font-['Inter',sans-serif]">
            {/* Side Navigation */}
            <aside className="w-72 bg-[#231e1c] border-r border-[#3a2c27] flex flex-col justify-between shrink-0 sticky top-0 h-screen overflow-y-auto">
                <div className="p-6 flex flex-col gap-8">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <div
                            className="relative bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-[#fa5a29]/20"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBG1CdSDJBLj9l3pd9sCKBChFHqccH6_XyrnoajoCU1qwoGl3m4USobhaxBo7IxkiIpvmhMhr1rHHVxLBEyNRrt9TRhJhYkTeYW189y52v8npSElGYzz1OFDP_F2qztybpTVAVueBtonQvHTPTo81yVSfmhvZn1gycPhRGq3-W69rFBjY3Jth3PgNykpBM8T2J8n569Tv8XmwTTyekX1dAiFIe14JO1N_aN0Sgzq4PiYc7YdmdN5TUpOoZoHfBzB5rY9XLDQ1Qr4mc")' }}
                        >
                            <div className="absolute inset-0 rounded-full bg-[#fa5a29]/10"></div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold tracking-tight">TaqHaus</h1>
                            <p className="text-xs font-mono uppercase tracking-widest text-[#fa5a29]">Precision Growth</p>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-2">
                        <a className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-[#fa5a29]/10 border border-[#fa5a29]/20 transition-all hover:bg-[#fa5a29]/20" href="#">
                            <span className="material-symbols-outlined text-[#fa5a29]" style={{ fontSize: '20px' }}>dashboard</span>
                            <span className="text-white text-sm font-medium tracking-wide">Mission Control</span>
                        </a>
                        <a className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all text-[#8d7a75] hover:text-white" href="#">
                            <span className="material-symbols-outlined group-hover:text-[#fa5a29] transition-colors" style={{ fontSize: '20px' }}>bolt</span>
                            <span className="text-sm font-medium tracking-wide">Intelligence</span>
                        </a>
                        <a className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all text-[#8d7a75] hover:text-white" href="#">
                            <span className="material-symbols-outlined group-hover:text-[#fa5a29] transition-colors" style={{ fontSize: '20px' }}>track_changes</span>
                            <span className="text-sm font-medium tracking-wide">Campaigns</span>
                        </a>
                        <a className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all text-[#8d7a75] hover:text-white" href="#">
                            <span className="material-symbols-outlined group-hover:text-[#fa5a29] transition-colors" style={{ fontSize: '20px' }}>folder_open</span>
                            <span className="text-sm font-medium tracking-wide">Assets</span>
                        </a>
                        <a className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all text-[#8d7a75] hover:text-white" href="#">
                            <span className="material-symbols-outlined group-hover:text-[#fa5a29] transition-colors" style={{ fontSize: '20px' }}>settings</span>
                            <span className="text-sm font-medium tracking-wide">Settings</span>
                        </a>
                    </nav>
                </div>
                {/* Bottom User Profile */}
                <div className="p-6 border-t border-[#3a2c27]">
                    <div className="flex items-center gap-3">
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full h-9 w-9 border border-white/10"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtg9-or-w_esLmg2TnT6v73TojvIELErhJrOFJVUisjrmt-9vRVnZq0k296XmNWulIDfSefiFXNzgqG-bsv9WX0VM70iqvzoXH1U6MuBYi71i5ZCoj4dsY4O6AGNpTBYh8MHhz7fygTVzTFY9jLJbFSNiTbje0B1oHTryLaZJKy8pyvWtLyS7FcSlmRe17DKZ1NPC11OmMlElYMSdd28myOExEI5jZFnBYD0dyA5vxK-i896zNmC9Z6EbA-zrzOH95lp3Vifmd7Ro")' }}
                        ></div>
                        <div className="flex flex-col">
                            <p className="text-white text-sm font-medium">Alex V.</p>
                            <p className="text-xs text-[#6e5d58]">Admin Access</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#1a1615]">
                {/* Page Header */}
                <header className="border-b border-[#3a2c27] px-8 py-6">
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white text-3xl font-black tracking-tighter uppercase">Performance Intelligence</h2>
                            <div className="flex items-center gap-2 text-xs font-mono text-[#fa5a29]/80">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#fa5a29] animate-pulse"></span>
                                SYSTEM STATUS: NOMINAL
                                <span className="text-[#55403a]">|</span>
                                DATA REFRESH: 04:00s
                            </div>
                        </div>
                        <button className="relative group cursor-pointer flex items-center justify-center gap-2 h-10 px-5 bg-[#fa5a29] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#fa5a29]/90 transition-all rounded shadow-[0_0_15px_-3px_rgba(250,90,41,0.4)]">
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                            Generate Report
                        </button>
                    </div>
                    {/* Time Range Selector */}
                    <div className="flex items-center gap-1 mt-8 overflow-x-auto pb-1">
                        <button className="flex items-center justify-center px-4 py-1.5 rounded text-xs font-bold text-white bg-[#231e1c] border border-[#fa5a29]/40 shadow-[0_0_10px_-4px_rgba(250,90,41,0.3)] transition-all">24H</button>
                        <button className="flex items-center justify-center px-4 py-1.5 rounded text-xs font-medium text-[#8d7a75] hover:text-white hover:bg-[#231e1c] transition-all">7D</button>
                        <button className="flex items-center justify-center px-4 py-1.5 rounded text-xs font-medium text-[#8d7a75] hover:text-white hover:bg-[#231e1c] transition-all">30D</button>
                        <button className="flex items-center justify-center px-4 py-1.5 rounded text-xs font-medium text-[#8d7a75] hover:text-white hover:bg-[#231e1c] transition-all">QTD</button>
                        <button className="flex items-center justify-center px-4 py-1.5 rounded text-xs font-medium text-[#8d7a75] hover:text-white hover:bg-[#231e1c] transition-all">YTD</button>
                    </div>
                </header>

                {/* Dashboard Grid */}
                <div className="p-8 flex-1 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                        {/* Stat Card 1 */}
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-6 rounded-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-[#55403a]" style={{ fontSize: '24px' }}>trending_up</span>
                            </div>
                            <p className="text-[#8d7a75] text-xs font-bold uppercase tracking-widest mb-2">ROI (Return on Inv.)</p>
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-white text-3xl font-mono font-bold tracking-[-0.05em]">485.2%</h3>
                                <span className="text-[#0bda12] text-xs font-mono font-bold bg-[#0bda12]/10 px-1.5 py-0.5 rounded">+12.4%</span>
                            </div>
                            <div className="h-1 w-full bg-[#3a2c27] mt-4 rounded-full overflow-hidden">
                                <div className="h-full bg-[#fa5a29] w-[75%]"></div>
                            </div>
                        </div>
                        {/* Stat Card 2 */}
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-6 rounded-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-[#55403a]" style={{ fontSize: '24px' }}>all_inclusive</span>
                            </div>
                            <p className="text-[#8d7a75] text-xs font-bold uppercase tracking-widest mb-2">LTV (Lifetime Value)</p>
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-white text-3xl font-mono font-bold tracking-[-0.05em]">12,450</h3>
                                <span className="text-[#0bda12] text-xs font-mono font-bold bg-[#0bda12]/10 px-1.5 py-0.5 rounded">+5.2%</span>
                            </div>
                            <div className="h-1 w-full bg-[#3a2c27] mt-4 rounded-full overflow-hidden">
                                <div className="h-full bg-[#fa5a29] w-[60%]"></div>
                            </div>
                        </div>
                        {/* Stat Card 3 */}
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-6 rounded-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-[#55403a]" style={{ fontSize: '24px' }}>group_add</span>
                            </div>
                            <p className="text-[#8d7a75] text-xs font-bold uppercase tracking-widest mb-2">CAC (Acquisition Cost)</p>
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-white text-3xl font-mono font-bold tracking-[-0.05em]">340.50</h3>
                                <span className="text-[#fa5a29] text-xs font-mono font-bold bg-[#fa5a29]/10 px-1.5 py-0.5 rounded">-2.1%</span>
                            </div>
                            <div className="h-1 w-full bg-[#3a2c27] mt-4 rounded-full overflow-hidden">
                                <div className="h-full bg-white/20 w-[45%]"></div>
                            </div>
                        </div>
                        {/* Stat Card 4 */}
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-6 rounded-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-[#55403a]" style={{ fontSize: '24px' }}>ads_click</span>
                            </div>
                            <p className="text-[#8d7a75] text-xs font-bold uppercase tracking-widest mb-2">ROAS (Ad Spend Return)</p>
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-white text-3xl font-mono font-bold tracking-[-0.05em]">4.2x</h3>
                                <span className="text-[#0bda12] text-xs font-mono font-bold bg-[#0bda12]/10 px-1.5 py-0.5 rounded">+0.8%</span>
                            </div>
                            <div className="h-1 w-full bg-[#3a2c27] mt-4 rounded-full overflow-hidden">
                                <div className="h-full bg-[#fa5a29] w-[82%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Chart */}
                        <div className="lg:col-span-2 bg-[#231e1c] border border-[#3a2c27] rounded-lg p-6 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-white text-sm font-bold uppercase tracking-wide">Revenue Velocity (Net New)</h3>
                                    <div className="flex items-baseline gap-3 mt-1">
                                        <span className="text-3xl font-black text-white tracking-tight">$482,000</span>
                                        <span className="text-[#0bda12] text-sm font-medium flex items-center gap-1">
                                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_upward</span> 18.5%
                                        </span>
                                    </div>
                                </div>
                                <button className="text-[#8d7a75] hover:text-white">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div className="flex-1 min-h-[250px] w-full relative group">
                                {/* SVG Chart */}
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                                    <defs>
                                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#fa5a29" stopOpacity="0.3"></stop>
                                            <stop offset="100%" stopColor="#fa5a29" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    {/* Grid lines */}
                                    <line stroke="#3a2c27" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="10" y2="10"></line>
                                    <line stroke="#3a2c27" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="25" y2="25"></line>
                                    <line stroke="#3a2c27" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="40" y2="40"></line>
                                    {/* Area */}
                                    <path d="M0,45 L10,35 L20,38 L30,25 L40,28 L50,15 L60,18 L70,8 L80,12 L90,5 L100,10 L100,50 L0,50 Z" fill="url(#gradient)"></path>
                                    {/* Line */}
                                    <path d="M0,45 L10,35 L20,38 L30,25 L40,28 L50,15 L60,18 L70,8 L80,12 L90,5 L100,10" fill="none" stroke="#fa5a29" strokeWidth="0.8" vectorEffect="non-scaling-stroke"></path>
                                    {/* Data Points */}
                                    <circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" cx="70" cy="8" fill="#fff" r="1.5" stroke="#fa5a29" strokeWidth="0.5"></circle>
                                </svg>
                            </div>
                            <div className="flex justify-between mt-4 text-[#55403a] text-xs font-mono font-medium border-t border-[#3a2c27] pt-3">
                                <span>WK 01</span>
                                <span>WK 02</span>
                                <span>WK 03</span>
                                <span>WK 04</span>
                                <span>WK 05</span>
                                <span>WK 06</span>
                            </div>
                        </div>

                        {/* Secondary Chart */}
                        <div className="bg-[#231e1c] border border-[#3a2c27] rounded-lg p-6 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-white text-sm font-bold uppercase tracking-wide">Acquisition Vol.</h3>
                                    <div className="flex items-baseline gap-3 mt-1">
                                        <span className="text-3xl font-black text-white tracking-tight">2,405</span>
                                        <span className="text-[#0bda12] text-sm font-medium flex items-center gap-1">
                                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_upward</span> 6.2%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-end justify-between gap-4 min-h-[200px] px-2">
                                {/* Bar 1 */}
                                <div className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="w-full bg-[#3a2c27] relative rounded-sm overflow-hidden h-48 flex items-end">
                                        <div className="w-full bg-white/10 group-hover:bg-[#fa5a29]/80 transition-all duration-500 h-[45%]"></div>
                                    </div>
                                    <span className="text-[#8d7a75] text-xs font-mono uppercase">Org</span>
                                </div>
                                {/* Bar 2 */}
                                <div className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="w-full bg-[#3a2c27] relative rounded-sm overflow-hidden h-48 flex items-end">
                                        <div className="w-full bg-[#fa5a29] group-hover:bg-[#fa5a29] transition-all duration-500 h-[85%] shadow-[0_0_15px_-5px_rgba(250,90,41,0.5)]"></div>
                                    </div>
                                    <span className="text-white text-xs font-mono uppercase font-bold">Paid</span>
                                </div>
                                {/* Bar 3 */}
                                <div className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="w-full bg-[#3a2c27] relative rounded-sm overflow-hidden h-48 flex items-end">
                                        <div className="w-full bg-white/10 group-hover:bg-[#fa5a29]/80 transition-all duration-500 h-[30%]"></div>
                                    </div>
                                    <span className="text-[#8d7a75] text-xs font-mono uppercase">Ref</span>
                                </div>
                                {/* Bar 4 */}
                                <div className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="w-full bg-[#3a2c27] relative rounded-sm overflow-hidden h-48 flex items-end">
                                        <div className="w-full bg-white/10 group-hover:bg-[#fa5a29]/80 transition-all duration-500 h-[55%]"></div>
                                    </div>
                                    <span className="text-[#8d7a75] text-xs font-mono uppercase">Dir</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Metrics Strip */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-4 rounded flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded bg-[#fa5a29]/10 text-[#fa5a29]">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>timer</span>
                                </div>
                                <div>
                                    <p className="text-[#8d7a75] text-xs uppercase font-bold">Avg. Session</p>
                                    <p className="text-white font-mono font-medium">04:32</p>
                                </div>
                            </div>
                            <span className="text-[#0bda12] text-xs">+12%</span>
                        </div>
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-4 rounded flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded bg-[#fa5a29]/10 text-[#fa5a29]">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>ads_click</span>
                                </div>
                                <div>
                                    <p className="text-[#8d7a75] text-xs uppercase font-bold">CTR Global</p>
                                    <p className="text-white font-mono font-medium">2.85%</p>
                                </div>
                            </div>
                            <span className="text-[#0bda12] text-xs">+0.4%</span>
                        </div>
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-4 rounded flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded bg-[#fa5a29]/10 text-[#fa5a29]">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_cart</span>
                                </div>
                                <div>
                                    <p className="text-[#8d7a75] text-xs uppercase font-bold">Conversion</p>
                                    <p className="text-white font-mono font-medium">3.12%</p>
                                </div>
                            </div>
                            <span className="text-[#fa5a29] text-xs">-0.2%</span>
                        </div>
                        <div className="bg-[#231e1c] border border-[#3a2c27] p-4 rounded flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded bg-[#fa5a29]/10 text-[#fa5a29]">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                                </div>
                                <div>
                                    <p className="text-[#8d7a75] text-xs uppercase font-bold">Impressions</p>
                                    <p className="text-white font-mono font-medium">842k</p>
                                </div>
                            </div>
                            <span className="text-[#0bda12] text-xs">+15%</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
