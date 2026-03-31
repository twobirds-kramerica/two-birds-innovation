# Push to GitHub — Two Birds Innovation

## Step 1: Create the remote repository
Go to https://github.com/new and create a new repo:
- Name: `two-birds-innovation`
- Visibility: Public
- Do NOT initialise with README, .gitignore, or licence

## Step 2: Push from local

```bash
cd C:\twobirds\two-birds-innovation
git remote add origin https://github.com/twobirds-kramerica/two-birds-innovation.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, / (root)
4. Save

Site will be live at: https://twobirds-kramerica.github.io/two-birds-innovation/

## Notes
- Deep space design theme — dark background, teal accents
- Animated scroll counters in Results section
- FAQPage schema markup for SEO
- Fully static — no build step, no dependencies
