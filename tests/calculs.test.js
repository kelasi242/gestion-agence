import assert from 'node:assert/strict';import{calcCompte,controleCompte,totaux}from'../src/lib/calculs.js';
const refus=calcCompte({statut:'refus',montant_client:3000,montant_rembourse:0},{pct_refus:100/3});assert.equal(refus.garde_refus,1000);assert.equal(refus.a_rembourser,2000);assert.equal(refus.reste_rembourser,2000);
assert.equal(calcCompte({statut:'visa',montant_client:3000,commission:200}).gain,2800);
assert.equal(controleCompte({comptesBloques:10000,totalAssocies:3000,dettes:1000,refusNonRembourses:500,candidatsAttente:500}).resultat,5000);
assert.equal(controleCompte({comptesBloques:1000,totalAssocies:1500,dettes:100,refusNonRembourses:200,candidatsAttente:300}).resultat,-1100);
assert.equal(controleCompte({comptesBloques:1000,totalAssocies:500,dettes:200,refusNonRembourses:200,candidatsAttente:100}).resultat,0);
assert.equal(totaux({comptes:[],dettes:[],perso:[],parametres:{}}).capital,0);console.log('calculs.test.js: OK — refus 3000€ => 2000€ remboursés / 1000€ gardés; contrôle excédent/déficit/équilibre');
const v4=totaux({comptes:[{statut:'en_cours',montant_bloque:1000,retire:100}],dettes:[{montant:200,rembourse:50}],perso:[{montant:400,rembourse:100}],parametres:{n26:10,sparkasse:20,commerzbank:30,wise:40}});
assert.equal(v4.banques,100);
assert.equal(v4.disponible,1000);
assert.equal(v4.capital,2450);
assert.equal(v4.controle.termes.comptesBloques,900);
console.log('calculs.test.js: OK — soldes bancaires, disponible et capital global v4');

