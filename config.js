// ===== CONFIG: edit here, the whole site updates =====
const SITE={
name:"Groupe Scolaire Franco-Guinéen Les Héros d'Afrique",short:"GSFG-HA",
motto:["Discipline","Savoir","Leadership"],
tagline:"Au cœur de l'excellence, nous formons les héros de l'Afrique de demain.",
intro:"Offrez à vos enfants une éducation de qualité dans un cadre moderne, sécurisé et propice à la réussite.",
year:"2026-2027",
colors:{primary:"#12265a",accent:"#f26a21"},
phones:["+224 628 19 80 19","+224 620 39 80 28"],whatsapp:"224628198019",
address:"Dubréka, en face de l'École Normale d'Instituteurs (ENI)",
// images go in assets/images/ (missing ones are replaced by a soft placeholder)
images:{logo:"logo.jpg",hero:"hero.jpg",about:"about.jpg",founder:"founder.jpg",director:"director.jpg",bibliotheque:"bibliotheque.jpg",basketball:"basketball.jpg",informatique:"informatique.jpg",classe:"classe.jpg",gallery:["gallery-1.jpg","gallery-2.jpg","gallery-3.jpg","gallery-4.jpg","gallery-5.jpg","gallery-6.jpg"]},
pillars:[["Discipline","Un cadre structuré où chaque élève apprend la rigueur et le respect."],["Savoir","Un enseignement de qualité, des effectifs réduits et un suivi personnalisé."],["Leadership","Des élèves confiants, prêts à prendre des initiatives et à servir leur pays."]],
atouts:[["book","Enseignement de qualité"],["shield","Environnement sain et sécurisé"],["monitor","Infrastructure moderne et bien équipée"],["spark","Activités périscolaires variées"],["compass","Orientation et suivi personnalisés"],["lang","Langues étrangères : anglais, espagnol, arabe"],["clock","Garderie jusqu'à 18h00"],["users","Effectifs réduits pour un meilleur suivi"]],
infra:[["book","Bibliothèque moderne","bibliotheque"],["ball","Terrain de basketball","basketball"],["monitor","Salle informatique","informatique"],["snow","Salles de classe climatisées","classe"]],
team:{ // TEXTES ET NOMS A REMPLACER par ceux de l'école
intro:"Des classes à effectifs réduits permettent à chaque enseignant de connaître ses élèves et de suivre leurs progrès de près.",
points:[["compass","Suivi et orientation","Chaque élève est accompagné de manière personnalisée, de la crèche à la Terminale."],["lang","Langues vivantes","Les élèves étudient l'anglais, l'espagnol et l'arabe."],["users","Effectifs réduits","Moins d'élèves par classe pour un meilleur suivi au quotidien."]],
founder:{name:"Nom du fondateur",role:"Fondateur",text:"Notre ambition est de former les héros de l'Afrique de demain : des élèves disciplinés, instruits et animés par l'esprit de leadership."},
director:{name:"Nom du directeur",role:"Directeur",text:"Notre équipe s'engage chaque jour à offrir à chaque enfant un cadre sûr, moderne et exigeant pour réussir."},
teachers:[{name:"Nom Prénom",subject:"Matière",img:"teacher-1.jpg"},{name:"Nom Prénom",subject:"Matière",img:"teacher-2.jpg"},{name:"Nom Prénom",subject:"Matière",img:"teacher-3.jpg"},{name:"Nom Prénom",subject:"Matière",img:"teacher-4.jpg"}]},
levels:[
{id:"creche",name:"Crèche garderie",sub:"Jusqu'à 18h00",color:"#e0a100",fee:6000000,t:[2000000,2000000,2000000]},
{id:"maternelle",name:"Maternelle",sub:"PS, MS, GS",color:"#f26a21",fee:4500000,t:[1500000,1500000,1500000],boys:"Culotte grise et chemise à manches courtes orange",girls:"Jupe grise et chemise à manches courtes orange"},
{id:"primaire",name:"Primaire",sub:"1ère à 6ème année",color:"#1d6b3a",fee:4500000,t:[1500000,1500000,1500000],boys:"Culotte kaki et chemise kaki à manches courtes",girls:"Jupe kaki et chemise kaki à manches courtes"},
{id:"college",name:"Collège",sub:"7ème à 10ème année",color:"#12265a",fee:4500000,t:[1700000,1650000,1650000],boys:"Pantalon kaki et chemise kaki à manches courtes",girls:"Robe kaki"},
{id:"lycee",name:"Lycée",sub:"11ème année à Terminale",color:"#c8102e",fee:5000000,t:[1700000,1650000,1650000],boys:"Pantalon bleu et chemise blanche à manches courtes",girls:"Jupe bleue et chemise blanche à manches courtes"}],
extras:[["Inscription","150 000 GNF"],["Badge scolaire","Inclus"],["Paquet de rame","Obligatoire"],["Maillot de sport","Obligatoire"],["Maternelle à la 6ème année","70 000 GNF"],["7ème année à Terminale","100 000 GNF"]],
steps:["Contactez l'école par téléphone ou WhatsApp","Réglez les frais d'inscription","Suivez la scolarité en 3 tranches"]
};
