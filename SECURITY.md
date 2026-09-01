# Security Policy — iONTEK Project GridShield™ Safe Zone PH

## Reporting a vulnerability
Email **miles@iontek.com.ph** with subject `SECURITY: Safe Zone PH`.
Include steps to reproduce, affected build ID (see footer of the app), and device/browser.
We acknowledge reports within 5 business days. Please do not open public issues for security matters.

## Integrity of the official build
- Official deployment URL(s) are published only at **www.iontek.com.ph**.
- Every official build carries a build identifier in its source header and footer
  (current: `v2.1.0 · SZ-20260831-PH`). A copy of this app at any other URL, or without
  this identifier and the iONTEK ownership notice, is **not an official build** and may be
  tampered with. Do not enter it into any device as an emergency tool.
- Public releases ship **minified and obfuscated**. The readable master source is kept in a
  private repository and deposited with IPOPHL for copyright registration.

## Anti-tampering measures in place
1. Proprietary LICENSE prohibiting copying, modification, rebranding, and reverse engineering (RA 8293).
2. Obfuscated public build with embedded owner fingerprint and build ID.
3. Service worker versioned cache — users receive only builds published from the official origin.
4. Branch protection and signed commits on the deployment branch (repository setting).
5. No secrets, API keys, or personal data anywhere in the codebase.

## Scope
This is a public-safety guidance tool. Location is processed on-device only; no data is
transmitted to iONTEK. Third-party services (OpenStreetMap tiles, Google Maps directions
hand-off, UP NOAH) are governed by their own policies.

## Not accepted as findings
- "View source" or downloading of the client-side code (inherent to web apps; covered by LICENSE, not a vulnerability)
- Approximate anchor coordinates in the registry (documented limitation; confirm with your DRRMO)
