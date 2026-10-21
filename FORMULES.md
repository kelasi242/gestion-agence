# Formules financières — v4.6

Toutes les valeurs sont calculées en centimes entiers puis reconverties en euros. Les lignes supprimées et doublons sont ignorés.

- **Commission démarcheur** : `commission_effective = min(max(0, montant_client), max(0, commission_saisie))`; elle est soustraite du montant client et vaut `0` si le client n’a rien versé.
- **Compte bloqué récupérable** : `R_b = max(0, montant_bloque − déjà retiré − frais_visa)`; frais visa par compte = `127 €` par défaut, uniquement au statut visa lorsqu’un encours existe.
- **Gain visa** : `max(0, montant_client − commission_effective)`.
- **Refus** : montant gardé = `montant_client × taux_gardé / 100`; à rembourser = `max(0, montant_client − montant_gardé − déjà remboursé)`.
- **Perso / investissement prêté** : `max(0, prêté − remboursé)`; c’est un actif, donc ajouté au capital. Ce n’est pas un emprunt.
- **Dettes** : `max(0, montant − remboursé)`; c’est ce que l’utilisateur doit, donc soustrait.
- **Banques** : `B = N26 + Sparkasse + Commerzbank + Wise`.
- **Disponible** : `D = B` uniquement.
- **Capital global** : `C = B + encours_comptes_bloqués_récupérable + perso_restant_dû − dettes_restantes`.
- **Solde de contrôle** : `K = B + comptes_bloqués_récupérables − total_associés − dettes_restantes − refus_non_remboursés − candidats_en_attente`. L’interface affiche excédent si positif, déficit si négatif, équilibré si zéro.
- **Excédent attribué à l’associé 1** : `E = max(0, K)`. Si `K > 0`, l’interface ajoute `E` uniquement au solde affiché après investissement de l’associé 1, sur une ligne séparée « dont excédent attribué ». Si `K ≤ 0`, `E = 0` et rien n’est ajouté.
- **Capital global** : l’excédent `E` n’est pas ajouté à `C` : le capital global reste `B + encours + perso − dettes`, sans double comptage.
- **Test de solvabilité** : `S = C − solde_associé_1_calculé − solde_associé_2_calculé − total_argent_candidats_en_cours`. Chaque solde associé est calculé en lecture seule : `investissement_départ + dividendes + (E pour l’associé 1)`, avec `E = max(0, K)`. Les anciens champs éventuellement stockés `nouveauSoldeMoi`/`nouveauSoldeAxel` sont ignorés, sans migration SQL.
- **Dividendes** : jamais négatifs; un gain invalide ou négatif distribue zéro.
