# Gestion Agence
Application React + Vite, PWA, Supabase Auth/Realtime-ready et déployable sur Netlify.

## Démarrage
```bash
cp .env.example .env.local
npm install
npm run dev
```
Puis exécuter `schema.sql` dans Supabase et créer les deux comptes Auth (propriétaire et AXEL GOMA). Les variables Vite sont obligatoires pour la connexion cloud.

## Logique métier
Le module `src/lib/calculs.js` centralise les calculs. Un refus à 3 000 € garde 1 000 € (1/3) et rembourse 2 000 € (2/3), jamais la totalité. Visa : gain du montant client moins commission. Capital : banques + bloqué + argent à récupérer − dettes − remboursements restants.

## Validation
`npm run test:calculs` teste notamment le cas 3 000 € refusé. `npm run build` produit `dist/` pour Netlify.
