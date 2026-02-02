import { useEffect } from 'react';

export default function ThemePreviewArchive() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        return () => {
            document.documentElement.classList.remove('dark');
        };
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#181211] text-white overflow-x-hidden antialiased font-['Inter',sans-serif]">
            {/* Navbar */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#3a2c27] bg-[#181211]/95 backdrop-blur-sm px-6 py-3 lg:px-10">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-6 text-[#fa5a29]">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 10C25.6569 10 27 11.3431 27 13V21H35C36.6569 21 38 22.3431 38 24C38 25.6569 36.6569 27 35 27H27V35C27 36.6569 25.6569 38 24 38C22.3431 38 21 36.6569 21 35V27H13C11.3431 27 10 25.6569 10 24C10 22.3431 11.3431 21 13 21H21V13C21 11.3431 22.3431 10 24 10Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-white text-lg font-black leading-tight tracking-[-0.015em] uppercase">TaqHaus</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="hidden md:flex items-center gap-9">
                        <a className="text-[#bba29b] hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Work</a>
                        <a className="text-[#bba29b] hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Services</a>
                        <a className="text-[#bba29b] hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Methodology</a>
                        <a className="text-[#bba29b] hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Contact</a>
                    </div>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 px-4 bg-[#fa5a29] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest transition-colors">
                        <span className="truncate">Get Audit</span>
                    </button>
                </div>
            </header>

            <div className="flex flex-1 justify-center py-10 px-4 md:px-10 lg:px-40">
                <div className="flex flex-col max-w-[1200px] flex-1 gap-8">
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between items-end gap-6 border-b border-[#3a2c27] pb-8">
                        <div className="flex min-w-72 flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#fa5a29] animate-pulse"></span>
                                <span className="font-mono text-xs uppercase text-[#fa5a29] tracking-widest">System Archive V.3</span>
                            </div>
                            <h1 className="text-white text-5xl md:text-6xl font-black leading-[0.9] tracking-[-0.033em]">Growth<br />Engineering</h1>
                            <p className="text-[#bba29b] text-lg font-normal leading-normal max-w-xl">Precision-engineered growth systems and audited success stories. Organized for surgical deployment.</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="font-mono text-xs text-[#bba29b] text-right">
                                DATABASE STATUS: <span className="text-green-500">ONLINE</span><br />
                                ENTRIES: 1,402
                            </div>
                            <button className="group flex items-center justify-center gap-2 overflow-hidden rounded border border-[#3a2c27] bg-transparent hover:border-[#fa5a29] hover:bg-[#271e1b] h-10 px-6 text-white text-sm font-bold transition-all">
                                <span>FILTER VIEW</span>
                                <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform">filter_list</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col justify-between gap-4 rounded bg-[#271e1b] border border-[#3a2c27] p-6 hover:border-[#fa5a29]/50 transition-colors group">
                            <div className="flex justify-between items-start">
                                <span className="text-[#bba29b] text-xs font-mono uppercase">Revenue Generated</span>
                                <span className="material-symbols-outlined text-[#bba29b] group-hover:text-[#fa5a29] transition-colors text-[20px]">payments</span>
                            </div>
                            <div>
                                <p className="text-white font-mono text-3xl font-bold leading-tight tracking-tight">$450M+</p>
                                <p className="text-green-500 font-mono text-xs mt-1">▲ 15% YOY</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-4 rounded bg-[#271e1b] border border-[#3a2c27] p-6 hover:border-[#fa5a29]/50 transition-colors group">
                            <div className="flex justify-between items-start">
                                <span className="text-[#bba29b] text-xs font-mono uppercase">Avg. ROI Uplift</span>
                                <span className="material-symbols-outlined text-[#bba29b] group-hover:text-[#fa5a29] transition-colors text-[20px]">trending_up</span>
                            </div>
                            <div>
                                <p className="text-white font-mono text-3xl font-bold leading-tight tracking-tight">320%</p>
                                <p className="text-green-500 font-mono text-xs mt-1">▲ 12% Q3</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-4 rounded bg-[#271e1b] border border-[#3a2c27] p-6 hover:border-[#fa5a29]/50 transition-colors group">
                            <div className="flex justify-between items-start">
                                <span className="text-[#bba29b] text-xs font-mono uppercase">Campaigns Active</span>
                                <span className="material-symbols-outlined text-[#bba29b] group-hover:text-[#fa5a29] transition-colors text-[20px]">rocket_launch</span>
                            </div>
                            <div>
                                <p className="text-white font-mono text-3xl font-bold leading-tight tracking-tight">1,240</p>
                                <p className="text-green-500 font-mono text-xs mt-1">OPTIMIZED</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-4 rounded bg-[#271e1b] border border-[#3a2c27] p-6 hover:border-[#fa5a29]/50 transition-colors group">
                            <div className="flex justify-between items-start">
                                <span className="text-[#bba29b] text-xs font-mono uppercase">Data Points</span>
                                <span className="material-symbols-outlined text-[#bba29b] group-hover:text-[#fa5a29] transition-colors text-[20px]">dataset</span>
                            </div>
                            <div>
                                <p className="text-white font-mono text-3xl font-bold leading-tight tracking-tight">85B+</p>
                                <p className="text-[#fa5a29] font-mono text-xs mt-1">PROCESSING...</p>
                            </div>
                        </div>
                    </div>

                    {/* Chips / Filters */}
                    <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-white text-[#181211] border border-white px-4 transition-colors">
                            <span className="text-xs font-bold uppercase tracking-wide">All Systems</span>
                        </button>
                        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-[#271e1b] border border-[#3a2c27] hover:border-[#fa5a29] px-4 transition-colors group">
                            <span className="text-[#bba29b] group-hover:text-white text-xs font-bold uppercase tracking-wide">Retention</span>
                        </button>
                        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-[#271e1b] border border-[#3a2c27] hover:border-[#fa5a29] px-4 transition-colors group">
                            <span className="text-[#bba29b] group-hover:text-white text-xs font-bold uppercase tracking-wide">Acquisition</span>
                        </button>
                        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-[#271e1b] border border-[#3a2c27] hover:border-[#fa5a29] px-4 transition-colors group">
                            <span className="text-[#bba29b] group-hover:text-white text-xs font-bold uppercase tracking-wide">Monetization</span>
                        </button>
                        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-[#271e1b] border border-[#3a2c27] hover:border-[#fa5a29] px-4 transition-colors group">
                            <span className="text-[#bba29b] group-hover:text-white text-xs font-bold uppercase tracking-wide">Analytics</span>
                        </button>
                    </div>

                    {/* Bento Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
                        {/* Large Feature Block (Col Span 2, Row Span 2) */}
                        <div className="relative group md:col-span-2 md:row-span-2 rounded border border-[#3a2c27] overflow-hidden flex flex-col justify-end p-8 bg-[#271e1b]">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5zutY_73jraVkbtnnLrMEkVl7x7ZwIloShuAq4vLtxp2B1f2arMc8qt05u_80_zs3emughx-T1TiUbV0owxUDAJ9AIw4wp9UnxCjYrqa8bH9yx5eZqF0dvRL_egHdG5BhbWt67TZn-YVJYuK6-Sx18my1j0kebMznLIIF_gLTLMRLji3InOe91e9sNWSmIC3wYJO7k4b2Xz3qrz8p2NPiIJqHSpfJZ4kCVGPOU4dyD8_xLllYEIa5L01xHM3asD5q3PVTyXzCEhg')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181211] via-[#181211]/80 to-transparent"></div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-[#fa5a29] text-white text-[10px] font-mono font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Case Study</span>
                                    <span className="text-[#bba29b] text-[10px] font-mono border border-[#3a2c27] px-2 py-1 rounded-sm">FinTech</span>
                                </div>
                                <h3 className="text-3xl font-bold leading-tight">Project: Obsidian Flow</h3>
                                <p className="text-[#bba29b] max-w-md">Complete reconstruction of user acquisition funnels resulting in a 240% increase in qualified leads over a 90-day sprint.</p>
                                <div className="flex gap-8 mt-2 border-t border-white/10 pt-4">
                                    <div>
                                        <p className="text-[10px] text-[#bba29b] font-mono uppercase">Conversion</p>
                                        <p className="text-lg font-mono font-bold text-white">4.8%</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#bba29b] font-mono uppercase">CAC Reduction</p>
                                        <p className="text-lg font-mono font-bold text-white">-35%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Block 1 */}
                        <div className="md:col-span-1 rounded border border-[#3a2c27] bg-[#271e1b] p-6 flex flex-col gap-4 hover:border-[#fa5a29] transition-colors cursor-pointer group">
                            <div className="size-10 rounded bg-white/5 flex items-center justify-center text-[#fa5a29] group-hover:bg-[#fa5a29] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">tune</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">CRO Protocols</h4>
                                <p className="text-sm text-[#bba29b] leading-relaxed">Systematic uplift via rigorous A/B testing methodologies.</p>
                            </div>
                            <div className="mt-auto pt-4 border-t border-[#3a2c27] flex justify-between items-center">
                                <span className="text-[10px] font-mono text-[#bba29b]">SYS.01</span>
                                <span className="material-symbols-outlined text-sm text-[#bba29b] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>

                        {/* Service Block 2 */}
                        <div className="md:col-span-1 rounded border border-[#3a2c27] bg-[#271e1b] p-6 flex flex-col gap-4 hover:border-[#fa5a29] transition-colors cursor-pointer group">
                            <div className="size-10 rounded bg-white/5 flex items-center justify-center text-[#fa5a29] group-hover:bg-[#fa5a29] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">query_stats</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Full-Funnel Analytics</h4>
                                <p className="text-sm text-[#bba29b] leading-relaxed">End-to-end data visibility and precise attribution modeling.</p>
                            </div>
                            <div className="mt-auto pt-4 border-t border-[#3a2c27] flex justify-between items-center">
                                <span className="text-[10px] font-mono text-[#bba29b]">SYS.02</span>
                                <span className="material-symbols-outlined text-sm text-[#bba29b] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>

                        {/* Wide Block (Col Span 2) */}
                        <div className="md:col-span-2 rounded border border-[#3a2c27] bg-[#271e1b] p-6 flex flex-col md:flex-row gap-6 hover:border-[#fa5a29] transition-colors cursor-pointer group relative overflow-hidden">
                            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#fa5a29]/5 to-transparent pointer-events-none"></div>
                            <div className="flex flex-col justify-center flex-1 gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#fa5a29] text-xl">bolt</span>
                                    <span className="text-xs font-mono text-[#fa5a29] uppercase tracking-wider">New Methodology</span>
                                </div>
                                <h3 className="text-xl font-bold">Velocity-Based Retention</h3>
                                <p className="text-sm text-[#bba29b]">Churn reduction through behavioral triggers and predictive AI modeling. Automatically identifies at-risk cohorts.</p>
                            </div>
                            <div className="flex flex-col justify-center gap-2 min-w-[120px] border-l border-[#3a2c27] pl-6">
                                <span className="text-[10px] text-[#bba29b] font-mono uppercase">Retention</span>
                                <span className="text-2xl font-mono font-bold text-white">+22%</span>
                                <span className="text-[10px] text-[#bba29b] font-mono uppercase">LTV Uplift</span>
                                <span className="text-2xl font-mono font-bold text-white">+14%</span>
                            </div>
                        </div>

                        {/* Image Block */}
                        <div className="md:col-span-1 rounded border border-[#3a2c27] bg-[#271e1b] relative overflow-hidden group cursor-pointer h-full min-h-[200px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRYfBC96jH-1u1lrl2Lu2p0aGvCRQjjPFKfjwcNHWzT-5i7hS9NmujoyeF3UotvaiIeoNPTco236FHI_XJJnT1sGFzKHmokFJSAmhq2pM5bFq8wgzvkUhK46hUi4FVpgxlIB96sNCbz7HPAdOdEemHFO6KVNWBL28RkzSG9Kg-BtMbxkr3sDNicxaCnbkHuPwvxlFihi7Zffn9YHa9NJ-6LjFiHumxAbWoz8B6Zfo0wLReUlIpWvstHJzLdkGBEPLkTvdVFDjrErk')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181211] via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <p className="font-mono text-xs text-[#fa5a29] mb-1">HARDWARE / SAAS</p>
                                <h4 className="font-bold text-white leading-tight">Server-Side Optimization</h4>
                            </div>
                        </div>

                        {/* Text Only Block */}
                        <div className="md:col-span-1 rounded border border-[#3a2c27] bg-[#271e1b] p-6 flex flex-col gap-4 hover:border-[#fa5a29] transition-colors cursor-pointer group">
                            <div className="size-10 rounded bg-white/5 flex items-center justify-center text-[#fa5a29] group-hover:bg-[#fa5a29] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">hub</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Lifecycle Automation</h4>
                                <p className="text-sm text-[#bba29b] leading-relaxed">Automated touchpoints for LTV maximization.</p>
                            </div>
                            <div className="mt-auto pt-4 border-t border-[#3a2c27] flex justify-between items-center">
                                <span className="text-[10px] font-mono text-[#bba29b]">SYS.04</span>
                                <span className="material-symbols-outlined text-sm text-[#bba29b] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>

                        {/* Final Wide Stat Block */}
                        <div className="md:col-span-3 lg:col-span-4 rounded border border-[#3a2c27] bg-[#110c0b] p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#fa5a29]/40 transition-colors">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold text-white">Ready to engineer growth?</h3>
                                <p className="text-[#bba29b]">Deploy our methodology to your infrastructure today.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div
                                        className="size-10 rounded-full border-2 border-[#181211] bg-gray-600 bg-cover"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8myJ06WXRmyOfBDjmg4dgg2swPu6vP4CaM7oNS2WAfDEb7qA8sNEzEd6crlpy2QEWnlkItl9jixGLPesLLPvzgLTp_-TaetowYD49YO3H15U6HXLIoGCH9JsjSObZO7DHq6b-Z0FNyxpo0WTGsfQUFsP6K9mlB8c7nNX-V_hTnjSK1XIq69s6brSonaPlJkee9eDzuabWI9bPuvY2p-RkxE-1zaJJznpG-y--weklASCSpoSoDXiFXMUWOHkdEvdJAMRPLqaaJ3g')" }}
                                    ></div>
                                    <div
                                        className="size-10 rounded-full border-2 border-[#181211] bg-gray-600 bg-cover"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQwyZ96AXoPtOm1VYDlZNvLuHpU1yBTrzAG6AGjqnTD7P8La9UCrI8JudsnahDEKX-hRRtWg9k-McUcrYUNnhtNl62GHlP7KQ20oujcrkvSeKDXw1v5EG4TZlcm-C4V5to54cVtl4JTBQhkyIpLLpdSb3OWg1lSc4JQZt7Jso6DpobCTpLGf9U8OXhvfUQnss7GhyyjKFaWEaaUDjdkRdggEa3pEQbPvXg8V5zshiub4Z_CcKc9N-zIEECzVNDvHc3ZXjXqTWlglY')" }}
                                    ></div>
                                    <div className="size-10 rounded-full border-2 border-[#181211] bg-[#271e1b] flex items-center justify-center text-xs font-bold text-white">+40</div>
                                </div>
                                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-6 bg-[#fa5a29] hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(250,90,41,0.3)]">
                                    <span className="truncate">Initiate Audit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
