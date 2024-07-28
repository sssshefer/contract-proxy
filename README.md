<img src="https://github.com/user-attachments/assets/36596c53-2cb3-41ff-942d-7df05c3fdd4d" alt="proxy img" />

# ERC721 Proxy Implementation

## Table of Contents

- [Introduction](#introduction)
- [Theory Notes](#theory-notes)
  - [Why Use Proxies](#why-use-proxies)
  - [Proxy Patterns in Ethereum](#proxy-patterns-in-ethereum)
- [Features and Functionality](#features-and-functionality)
- [Implementation](#implementation)
  - [Contract Overview](#contract-overview)
  - [Tests](#tests)
- [Running the Project Locally](#running-the-project-locally)

## Introduction

This project showcases an implementation of the ERC721 token standard using proxy contracts. The code is partly derived from OpenZeppelin and demonstrates a proxy implementation using the UUPS (Universal Upgradeable Proxy Standard) pattern. The project includes both the initial proxy contract and an upgraded version to illustrate the upgradeability features.

## Theory Notes

### Why Use Proxies

In blockchain, all information stored is immutable and unchangeable, which is one of the core principles of the technology. When a contract needs an update, developers have the option to deploy a new contract address and inform users to use it. However, this approach is not convenient and can cause significant disruption.

Proxies offer the best solution for this problem by allowing seamless upgrades without changing the contract address. They ensure:

1. **Upgradeability**: Allows contracts to be updated with new features or fixes without changing the contract address.
2. **Storage Separation**: Keeps the storage layout separate from the logic, ensuring that data remains consistent across upgrades.
3. **Cost Efficiency**: Deploying proxies can be more gas efficient compared to redeploying full contracts.

### Proxy Patterns in Ethereum

The two main types of proxy patterns are the Transparent Proxy and the UUPS Proxy. 

- **Transparent Proxy**: Separates the logic and storage of the contract. The proxy contract delegates calls to the logic contract, which contains the actual implementation.
- **UUPS Proxy**: Allows the logic contract to include upgrade functionality, reducing the need for additional proxy logic.
  
## Features and Functionality

- **ERC721 Compliance**: Implements the ERC721 standard for non-fungible tokens.
- **Upgradeable**: Utilizes the UUPS pattern for contract upgradeability.
- **Metadata Storage**: Supports URI storage for token metadata.
- **Burnable Tokens**: Allows tokens to be burned, removing them from circulation.
- **Ownership Management**: Includes functionality for transferring and renouncing ownership.

## Implementation

### Contract Overview

The project includes two main contracts:

- **ContractProxy**: The initial version of the proxy contract.
- **ContractProxyV2**: An upgraded version with additional features.

Both contracts inherit from several OpenZeppelin upgradeable contracts, including `ERC721Upgradeable`, `ERC721URIStorageUpgradeable`, `ERC721BurnableUpgradeable`, `OwnableUpgradeable`, and `UUPSUpgradeable`.

### Tests

The project includes a comprehensive test suite to ensure the proper functionality of the proxy implementation and its upgradeability. The tests cover deployment, minting, and upgrading the proxy contract.

## Running the Project Locally

To run the project locally, you need to install the following npm libraries:

```json
{
  "@openzeppelin/contracts-upgradeable": "^5.0.2",
  "@openzeppelin/hardhat-upgrades": "^3.2.0"
}
```

- Clone the repository and install the dependencies:
```bash
git clone https://github.com/sssshefer/contract-proxy.git
cd contract-proxy
npm install
```

- Deploy and test the contracts using Hardhat:

```bash
npx hardhat test
```
This will run the test suite and verify the functionality of the proxy contracts.

<a href="https://ru.freepik.com/free-vector/garantia-kacestva-biznes-sdelka-garantiinyi-sertifikat_12085320.htm#fromView=search&page=1&position=0&uuid=82f43d94-c645-4416-982c-05886355c3fb">Header pic is from vectorjuice on Freepik</a>

