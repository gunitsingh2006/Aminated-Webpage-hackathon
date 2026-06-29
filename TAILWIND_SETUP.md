# Tailwind CSS Setup Instructions

If Tailwind is not working, follow these steps:

## 1. Install Dependencies

Make sure you've installed all required packages:

```bash
npm install
```

Or install them individually:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## 2. Verify Configuration Files

The project uses `.cjs` extension for config files to ensure compatibility:
- `tailwind.config.cjs` - Tailwind configuration
- `postcss.config.cjs` - PostCSS configuration

## 3. Restart Dev Server

After installing dependencies or making config changes:

1. Stop the current dev server (Ctrl+C)
2. Restart it:
```bash
npm run dev
```

## 4. Verify Tailwind is Working

Check if Tailwind classes are being applied. You should see:
- Background colors working (bg-black, bg-white, etc.)
- Custom colors working (bg-accent, text-accent, etc.)
- Custom fonts working (font-bebas, font-unbounded, font-dm)

## 5. Common Issues

### Issue: Classes not applying
- **Solution**: Clear browser cache and restart dev server
- **Solution**: Check browser console for CSS errors

### Issue: Custom colors not working
- **Solution**: Verify `tailwind.config.cjs` has the correct color definitions
- **Solution**: Restart dev server after config changes

### Issue: Build errors
- **Solution**: Make sure all dependencies are installed
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install`

## 6. Test Tailwind

Add a test div to verify Tailwind is working:

```jsx
<div className="bg-accent text-white p-4">
  Tailwind Test
</div>
```

If this shows a red background with white text, Tailwind is working correctly.
