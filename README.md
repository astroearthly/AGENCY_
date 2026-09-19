# Confidential Case Files

Build a complete, highly polished, interactive detective-noir themed video editing agency portfolio web application named "CONFIDENTIAL". 

### Design & Aesthetic

- Color Palette: Dark, moody noir theme using deep charcoal greys (`#0a0a0c`), matte black cards (`#121216`), and shadowy blues, accented by sharp, piercing neon cyan (`#00f0ff`) and magenta (`#ff007f`) glows, borders, and button hover states.

- Typography: Clean modern sans-serif for headers paired with typewriter/monospace fonts for classified text, dossiers, and code names.

- Atmosphere: Sleek, high-security, classified agency aesthetic with subtle scanlines, glowing borders (`shadow-[0_0_15px_rgba(0,240,255,0.2)]`), and smooth dark-mode transitions.

### Key Sections & Components

1. Navigation Bar (Header):

   - Left: Distressed tech-font logo reading "CONFIDENTIAL" with a blinking green or cyan status light.

   - Right: Nav links ("Field Agents", "The Difference File", "Agency Academy", "Classified Vault") and a glowing CTA button ("Initiate Case").

2. Hero Section:

   - Headline: "We Uncover the Hidden Value in Your Content."

   - Subheadline: High-retention video production, motion design, and data-driven storytelling wrapped in classified security.

3. "The Difference File" Section (Why We Are Better):

   - A central interactive dossier box styled like an opened physical manila folder on a dark desk.

   - Features bullet points with a retro typewriter-reveal animation explaining why Confidential outperforms standard agencies:

     * Content Forensics (Auditing audience retention data, not guessing).

     * Evidence-Based Editing (Precision pacing, cinematic tension, and data-backed hooks).

     * Secured Workflows (Strict version control and classified asset handling).

     * Niche Specialization (Dedicated undercover experts for Tech, Gaming, Crypto, Lifestyle, and Real Estate).

4. "Field Agents" Section (Editor Roster & Niches):

   - Section Title: "ACTIVE FIELD AGENTS"

   - A dark, tiled grid layout where each card represents an editor/niche:

     * Agent 1: Codename "AGENT RZCT" | Niche: Tech & SaaS | Noir detective avatar illustration with neon blue holographic data.

     * Agent 2: Codename "AGENT PHANTOM" | Niche: Gaming & Streaming | Noir detective avatar illustration with neon magenta glow and controller elements.

     * Agent 3 (and more): Add slots for Lifestyle, Real Estate, Crypto/Finance.

   - Interactive Element: Each agent card features a prominent, animated pulsing neon-glow **Fingerprint Button**. When clicked, it smoothly navigates or opens a modal displaying that specific agent's dedicated portfolio work, case history, and past edits.

5. "Agency Academy" Service Section:

   - Formatted like a classified training protocol detailing the 3-step transition workflow:

     * Phase 1: The Debrief (Setup, hardware/software audit, and 4 weeks of live training calls).

     * Phase 2: Joint Investigation (Hybrid editing where the agency and client co-produce).

     * Phase 3: Full Takeover (Agency handles 100% of the production once the client is fully autonomous).

   - Clear pricing tiers and onboarding buttons.

6. Interactive & Technical Requirements:

   - Fully responsive layout optimized for desktop and mobile.

   - Smooth hover effects with neon glow transitions.

   - Working state management for agent profile modals and contact/intake forms. also make sure that when hovering over each agent(editor) a fitting fingerprint animation shows up, and when pressed, the finger print turns from grey to green.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c445c5b1-a6d3-4888-b222-0ecf1b535dc8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
