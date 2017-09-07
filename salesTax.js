function calculateSalesTax (salesData, taxRates){

  var i = 0;

  var output = new Object({});


  for(var everything in salesData){

    var company = salesData[i].name;
    // console.log(company);

    if(company in output){

      output[company].totalSales += addSales(salesData[i].sales);
      output[company].totalTaxes += addSales(salesData[i].sales) * taxRates[salesData[i].province];
      // console.log("gere!");

    } else{

      // output = {company};
      output[company] = {totalSales:'', totalTaxes:''};
      output[company].totalSales = (addSales(salesData[i].sales));
      output[company].totalTaxes = (taxRates[salesData[i].province]) *
      addSales(salesData[i].sales);
      // console.log(output);

    }

    i++;

  }

console.log(output);

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