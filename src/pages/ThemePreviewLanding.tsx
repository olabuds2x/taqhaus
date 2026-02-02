import { useEffect } from 'react';

export default function ThemePreviewLanding() {
    useEffect(() => {
        // Add dark class to html for this theme
        document.documentElement.classList.add('dark');
        return () => {
            document.documentElement.classList.remove('dark');
        };
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#181211] text-white font-['Inter',sans-serif]">
            {/* TopNavBar */}
            <header className="w-full border-b border-[#3a2c27] bg-[#181211]/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="px-4 md:px-10 lg:px-40 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white">
                        <div className="size-6 text-[#fa5a29]">
                            <span className="material-symbols-outlined !text-2xl">diamond</span>
                        </div>
                        <h2 className="text-white text-lg font-black tracking-tighter uppercase">TaqHaus</h2>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-8">
                            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#">Services</a>
                            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#">Case Studies</a>
                            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#">Intelligence</a>
                            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#">About</a>
                        </nav>
                        <button className="flex items-center justify-center overflow-hidden rounded h-9 px-5 bg-[#fa5a29] hover:bg-orange-600 transition-colors text-white text-sm font-bold tracking-wide uppercase">
                            <span className="truncate">Execute Strategy</span>
                        </button>
                    </div>
                    <div className="lg:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center w-full">
                {/* HeroSection */}
                <section className="w-full max-w-[1440px] px-4 md:px-10 lg:px-40 pt-16 pb-12">
                    <div>
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                            <div className="flex flex-col gap-6 lg:w-1/2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#271e1b] border border-[#3a2c27] w-fit">
                                    <span className="w-2 h-2 rounded-full bg-[#fa5a29] animate-pulse"></span>
                                    <span className="text-xs font-mono text-[#fa5a29] uppercase tracking-wider">System Operational</span>
                                </div>
                                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
                                    Precision<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Growth Protocols</span>
                                </h1>
                                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                                    Deploying high-frequency tactical marketing for executive-level scalability. Target acquisition confirmed.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <button className="flex items-center justify-center h-12 px-8 bg-[#fa5a29] hover:bg-orange-600 transition-colors text-white text-base font-bold tracking-wide uppercase rounded">
                                        Initialize Growth
                                    </button>
                                    <button className="flex items-center justify-center h-12 px-8 bg-transparent border border-[#3a2c27] hover:border-white transition-colors text-white text-base font-medium tracking-wide rounded group">
                                        View Intelligence
                                        <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="absolute -inset-4 bg-[#fa5a29]/20 blur-3xl rounded-full opacity-20"></div>
                                <div
                                    className="w-full aspect-video bg-cover bg-center rounded border border-[#3a2c27] relative overflow-hidden shadow-2xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgj2OtOYPnPnHNS3ZI88OcnaEnMbVRMaJRt8hRTR17I9e9Mpga-_tXftE-Kwyl9tY7LbcVuAsfPbBzj-Gy5fCcb8a_iBTdoZ9lW63c7tDPxKM8aaqNryIB-8Q5hXjIpNpwZzZTLX1ZpxOMe8eZj6zHC7IYxZu5pv7Z_hqfSb9fouaSy5C_AzeD-_0AWRyLNIoaRLIEq27qySZ3Xo-RGIC6Ev5Twwdz5KtMioPKhEhpg5tlkFDTyhJAAnRht9wmjergLdhcyM-dZ08")' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#181211]/90 to-transparent"></div>
                                    {/* UI Overlay Element inside Hero Image */}
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-mono uppercase">Current Velocity</span>
                                            <span className="text-xl font-mono text-white font-bold">8,492 <span className="text-[#fa5a29] text-sm">MB/s</span></span>
                                        </div>
                                        <div className="h-8 w-[1px] bg-white/20"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-mono uppercase">Target Reach</span>
                                            <span className="text-xl font-mono text-white font-bold">98.4%</span>
                                        </div>
                                        <div className="h-8 w-[1px] bg-white/20"></div>
                                        <div className="text-[#fa5a29]">
                                            <span className="material-symbols-outlined">analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="w-full border-y border-[#3a2c27] bg-[#130e0d]">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-40 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-1 p-6 border-l-2 border-[#fa5a29] bg-gradient-to-r from-[#1c1412] to-transparent">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">Revenue Velocity</p>
                                    <span className="material-symbols-outlined text-[#fa5a29] text-sm">trending_up</span>
                                </div>
                                <p className="text-white text-4xl font-black font-mono tracking-tighter">420%</p>
                                <p className="text-[#0bda12] text-sm font-mono mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">arrow_drop_up</span>
                                    +150% YOY
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 p-6 border-l-2 border-gray-700 bg-gradient-to-r from-[#1c1412] to-transparent">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">Market Pen.</p>
                                    <span className="material-symbols-outlined text-gray-500 text-sm">radar</span>
                                </div>
                                <p className="text-white text-4xl font-black font-mono tracking-tighter">88.5%</p>
                                <p className="text-[#0bda12] text-sm font-mono mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">arrow_drop_up</span>
                                    +12% Q/Q
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 p-6 border-l-2 border-gray-700 bg-gradient-to-r from-[#1c1412] to-transparent">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">Client Retention</p>
                                    <span className="material-symbols-outlined text-gray-500 text-sm">lock</span>
                                </div>
                                <p className="text-white text-4xl font-black font-mono tracking-tighter">99.9%</p>
                                <p className="text-[#0bda12] text-sm font-mono mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">arrow_drop_up</span>
                                    Stable
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FeatureSection / Tactical Operations */}
                <section className="w-full max-w-[1440px] px-4 md:px-10 lg:px-40 py-20">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3a2c27] pb-6">
                            <div className="flex flex-col gap-4 max-w-2xl">
                                <h2 className="text-[#fa5a29] font-mono text-sm tracking-widest uppercase">Tactical Operations</h2>
                                <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                    Executive Command Modules
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    Modular growth engines designed for rapid deployment and maximum ROI impact. Select your vector of attack.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-white text-sm font-bold uppercase hover:text-[#fa5a29] transition-colors whitespace-nowrap">
                                View All Modules
                                <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="group relative flex flex-col gap-4 rounded bg-[#1c1514] p-6 border border-[#3a2c27] hover:border-[#fa5a29]/50 transition-all hover:bg-[#231a18]">
                                <div className="absolute top-4 right-4 text-[#3a2c27] group-hover:text-[#fa5a29]/20 transition-colors">
                                    <span className="material-symbols-outlined text-6xl">crossword</span>
                                </div>
                                <div className="z-10 bg-[#2d2220] w-12 h-12 rounded flex items-center justify-center text-[#fa5a29] border border-white/5 shadow-inner">
                                    <span className="material-symbols-outlined">target</span>
                                </div>
                                <div className="z-10 flex flex-col gap-2 mt-2">
                                    <h4 className="text-white text-lg font-bold">Targeting Matrix</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Precision audience segmentation algorithms utilizing proprietary data sets.</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-mono">V.2.04</span>
                                    <span className="material-symbols-outlined text-gray-500 text-sm group-hover:text-[#fa5a29] transition-colors">add</span>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group relative flex flex-col gap-4 rounded bg-[#1c1514] p-6 border border-[#3a2c27] hover:border-[#fa5a29]/50 transition-all hover:bg-[#231a18]">
                                <div className="absolute top-4 right-4 text-[#3a2c27] group-hover:text-[#fa5a29]/20 transition-colors">
                                    <span className="material-symbols-outlined text-6xl">trending_up</span>
                                </div>
                                <div className="z-10 bg-[#2d2220] w-12 h-12 rounded flex items-center justify-center text-[#fa5a29] border border-white/5 shadow-inner">
                                    <span className="material-symbols-outlined">bolt</span>
                                </div>
                                <div className="z-10 flex flex-col gap-2 mt-2">
                                    <h4 className="text-white text-lg font-bold">Conversion Ballistics</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">High-velocity funnel optimization to maximize throughput and yield.</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-mono">V.1.88</span>
                                    <span className="material-symbols-outlined text-gray-500 text-sm group-hover:text-[#fa5a29] transition-colors">add</span>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group relative flex flex-col gap-4 rounded bg-[#1c1514] p-6 border border-[#3a2c27] hover:border-[#fa5a29]/50 transition-all hover:bg-[#231a18]">
                                <div className="absolute top-4 right-4 text-[#3a2c27] group-hover:text-[#fa5a29]/20 transition-colors">
                                    <span className="material-symbols-outlined text-6xl">shield</span>
                                </div>
                                <div className="z-10 bg-[#2d2220] w-12 h-12 rounded flex items-center justify-center text-[#fa5a29] border border-white/5 shadow-inner">
                                    <span className="material-symbols-outlined">security</span>
                                </div>
                                <div className="z-10 flex flex-col gap-2 mt-2">
                                    <h4 className="text-white text-lg font-bold">Revenue Fortification</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Long-term value extraction systems and churn reduction protocols.</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-mono">V.3.12</span>
                                    <span className="material-symbols-outlined text-gray-500 text-sm group-hover:text-[#fa5a29] transition-colors">add</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Studies (Bento Grid) */}
                <section className="w-full max-w-[1440px] px-4 md:px-10 lg:px-40 py-10 pb-20">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-8 border-b border-[#3a2c27] mb-8">
                        FIELD REPORTS <span className="text-gray-500 font-normal ml-2 text-base">/// Classified</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-[600px]">
                        {/* Main Feature (2x2) */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded bg-[#1A1A1A] border border-[#3a2c27]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-k_vCfzeqFYIoOQZrJ__z76Q6MGnp8HoCGw_lWYw-eUvBFsu91zTVXZAGNxYQOGAjpjjfRNW1TK6byyXl1n9WjvSrTA2G2PTE_54OYXfDUDL8G8ltkO8aRd6YGH30oqhJe01mujif2gD-gB1zQwML1N-SM977CTmU3fRV1vg7W-ee0wa4yp3SPByH1yn7L_XGFaeDBxtc6y5cDdIfPdh1kWbERuRx4utbeuSpNnAsFjHzGf2mUOmqO-GvPx1O421pMya6QbkNRJA")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-[#fa5a29] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Financial</span>
                                    <span className="text-gray-400 text-xs font-mono">CASE-892</span>
                                </div>
                                <h3 className="text-white text-3xl font-bold mb-2">Vertex Capital Scale-Up</h3>
                                <p className="text-gray-300 text-sm mb-6 max-w-md line-clamp-2">Implemented automated lead scoring and CRM integration resulting in 300% efficiency gain.</p>
                                <button className="text-[#fa5a29] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Declassified File <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        {/* Secondary Feature (1x2) */}
                        <div className="col-span-1 lg:col-span-1 row-span-1 lg:row-span-2 relative group overflow-hidden rounded bg-[#1A1A1A] border border-[#3a2c27]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-30"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsHB-HZEOoEcPFoYDhrzO1OgYYwa1bQwzolwC0FjkxlrzdlgK9XHPwgHfkoG_3ne5tHfHu5LxBTrpAJs2X0ph0bZpvlQaWnVWLLw8hatEal8jzdPBzn5m3I0q_rmZsCsiQb4qTgs87xcqXWQ08HnAhzjtA6U51hSvUUkKB-HA9Rsu8bGFM-FOPOJV5KGeh_O7chJqPyYrZ17hZcepH5D7v6utYO1cN6ZeoRsSGflPVr7aVbpYuqZ5dNwjmEeaviQLZU0O-eblyebo")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="mb-2">
                                    <span className="text-gray-400 text-xs font-mono">CASE-104</span>
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2">Nexus Protocol</h3>
                                <p className="text-gray-400 text-xs mb-4">SaaS market penetration strategy.</p>
                                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                    <span className="text-[#fa5a29] text-xs font-bold uppercase">View Data</span>
                                    <span className="material-symbols-outlined text-white text-sm">add</span>
                                </div>
                            </div>
                        </div>
                        {/* Small Feature 1 (1x1) */}
                        <div className="col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded bg-[#1A1A1A] border border-[#3a2c27]">
                            <div className="absolute inset-0 bg-[#231e1c] flex items-center justify-center group-hover:bg-[#2a2422] transition-colors">
                                <div className="text-center p-6">
                                    <span className="material-symbols-outlined text-[#fa5a29] text-4xl mb-3">rocket_launch</span>
                                    <h3 className="text-white text-lg font-bold">Launch Systems</h3>
                                    <p className="text-gray-500 text-xs mt-1">Go-to-market acceleration</p>
                                </div>
                            </div>
                        </div>
                        {/* Small Feature 2 (1x1) */}
                        <div className="col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded bg-[#1A1A1A] border border-[#3a2c27]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFA0g5Sed7uXeHKwWjA980v1XJIEH9yG6jNw1rOO9a4k3Y7eBDHlL5w7_qMAy_ICoZMP3sw_7DNW7a89aHUsvIe_5QgkVqhshUWIug6DyfJzw-DmOdoKbyiXwxXiYsKOBc3v5p9flJdp4May4WlyW-PytZEOpfv84qqTCuiFkpw9nqXR0sK6HS1Cry8tT3XfIdPl9FZJYNlSF1tMqsx6azpQrIdLcv5CzFFoyjDbRoguniElW9YAarysctj85tp2tHinh9s6YksYI")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white text-lg font-bold">Infra. Redesign</h3>
                                <div className="w-full bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
                                    <div className="bg-[#fa5a29] h-full w-[85%]"></div>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <span className="text-[10px] text-gray-500 font-mono">COMPLETE</span>
                                    <span className="text-[10px] text-[#fa5a29] font-mono">85% ROI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-20 bg-[#181211] border-t border-[#3a2c27]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Ready to engage?</h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Initiate contact with our strategic command center. We only accept clients ready for exponential vectors.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="flex items-center justify-center h-14 px-10 bg-[#fa5a29] hover:bg-orange-600 transition-colors text-white text-lg font-bold tracking-wide uppercase rounded shadow-lg shadow-[#fa5a29]/20">
                                Begin Transmission
                            </button>
                            <button className="flex items-center justify-center h-14 px-10 bg-[#271e1b] hover:bg-[#322825] border border-[#3a2c27] transition-colors text-white text-lg font-medium tracking-wide uppercase rounded">
                                Download Brief
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full border-t border-[#3a2c27] bg-[#130e0d] py-12">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-40 flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white">
                            <span className="material-symbols-outlined text-[#fa5a29]">diamond</span>
                            <span className="font-black text-xl uppercase tracking-tighter">TaqHaus</span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Precision growth protocols for the modern enterprise.
                            <br />© 2024 TaqHaus Systems. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-12 text-sm">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold uppercase tracking-wider">Sectors</h4>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">Fintech</a>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">SaaS</a>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">E-com</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold uppercase tracking-wider">Protocol</h4>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">Methodology</a>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">Case Logs</a>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">API Access</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold uppercase tracking-wider">Social</h4>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">X / Twitter</a>
                            <a className="text-gray-500 hover:text-[#fa5a29] transition-colors" href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
