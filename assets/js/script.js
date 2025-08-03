let cashInput = document.getElementById("cash");
let changeDueDisplay = document.getElementById("change-due");
let purchaseButton = document.getElementById("purchase-btn");
let cashDrawerDisplay = document.getElementById("cash-in-drawer");

let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

document.getElementById("price").innerHTML = `Price: ${price}`;

const checkTransaction = () => {
  let customerPayment = parseFloat(cash.value);
  let changeDue = Number((customerPayment - price).toFixed(2));
  let totalCid = Number(
    cid.reduce((total, sum) => total + sum[1], 0).toFixed(2)
  );

  document.getElementById("change").innerHTML = `Change: ${changeDue}`;

  if (customerPayment < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (customerPayment === price) {
    changeDueDisplay.innerText =
      "No change due - customer paid with exact cash";
    return;
  } else if (cashInput.value === "") {
    return;
  }

  if (changeDue > totalCid) {
    changeDueDisplay.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const denominationValues = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const denominationNames = [
    "ONE HUNDRED",
    "TWENTY",
    "TEN",
    "FIVE",
    "ONE",
    "QUARTER",
    "DIME",
    "NICKEL",
    "PENNY",
  ];
  let changeArr = [];
  let cidCopy = [...cid];

  for (let i = 0; i < denominationValues.length; i++) {
    let denominationTotal = 0;
    while (
      changeDue >= denominationValues[i] &&
      cidCopy[cidCopy.length - 1 - i][1] > 0
    ) {
      cidCopy[cidCopy.length - 1 - i][1] = Number(
        (cidCopy[cidCopy.length - 1 - i][1] - denominationValues[i]).toFixed(2)
      );
      changeDue = Number((changeDue - denominationValues[i]).toFixed(2));
      denominationTotal += denominationValues[i];
    }

    if (denominationTotal > 0) {
      changeArr.push([denominationNames[i], denominationTotal]);
    }
  }

  if (changeDue > 0) {
    changeDueDisplay.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const remainingCid = cidCopy.reduce(
    (total, denomination) => total + denomination[1],
    0
  );
  if (remainingCid === 0) {
    changeDueDisplay.innerHTML =
      "Status: CLOSED " +
      changeArr
        .map(
          (denomination) => `${denomination[0]}: $${denomination[1].toFixed(2)}`
        )
        .join(" ");
    cid = cid.map((denomination) => [denomination[0], 0]);
  } else {
    changeDueDisplay.innerHTML =
      "Status: OPEN <br><br>" +
      changeArr
        .map(
          (denomination) =>
            `${denomination[0]}: $${denomination[1].toFixed(2)} <br>`
        )
        .join(" ");
    cid = cidCopy;
  }

  updateCashDrawerDisplay();
};

const updateCashDrawerDisplay = () => {
  cashDrawerDisplay.innerHTML =
    "<h4>Cash in Drawer:</h4>" +
    cid
      .map(
        (denomination) =>
          `${denomination[0]}: $${denomination[1].toFixed(2)} <br>`
      )
      .reverse()
      .join("");
};

window.onload = updateCashDrawerDisplay;

purchaseButton.addEventListener("click", checkTransaction);

cash.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkTransaction();
  }
});
