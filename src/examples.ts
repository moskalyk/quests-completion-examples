import { SequenceIndexer } from '@0xsequence/indexer'
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://nodes.sequence.app/xai');
const indexer = new SequenceIndexer('https://xai-indexer.sequence.app', 'AQAAAAAAAF_J-M4Ta7l92mAHww-stlUh2vE')
const contractAddressERC1155 = '0xd92bf659b72ffdf28393fce5445d52891fc6279d';
const contractAddressERC721 = '0x5ca3070aee6c219fdde2a612a2cf2610f206833b';
const contractAddressERC20 = '0xb184a52217fa7a302025a94365dc52eee1d88d61'

// deploy an erc1155 contract
export const deployedERC1155Validation = async (address: string) => {
    
    const contractABI = [ // Minimal ABI to include only the function you need
      "function hasRole(bytes32 role, address account) view returns (bool)"
    ];

    const contract = new ethers.Contract(contractAddressERC1155, contractABI, provider);
        
    const role = '0x0000000000000000000000000000000000000000000000000000000000000000';
    const account = address;
    
    try {
      const hasRole = await contract.hasRole(role, account);
      return hasRole
    } catch (error) {
      console.error('Error:', error);
    }
}

// mint an erc1155
export const mintedERC1155Validation = async (address: string) => {
  const tokenDetails = await indexer.getTokenBalances({
    contractAddress: contractAddressERC1155,
    accountAddress: address,
    includeMetadata: true
  })

  let booleanCheck = false

  tokenDetails.balances.map((token: any) => {
    if(Number(token.balance) > 0){
      booleanCheck =true
    }
  })

  return booleanCheck
}

// deploy an erc721 contract
export const deployedERC721Validation = async (address: string) => {
  const contractABI = [ // Minimal ABI to include only the function you need
    "function hasRole(bytes32 role, address account) view returns (bool)"
  ];

  const contract = new ethers.Contract(contractAddressERC721, contractABI, provider);
      
  const role = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const account = address;

  try {
    const hasRole = await contract.hasRole(role, account);
    return hasRole
  } catch (error) {
    console.error('Error:', error);
  }
}

// mint an erc721
export const mintERC721Validation = async (address: string) => {
  const tokenDetails = await indexer.getTokenBalances({
    contractAddress: contractAddressERC721,
    accountAddress: address,
    includeMetadata: true
  })

  let booleanCheck = false

  tokenDetails.balances.map((token: any) => {
    if(Number(token.balance) > 0){
      booleanCheck =true
    }
  })

  return booleanCheck
}

// deploy an erc20
export const deployedERC20Validation = async (address: string) => {
  const contractABI = [ // Minimal ABI to include only the function you need
    "function hasRole(bytes32 role, address account) view returns (bool)"
  ];

  const contract = new ethers.Contract(contractAddressERC20, contractABI, provider);
      
  const role = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const account = address;

  try {
    const hasRole = await contract.hasRole(role, account);
    return hasRole
  } catch (error) {
    console.error('Error:', error);
  }
}

// mint an erc20
export const mintERC20Validation = async (address: string) => {
  const tokenDetails = await indexer.getTokenBalances({
    contractAddress: contractAddressERC20,
    accountAddress: address,
    includeMetadata: true
  })

  let booleanCheck = false

  tokenDetails.balances.map((token: any) => {
    if(Number(token.balance) > 0){
      booleanCheck = true
    }
  })

  return booleanCheck
}

// burn an erc721
export const burnedERC721Validation = async (address: any) => {
 
  // try any account address you'd like :)
  const filter = {
    accountAddress: address
  }
  
  // query Sequence Indexer for all token transaction history on Polygon
  const transactionHistory = await indexer.getTransactionHistory({
    filter: filter,
    includeMetadata: true
  })
    
  let booleanCheck = false

  transactionHistory.transactions.map((tx: any) => {
    tx.transfers.map((transfer: any) => {
      if(transfer.transferType == 'SEND' && transfer.to == '0x0000000000000000000000000000000000000000') booleanCheck = true
    })
  })

  return booleanCheck
};