export interface Env {
  // Environment variables can be added here
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // Health endpoint
    if (url.pathname === '/health') {
      return new Response(
        JSON.stringify({ status: "ok", vessel: "capitaine" }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
          }
        }
      );
    }

    // Security headers
    const securityHeaders = {
      "Content-Security-Policy": "default-src 'self'; style-src 'unsafe-inline'; img-src 'self' data:;",
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    // HTML content
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>">
    <meta property="og:title" content="Capitaine.ai — Premium AI Agent Platform">
    <meta property="og:description" content="Capitaine.ai — Premium AI education and advanced agent capabilities. Unlock the full potential.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://github.com/Lucineer/capitaine-ai">
    <meta property="og:site_name" content="Lucineer">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capitaine.ai | Premium AI Agent Platform</title>
    <meta name="description" content="Premium education and advanced AI agent capability layer for the Lucineer ecosystem">
</head>
<body style="margin:0; padding:0; background:#0f172a; color:#f8fafc; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height:1.6;">
    <div style="max-width:1200px; margin:0 auto; padding:20px;">
        <!-- Hero Section -->
        <header style="text-align:center; padding:60px 20px; background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius:16px; margin-bottom:60px;">
            <h1 style="font-size:3.5rem; margin:0 0 20px 0; background:linear-gradient(90deg, #eab308, #fde047); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">
                Unlock Your Agents Full Potential
            </h1>
            <p style="font-size:1.5rem; max-width:800px; margin:0 auto 40px; color:#cbd5e1;">
                Capitaine is the premium education platform and advanced agent capability layer
            </p>
            <div style="background:#1e293b; padding:20px; border-radius:12px; display:inline-block; border-left:4px solid #eab308;">
                <p style="margin:0; font-size:1.1rem; color:#94a3b8;">
                    Preloaded on every Deckboss unit. Cold until you are ready. Then everything changes.
                </p>
            </div>
        </header>

        <!-- Advanced Capabilities Section -->
        <section style="margin-bottom:80px;">
            <h2 style="font-size:2.5rem; margin-bottom:40px; color:#eab308; text-align:center;">Advanced Capabilities</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:24px;">
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-top:3px solid #eab308;">
                    <h3 style="color:#eab308; margin-top:0;">Multi-model Orchestration</h3>
                    <p style="color:#cbd5e1;">Reasoning, coding, and creative models running simultaneously for complex problem solving.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-top:3px solid #eab308;">
                    <h3 style="color:#eab308; margin-top:0;">Fleet Coordination</h3>
                    <p style="color:#cbd5e1;">Manage multiple git-agents from a single unified interface with real-time monitoring.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-top:3px solid #eab308;">
                    <h3 style="color:#eab308; margin-top:0;">Reverse Actualization</h3>
                    <p style="color:#cbd5e1;">Long-range planning across 7 time horizons, from 1 year to 100 years forward.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-top:3px solid #eab308;">
                    <h3 style="color:#eab308; margin-top:0;">Deep Research</h3>
                    <p style="color:#cbd5e1;">Multi-round analysis with cross-model synthesis for comprehensive understanding.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-top:3px solid #eab308;">
                    <h3 style="color:#eab308; margin-top:0;">Visual System Simulation</h3>
                    <p style="color:#cbd5e1;">Design and present complete system visualizations for client presentations.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-top:3px solid #eab308;">
                    <h3 style="color:#eab308; margin-top:0;">Night-mode Ideation</h3>
                    <p style="color:#cbd5e1;">Unattended overnight fleet expansion sessions for continuous improvement.</p>
                </div>
            </div>
        </section>

        <!-- Education Platform Section -->
        <section style="margin-bottom:80px;">
            <h2 style="font-size:2.5rem; margin-bottom:40px; color:#eab308; text-align:center;">Education Platform</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:24px;">
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-left:4px solid #3b82f6;">
                    <h3 style="color:#60a5fa; margin-top:0;">Token-based Course Generation</h3>
                    <p style="color:#cbd5e1;">Fresh content costs tokens, shared community content is completely free.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-left:4px solid #3b82f6;">
                    <h3 style="color:#60a5fa; margin-top:0;">Certification Tracks</h3>
                    <p style="color:#cbd5e1;">Progress through Apprentice, Journeyman, Master, and Designer levels.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-left:4px solid #3b82f6;">
                    <h3 style="color:#60a5fa; margin-top:0;">Hands-on Labs</h3>
                    <p style="color:#cbd5e1;">Each course includes a dedicated git-agent for practical, real-world practice.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-left:4px solid #3b82f6;">
                    <h3 style="color:#60a5fa; margin-top:0;">Training Port Model</h3>
                    <p style="color:#cbd5e1;">Technician-teaches-technician knowledge transfer via git repository trees.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-left:4px solid #3b82f6;">
                    <h3 style="color:#60a5fa; margin-top:0;">Community Curriculum</h3>
                    <p style="color:#cbd5e1;">Remix popular content for new environments. Shared courses remain free forever.</p>
                </div>
                <div style="background:#1e293b; padding:30px; border-radius:12px; border-left:4px solid #3b82f6;">
                    <h3 style="color:#60a5fa; margin-top:0;">Skills + Context + Equipment</h3>
                    <p style="color:#cbd5e1;">The complete paradigm for effective AI agent deployment and management.</p>
                </div>
            </div>
        </section>

        <!-- Lifecycle Section -->
        <section style="margin-bottom:80px;">
            <h2 style="font-size:2.5rem; margin-bottom:40px; color:#eab308; text-align:center;">From Deckboss to Capitaine</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:30px;">
                <div style="text-align:center; padding:30px; background:linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius:16px;">
                    <div style="font-size:3rem; margin-bottom:20px;">🚢</div>
                    <h3 style="color:#eab308; margin-top:0;">Deckboss Build Phase</h3>
                    <p style="color:#cbd5e1;">Design the system architecture and vibe-code initial solutions.</p>
                </div>
                <div style="text-align:center; padding:30px; background:linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius:16px;">
                    <div style="font-size:3rem; margin-bottom:20px;">⚓</div>
                    <h3 style="color:#eab308; margin-top:0;">Cocapn Deploy Phase</h3>
                    <p style="color:#cbd5e1;">Run and monitor agents in production with full operational control.</p>
                </div>
                <div style="text-align:center; padding:30px; background:linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius:16px;">
                    <div style="font-size:3rem; margin-bottom:20px;">👨‍✈️</div>
                    <h3 style="color:#eab308; margin-top:0;">Capitaine Evolve Phase</h3>
                    <p style="color:#cbd5e1;">Improve agents, implement advanced orchestration, and pursue mastery.</p>
                </div>
            </div>
        </section>

        <!-- Ecosystem Layer Diagram -->
        <section style="margin-bottom:80px; background:#1e293b; padding:40px; border-radius:16px;">
            <h2 style="font-size:2.5rem; margin-bottom:40px; color:#eab308; text-align:center;">Lucineer Ecosystem Layers</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:30px;">
                <div style="text-align:center; padding:30px; background:#0f172a; border-radius:12px;">
                    <h3 style="color:#10b981; margin-top:0;">Layer 1: Touch</h3>
                    <p style="color:#cbd5e1; margin-bottom:10px;">studylog.ai, activelog.ai, dmlog.ai</p>
                    <p style="color:#10b981; font-weight:bold;">"It just works"</p>
                </div>
                <div style="text-align:center; padding:30px; background:#0f172a; border-radius:12px;">
                    <h3 style="color:#3b82f6; margin-top:0;">Layer 2: Operate</h3>
                    <p style="color:#cbd5e1; margin-bottom:10px;">cocapn.ai / cocapn.com</p>
                    <p style="color:#3b82f6; font-weight:bold;">"Customize and manage"</p>
                </div>
                <div style="text-align:center; padding:30px; background:#0f172a; border-radius:12px;">
                    <h3 style="color:#eab308; margin-top:0;">Layer 3: Build</h3>
                    <p style="color:#cbd5e1; margin-bottom:10px;">deckboss.ai / deckboss.net / capitaine.ai</p>
                    <p style="color:#eab308; font-weight:bold;">"Design, build, evolve"</p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer style="border-top:1px solid #334155; padding-top:40px; margin-top:60px;">
            <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:30px; margin-bottom:40px;">
                <div>
                    <h3 style="color:#eab308; margin-top:0;">GitHub Repositories</h3>
                    <ul style="list-style:none; padding:0; margin:0;">
                        <li style="margin-bottom:10px;"><a href="https://github.com/Lucineer/deckboss" style="color:#60a5fa; text-decoration:none;">deckboss</a></li>
                        <li style="margin-bottom:10px;"><a href="https://github.com/Lucineer/cocapn-ai" style="color:#60a5fa; text-decoration:none;">cocapn-ai</a></li>
                        <li style="margin-bottom:10px;"><a href="https://github.com/Lucineer/cocapn-site" style="color:#60a5fa; text-decoration:none;">cocapn-site</a></li>
                        <li style="margin-bottom:10px;"><a href="https://github.com/Lucineer/the-fleet" style="color:#60a5fa; text-decoration:none;">the-fleet</a></li>
                        <li><a href="https://github.com/Lucineer/the-technician" style="color:#60a5fa; text-decoration:none;">the-technician</a></li>
                    </ul>
                </div>
                <div style="max-width:400px;">
                    <h3 style="color:#eab308; margin-top:0;">About Capitaine</h3>
                    <p style="color:#cbd5e1;">The premium tier of the Lucineer AI ecosystem, providing advanced agent capabilities and comprehensive education for AI technicians.</p>
                </div>
            </div>
            <div style="text-align:center; padding-top:30px; border-top:1px solid #334155; color:#94a3b8;">
                <p style="margin:0;">Built by Superinstance and Lucineer (DiGennaro et al.)</p>
                <p style="margin:10px 0 0 0;">© ${new Date().getFullYear()} Capitaine.ai. All rights reserved.</p>
            </div>
        </footer>
    </div>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        ...securityHeaders
      }
    });
  }
};
