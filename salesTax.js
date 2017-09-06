function calculateSalesTax (salesData, taxRates){

  var i = 0;

  for(var everything in salesData){

    var output = new Object();
    output.name = salesData[i].name + ' ' + salesData[i].province;
    output.totalSales = addSales(salesData[i].sales);
    output.totalTaxes = salesTaxRates[salesData[i].province] * output.totalSales;

    console.log(output);
    i++;

  }


}

function addSales(totalSale){

  var total = 0;

  for(var salesTotal of totalSale){

    total += salesTotal;

  }

  return total;

}

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax(companySalesData, salesTaxRates);