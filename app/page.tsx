export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-12 sm:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,0,255,0.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(0,255,140,0.16),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.7),rgba(3,0,14,0.92))]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 blur-3xl" />

      <main className="relative z-10 flex w-full max-w-5xl flex-col gap-10 rounded-3xl border border-cyan-400/30 bg-white/5 p-10 shadow-[0_0_40px_rgba(0,255,255,0.22)] backdrop-blur-3xl sm:p-14">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <span className="text-sm uppercase tracking-[0.6em] text-cyan-300/80">Neon Interface</span>
          <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.45)] sm:text-5xl">
            Step into the Synapse Grid
          </h1>
          <p className="text-base text-cyan-100/80 sm:max-w-xl">
            Craft immersive experiences with a cyberpunk aesthetic. Our interface toolkit fuses luminous gradients, glass panels,
            and responsive motion primitives so you can design the future at light speed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-cyan-400/30 bg-black/30 p-6 shadow-[0_0_25px_rgba(0,255,255,0.18)]">
              <h2 className="mb-3 text-lg font-medium text-cyan-100/90">Aurora Control Hub</h2>
              <p className="text-sm text-cyan-100/70">
                Configure energy streams, monitor neural nodes, and customize your neon palette in real time with adaptive analytics
                panels designed for clarity in low-light environments.
              </p>
            </div>
            <div className="rounded-2xl border border-fuchsia-400/25 bg-black/30 p-6 shadow-[0_0_25px_rgba(255,0,255,0.16)]">
              <h2 className="mb-3 text-lg font-medium text-fuchsia-100">Quantum Pulse</h2>
              <p className="text-sm text-fuchsia-100/70">
                Seamlessly orchestrate micro-interactions with velocity curves inspired by holographic UI systems. Your journey
                through the grid remains fluid, precise, and unmistakably next-gen.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-cyan-300/25 bg-black/40 p-6 shadow-[0_0_30px_rgba(0,255,214,0.2)]">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.45em] text-cyan-200/70">Signal Strength</span>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-cyan-900/40">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-200 to-emerald-300 shadow-[0_0_25px_rgba(0,255,214,0.55)]" />
                </div>
                <span className="text-sm font-medium text-cyan-100">82%</span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">Active Channels</span>
              <div className="grid grid-cols-2 gap-3 text-sm text-cyan-100/80">
                <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  Nexus-7
                </div>
                <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  Orbit-3
                </div>
                <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  Ghostline
                </div>
                <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  Eclipse
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-emerald-300 to-fuchsia-400 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-black shadow-[0_0_25px_rgba(0,255,214,0.6)] transition-transform duration-300 hover:translate-y-1 hover:shadow-[0_0_35px_rgba(0,255,214,0.8)]"
                href="#"
              >
                Enter Grid
              </a>
              <a
                className="flex-1 rounded-2xl border border-cyan-300/40 bg-transparent px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100/90 transition duration-300 hover:border-fuchsia-400/60 hover:text-fuchsia-100"
                href="#"
              >
                View Protocols
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
