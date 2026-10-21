# Formules financières — v4.3

Toutes les valeurs monétaires sont converties en centimes entiers avant calcul, puis arrondies à deux décimales. Une valeur absente, non finie ou négative est traitée comme zéro. Les lignes supprimées logiquement et les doublons sont ignorés.

- **Commission démarcheur** : `commission_effective = min(max(0, montant_client), max(0, commission_saisie))`. Si le montant client est nul/vide, la commission est `0`.
- **Reste récupérable d’un compte bloqué** : `R_b = max(0, montant_bloque - déjà retiré - frais_visa)`, où `frais_visa` vaut le paramètre « frais bancaires par compte bloqué visa » (défaut `127 €`) uniquement si `statut = visa` et qu’un reste bloqué existait. Sans visa ou sans compte bloqué, aucun frais n’est appliqué.
- **Gain visa** : `G_v = max(0, montant_client - commission_effective)` si le statut est `visa`, sinon `0`.
- **Refus** : `G_r = montant_client × taux_gardé / 100` et `A_r = montant_client - G_r` si le statut est `refus`. Le reste à rembourser est `max(0, A_r - déjà remboursé)`.
- **Gain net agence** : `G = somme(G_v + G_r)` sur les lignes actives.
- **Banques** : `B = N26 + Sparkasse + Commerzbank + Wise`.
- **Disponible** : `D = B` uniquement. Les restes des comptes bloqués ne sont pas disponibles.
- **Capital global** : `C = D + dettes restantes + encours comptes bloqués récupérables + perso restant dû`. L’encours bloqué utilise `R_b` et n’est donc pas recompté avec le disponible.
- **Contrôle de compte** : `K = comptes bloqués - total associés - dettes restantes - refus non remboursés - candidats en attente`. Cette logique est inchangée et utilise le reste bloqué récupérable.
- **Dividendes** : si le gain est négatif ou invalide, chaque part et chaque gain valent `0`; l’interface affiche séparément « Déficit ». Sinon, les poids non négatifs sont normalisés; chaque gain est en centimes, non négatif, et la somme des gains égale exactement le gain réparti au centime.
- **Tri** : tri stable logique sur le champ demandé, avec lignes supprimées/doublons exclus.

Le paramètre `fraisBancairesCompteBloqueVisa` est stocké dans `parametres` et synchronisé avec Supabase.
