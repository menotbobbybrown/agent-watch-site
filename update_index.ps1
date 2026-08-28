$content = Get-Content "c:\Users\DELL\Documents\antigravity\agent-watch-site\index.html" -Raw

# Remove the broken hero-badge div
$content = $content -replace '(?s)\s*<div class="hero-badge">.*?</div>', ''

# Update Eyebrow
$content = $content -replace '<div class="eyebrow">New · Works with 50\+ AI agent hosts</div>', '<div class="eyebrow">NPM: @rabeelashraf · Org: ModelNorth</div>'

# Update Footer
$footerTarget = '<p class="footer-desc">Enterprise video intelligence for AI agents. Open source and built on industry standards.</p>'
$footerReplacement = '<p class="footer-desc">Enterprise video intelligence for AI agents. Open source and built on industry standards.</p>
          <div class="footer-desc" style="font-size: 13px; margin-top: 12px; color: rgba(255,255,255,0.7);">
            Maintained by <a href="https://github.com/modelnorth" style="color: #F06A6A;">ModelNorth</a><br/>
            NPM Package by <a href="https://www.npmjs.com/~rabeelashraf" style="color: #F06A6A;">@rabeelashraf</a>
          </div>'
$content = $content.Replace($footerTarget, $footerReplacement)

Set-Content -Encoding UTF8 "c:\Users\DELL\Documents\antigravity\agent-watch-site\index.html" -Value $content
