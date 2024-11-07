const contractAddress = "0x75807398c86e715CCB11a76075aF191155E77DC9";
const abi = [ /* Paste ABI JSON here */ ];

let web3;
let contract;
let account;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        document.getElementById('connectWallet').addEventListener('click', connectWallet);
        document.getElementById('stakeBtn').addEventListener('click', stake);
        document.getElementById('claimRewardBtn').addEventListener('click', claimReward);
        document.getElementById('clickBtn').addEventListener('click', claimClickBonus);
    } else {
        alert('Metamask is not installed. Please install it to use this app.');
    }
});

async function connectWallet() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        contract = new web3.eth.Contract(abi, contractAddress);
        document.getElementById('status').innerText = `Connected: ${account}`;
    } catch (error) {
        console.error(error);
    }
}

async function stake() {
    const amount = prompt('Enter amount to stake:');
    if (!amount) return;
    try {
        await contract.methods.stake(web3.utils.toWei(amount, 'ether')).send({ from: account });
        alert('Staking successful!');
    } catch (error) {
        console.error(error);
    }
}

async function claimReward() {
    try {
        await contract.methods.claimReward().send({ from: account });
        alert('Reward claimed!');
    } catch (error) {
        console.error(error);
    }
}

async function claimClickBonus() {
    try {
        const reward = 1;  // Set reward value per click to 1
        await contract.methods.claimClickReward().send({ from: account, value: reward });
        alert('Bonus of 1 claimed!');
    } catch (error) {
        console.error(error);
    }
}
