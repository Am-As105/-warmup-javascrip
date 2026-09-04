const ventes = [
 { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
 { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
 { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
 { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
 { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
 { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

function calculatetotal(sales)
{
    return sales.reduce((total, sale) => 
    {
        return total + sale.montant;
    }, 0);
}

function findbestsale(sales)
{
    return sales.reduce((best, sale) => 
    {
        if (sale.montant > best.montant)
        {
            return sale;
        }
        return best;
    });
}

function calculatebyseller(sales)
{
    let sellersales = {};

    sales.forEach((sale) => 
    {
        if (sellersales[sale.vendeur])
        {
            sellersales[sale.vendeur] += sale.montant;
        }
        else
        {
            sellersales[sale.vendeur] = sale.montant;
        }
    });

    return sellersales;
}

function calculateaverage(sellersales)
{
    let amounts = Object.values(sellersales);

    let total = amounts.reduce((sum, amount) => 
    {
        return sum + amount;
    }, 0);

    return total / amounts.length;
}

function findaboveaverage(sellersales, average)
{
    return Object.keys(sellersales).filter((seller) => 
    {
        return sellersales[seller] > average;
    });
}

function generatereport(sales)
{
    let total = calculatetotal(sales);
    let bestsale = findbestsale(sales);
    let sellersales = calculatebyseller(sales);
    let average = calculateaverage(sellersales);
    let aboveaverage = findaboveaverage(sellersales, average);

    let report = "=== SALES REPORT ===\n\n";

    report += "total sales : " + total + " DH\n\n";
    report += "best sale : " + bestsale.produit + " (" + bestsale.vendeur + ") - " + bestsale.montant + " DH\n\n";
    report += "sales by seller :\n";

    Object.keys(sellersales).map((seller) => 
    {
        report += seller + " : " + sellersales[seller] + " DH\n";
    });

    report += "\naverage : " + average.toFixed(2) + " DH\n";
    report += "above average : " + aboveaverage.join(", ");

    return report;
}

console.log(generatereport(ventes));