## 2026-04-XX
- Removed @mkkellogg/gaussian-splats-3d and @lumaai/luma-web dependencies
- 3D showcase now uses iframe embedding of XGRIDS LCC Viewer instead of self-hosted PLY rendering
- Previous implementation: gaussian-splats-3d loaded compressed PLY files from Supabase Storage
- Before that: @lumaai/luma-web was tested but only supports Luma-proprietary capture URLs, not arbitrary PLY files
