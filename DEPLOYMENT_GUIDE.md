# Full Deployment Guide: Faisal Hossen Portfolio (Next.js + Firebase)

Ei guide ti follow kore apni apnar full website ti jekono custom hosting ba Vercel/Netlify te deploy korte parben.

## 1. Prerequisites (Proyojoniyo Jinish)
- **Node.js**: Apnar computer e Node.js (v18+) install thakte hobe.
- **Firebase Account**: Ekta active Firebase project thakte hobe.
- **Domain & Hosting**: Vercel (Recommended for Next.js), Netlify, ba jekono VPS (DigitalOcean/Linode).

---

## 2. Firebase Setup (Console theke)
Apni jodi AI Studio theke Firebase setup kore thaken, tobe settings gulo `firebase-applet-config.json` file e paben. Jori notun kore korte chan:
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a New Project.
3. **Authentication**: Enable "Google Sign-In" provider.
4. **Firestore Database**: Create database in "Production Mode" and choose a region (e.g., `asia-east1`).
5. **Storage**: Enable Firebase Storage for image uploads.
6. **Project Settings**: "Add App" (Web) e click kore config gulo copy korun.

---

## 3. Environment Variables (.env)
Production e security er jonno environment variables use kora bhalo. Apnar project er root e ekta `.env.local` file create korun:

```env
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_DATABASE_ID=your-database-id
```

*Note: `firebase.ts` file e config gulo ei variables theke load korar moto update korte hobe.*

---

## 4. Firestore Rules Deploy
Apnar local terminal theke Firebase CLI use kore rules deploy korte hobe:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init firestore`
4. Deploy: `firebase deploy --only firestore:rules`

---

## 5. Deployment Options

### Option A: Vercel (Recommended)
Next.js er jonno Vercel shobcheye shohoj:
1. GitHub e apnar code push korun.
2. Vercel e login kore "New Project" e click korun.
3. GitHub repository select korun.
4. **Environment Variables** section e uporer `.env` variables gulo add korun.
5. "Deploy" e click korun. Done!

### Option B: Custom VPS (Ubuntu/Nginx)
Jodi apni nijer server e host korte chan:
1. Server e code clone korun.
2. `npm install` diye dependencies install korun.
3. `npm run build` diye production build create korun.
4. **PM2** use kore app start korun: `pm2 start npm --name "portfolio" -- start`
5. **Nginx** reverse proxy setup korun port 3000 er jonno.

---

## 6. Admin Access
Dashboard access korar jonno:
1. `app/admin/page.tsx` file e `ADMIN_EMAIL` variable ti check korun.
2. `firestore.rules` file e apnar email ti allow kora ache kina nishchit korun.

---

## 7. Final Check
- Check if images are loading (Referrer policy check).
- Check if Google Login is working (Authorized domains e apnar domain add korte hobe Firebase Console e).
- Check if Firestore data is fetching correctly.

---
*Prepared for Faisal Hossen Portfolio Project*
