const contract = new web3.eth.Contract(contractAbi); // need abi of smart contract 

const handleLoginWithMagicLink = async () => {
  const email = document.getElementById('user-email').value;

  fmPhantom.loginWithMagicLink({ email })
    .then((user) => {
      document.getElementById('status').innerHTML = 'Log in successful!'
    })
    .catch((err) => (document.getElementById('status').innerHTML = err));
  document.getElementById('status').innerHTML = 'Magic Link Sent, Please Check your email';
};


const handleIsLoggedIn = async () => {
  alert(await fmPhantom.user.isLoggedIn());
};

const handleLogout = async () => {
  await fmPhantom.user.logout();
};

let handleGetMetadata = async () => {
  const metadata = await fmPhantom.user.getMetadata();
  alert(JSON.stringify(metadata));
};

var byteCode = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006001819055506106f8806100686000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630dc29f7f1461005c57806338eada1c146100b857806367b142fc146101755780638da5cb5b14610197578063de63b0e1146101e1575b600080fd5b61009e6004803603602081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101ff565b604051808215151515815260200191505060405180910390f35b6100fa600480360360208110156100ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610255565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013a57808201518184015260208101905061011f565b50505050905090810190601f1680156101675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d610457565b604051808215151515815260200191505060405180910390f35b61019f61061a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e961063f565b6040518082815260200191505060405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60606000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610319576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f53656e646572206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b60001515600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146103df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4164647265737320697320616c7265616479206f6e2077686974656c6973740081525060200191505060405180910390fd5b6001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060405180606001604052806027815260200161069d602791399050919050565b600060011515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806106796024913960400191505060405180910390fd5b60001515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146105ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061064a602f913960400191505060405180910390fd5b600160008154600101919050819055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060015490509056fe5468697320616464726573732068617320616c7265616479207369676e656420746865207472616e73616374696f6e546869732061646472657373206973206e6f74206f6e207468652077686974656c6973744164647265737320686173206265656e20616464656420746f207468652077686974656c697374a265627a7a72315820b7a1a61ab243ff80a4cf35311fd0da96f02992c5842072ad61ddd9c63174a19164736f6c63430005100032';

const deploying = async () => {
  const userAddress = (await fmPhantom.user.getMetadata()).publicAddress;

  contract.deploy({ data: byteCode })
    .send({
      from: userAddress,
      gas: 1500000,
      gasPrice: '3000000000000'
    })
    .then(console.log);
};

let addWhitelist = async (address) => {
  contract.methods.addAddress(address).send({
    from: userAddress
  })
    .then(console.log);
}

let signContract = async () => {
  contract.methods.signTransaction().send({
    from: userAddress
  })
    .then(console.log);
};

let checkStatus = async () => {
  contract.methods.returnN().call({
      from: fmPhantom.user.getMetadata().publicAddress
  })
  .then(console.log);
};