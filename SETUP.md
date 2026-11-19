# HDD Bill Manager (Web, Firebase sync)

Files: index.html, sw.js, manifest.json, icon-192.png, icon-512.png

## 1. GitHub Pages par chalao (free)
1. GitHub par naya public repo banao (jaise `hdd-bills`).
2. In 5 files ko repo ke root par upload karo (Add file -> Upload files).
3. Settings -> Pages -> Source: "Deploy from a branch", Branch: main, folder: / (root) -> Save.
4. 1-2 minute baad link milega: https://USERNAME.github.io/hdd-bills/

## 2. Firebase mein domain allow karo (zaroori)
Firebase Console -> Authentication -> Settings -> Authorized domains -> Add domain:
`USERNAME.github.io`

## 3. Pehli baar
- Link kholo, dono bhai ke email/password se login karo (jo Authentication -> Users mein banaye).
- Chrome menu -> "Add to Home screen" / "Install app".
- Pehli baar internet chahiye; uske baad offline bhi chalega aur net aane par sync ho jayega.

## Dhyan
- Firebase Firestore rules mein sirf logged-in users ko access rakho.
- Regular Backup button se JSON backup lete raho.
- Link public repo par hai, par data login ke bina nahi dikhta.
