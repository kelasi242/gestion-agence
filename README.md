# Gestion Agence · v4.5

Application React + Vite, PWA et Supabase pour le suivi des comptes bloqués, candidats, prêts personnels et dettes.

## Démarrage
```bash
npm install
npm run dev
npm run test:calculs
npm run build
```

## Calculs métier
- Disponible = banques uniquement : N26 + Sparkasse + Commerzbank + Wise.
- Capital global = banques + comptes bloqués récupérables après frais visa de 127 € + perso restant dû (argent prêté) − dettes restantes (argent que je dois).
- Solde de contrôle = banques + comptes bloqués − associés − dettes − refus non remboursés − candidats en attente ; l’état excédent/déficit/équilibré est explicite.
- Solde de contrôle excédentaire : si K > 0, l’excédent est attribué uniquement à l’affichage du solde après investissement de l’associé 1 (ligne séparée « dont excédent attribué »). Un déficit ou zéro n’ajoute rien.
- Solvabilité = capital global − nouveau solde moi − nouveau solde Axel − candidats en cours ; l’excédent n’entre pas dans cette formule.
- Libellés : **Perso — prêté (on me doit)** et **Dettes — je dois**.
- Capital global et contrôle restent inchangés par l’attribution d’affichage ; aucun double comptage.
- Commission démarcheur soustraite du montant client, zéro si aucun versement client. Dividendes jamais négatifs.

Voir `FORMULES.md` pour les définitions exactes.
