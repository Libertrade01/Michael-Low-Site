# Design upgrade — linen warm sand pass

Branch: **`design/linen-warm-pass`**

## Revert (undo this pass)

```powershell
git checkout main
```

If you were on another branch before this work, use that branch name instead of `main`.

Your working tree on `main` is unchanged until you merge. This branch holds all sand-band / inner-page consistency changes.

## Keep this pass

Stay on the branch, or merge into `main` when ready:

```powershell
git checkout main
git merge design/linen-warm-pass
```

## What this pass changes

- **Colors:** Warm sand section bands (`#f0ebe3`), footer surface (`#ebe6dc`), navy `#1f344a` accent preserved
- **StatusBadge:** Solid linen-friendly fills and borders (not dark `/10` tints)
- **Inner pages:** `work.astro` sans-bold H2s, larger body type, sand bands, unified `−` bullets, navy em-dash for “don’t do” list
- **Overlays removed:** Radial glows on PageHeader, ProjectHero, AvailabilityBanner, portfolio section
- **Navbar:** Active route = 2px navy bottom border (no pill)
- **ProjectCard:** Linen contain background, no image gradient overlay, navy category chip, hover left-bar
- **contact.astro:** Manifest-style link list (matches Help/Who patterns)
- **PageHeader / Footer:** Sand header band, linen footer surface, sans footer links, lab links removed from footer
- **global.css:** `.section-band-sand` utility, linen footer styling

## Protected (not modified)

Hero, HeroCtaBar, WhoPainList, HelpManifestList structure/copy, hero CTA, scroll chevron, help viewport layout, terminal emerald arrows, `homeHelp` / `homeWho` config copy.
