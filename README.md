# Gestion Agence · v4.1

Application React + Vite, PWA et Supabase pour le suivi des comptes bloqués, candidats, dettes et remboursements.

## Démarrage

```bash
npm install
npm run dev
```

`npm run build` produit la version Netlify dans `dist/`. `npm run test:calculs` exécute les tests métier centralisés.

## Configuration

Les variables Supabase sont documentées dans `.env.example` et `.env.local`. L’URL et la clé publishable du projet Gestion Agence sont conservées dans le code de secours pour permettre le build Netlify sans variable injectée. Ne jamais remplacer cette clé par celle d’un autre projet.

Le logo, le thème et les paramètres de l’agence sont stockés en local dans le navigateur. Les données métier restent synchronisées avec Supabase et la file d’attente hors-ligne est conservée localement.

## Calculs métier

- Refus : 1/3 du montant client est gardé, 2/3 est remboursé. Par exemple 3 000 € donnent 1 000 € gardés et 2 000 € à rembourser.
- Visa : gain agence = montant client − commission.
- Contrôle : `total comptes bloqués − somme du total des associés − total de ce que je dois − total des refus pas encore remboursés − total des candidats en attente`.
- Dividendes : le gain agence est ventilé selon la part de chaque associé ; le nouveau solde ajoute le gain à l’investissement de départ.
