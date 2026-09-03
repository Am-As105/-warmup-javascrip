

const commandes = [
 { montant: 150, statut: "standard" },
 { montant: 620, statut: "standard" },
 { montant: 1200, statut: "premium" }
];



function calculerCommande(montant, statut) 
{
    let discount = 0; 
     if (montant < 200)
        discount = 0
    if (montant >= 200  && montant <= 499)
        discount = 5 ;
    if (montant >= 500 && montant <= 999)
        discount = 10;

    if (montant >= 1000)
        discount = 15;
    if (statut === "premium")
        discount = discount + 5;
    if (discount > 20)
        discount = 20;
    let  remise =  montant * discount / 100;
    let totalAfter = montant - remise;
    let  livraision ;
    if ( totalAfter  >= 300 )
        livraision = 0;
        else
            livraision= 30;
        
    let total = livraision + totalAfter ;


    let  result  =
    {
        montant:montant,
        pourcentageRemise: discount,
        totalApresRemise:totalAfter,
        remise:remise,
        totalAPayer:total,
        livraison:livraision,   
    }

    return result;




}

console.log(calculerCommande(commandes[0].montant, commandes[0].statut));
console.log(calculerCommande(commandes[2].montant, commandes[2].statut));