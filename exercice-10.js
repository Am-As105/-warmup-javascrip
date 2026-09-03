function calculateTotal(sales)
{
    return sales.reduce((total, sale) => 
    {
        return total + sale.amount;
    }, 0);
}

function findBestSale(sales)
{
    return sales.reduce((best, sale) => 
    {
        if (sale.amount > best.amount)
        {
            return sale;
        }
        return best;
    });
}

function calculateBySeller(sales)
{
    let sellerSales = {};

    sales.forEach((sale) => 
    {
        if (sellerSales[sale.seller])
        {
            sellerSales[sale.seller] += sale.amount;
        }
        else
        {
            sellerSales[sale.seller] = sale.amount;
        }
    });

    return sellerSales;
}

function calculateAverage(sellerSales)
{
    let amounts = Object.values(sellerSales);

    let total = amounts.reduce((sum, amount) => 
    {
        return sum + amount;
    }, 0);

    return total / amounts.length;
}

function findAboveAverage(sellerSales, average)
{
    return Object.keys(sellerSales).filter((seller) => 
    {
        return sellerSales[seller] > average;
    });
}

function generateReport(sales)
{
    let total = calculateTotal(sales);
    let bestSale = findBestSale(sales);
    let sellerSales = calculateBySeller(sales);
    let average = calculateAverage(sellerSales);
    let aboveAverage = findAboveAverage(sellerSales, average);

    let report = "=== SALES REPORT ===\n\n";

    report += "total sales : " + total + " DH\n\n";
    report += "Best sale : " + bestSale.product + " (" + bestSale.seller + ") - " + bestSale.amount + " DH\n\n";
    report += "Sales by seller :\n";

    Object.keys(sellerSales).map((seller) => 
    {
        report += seller + " : " + sellerSales[seller] + " D\n";
    });

    report += "\nAverage : " + average.toFixed(2) + " DH\n";
    report += "Above average : " + aboveAverage.join(", ");

    return report;
}

console.log(generateReport(sales));