// 'use strict';

const payBtn = document.querySelector('.pay-btn');
const connectBtn = document.querySelector('.connect-btn');
const address = document.querySelector('#address');
const intern = document.querySelector('.intern');
const junior = document.querySelector('.junior');
const senior = document.querySelector('.senior');

const payments = [100, 200, 300];
const position = document.querySelector('.positions');

// console.log(position);

// payBtn.addEventListener('click', function () {
//   const finalAddress = address.value;
//   const post = parseInt(position.value);

//   //   console.log(post);

//   //   console.log(finalAddress);
//   //   console.log(position);
//   if (post === 0) {
//     console.log(
//       `An amount of ${payments[0]} has been transferred to ${finalAddress}`,
//     );
//   } else if (post === 1) {
//     console.log(
//       `An amount of ${payments[1]} has been transferred to ${finalAddress}`,
//     );
//   } else if (post === 2) {
//     console.log(
//       `An amount of ${payments[2]} has been transferred to ${finalAddress}`,
//     );
//   }
// });

// var provider;
// var connection;

// const connectWallet = async function () {
//   provider = new ethers.providers.Web3Provider(window.ethereum);
//   connection = await provider.send('eth_requestAccounts', []);
//   console.log(provider);
//   console.log(connection);
//   connectBtn.textContent = 'Connected';
// };

const salaryContractABI = [
  {
    inputs: [],
    name: 'acceptPayment',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'empAddress',
        type: 'address',
      },
      {
        internalType: 'enum Salary.Position',
        name: '_position',
        type: 'uint8',
      },
    ],
    name: 'addEmployee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'payEmployees',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allEmployees',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getContractBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isEmployee',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
const salaryContractAddress = '0xF45C102804dCbe741f43707244A0764deb2fb40C';

// let provider;
// let signer;

const connectWallet = async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(provider);
  const accounts = await provider.send('eth_requestAccounts', []);
};

// const ourContract = new ethers.Contract(
//   salaryContractABI,
//   salaryContractAddress,
//   signer,
// );

connectWallet();
// connectBtn.addEventListener('click', () => {
//   // CONNECTTING ETHEREUM
//   connectWallet();
//   // ethereum.request({ method: 'eth_requestAccounts' });
// });

// console.log(pay);
