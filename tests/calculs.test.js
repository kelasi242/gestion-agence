import assert from 'node:assert/strict'; import {calcCompte,totaux} from '../src/lib/calculs.js';
const c=calcCompte({statut:'refus',montant_client:3000,montant_rembourse:0},{pct_refus:100/3}); assert.equal(c.a_rembourser,2000); assert.equal(c.garde_refus,1000); assert.equal(c.reste_rembourser,2000);
assert.equal(calcCompte({statut:'visa',montant_client:3000,commission:200}).gain,2800); assert.equal(totaux({comptes:[],dettes:[],perso:[],parametres:{}}).capital,0); console.log('calculs.test.js: OK');
