
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  AztecAddressLike,
  CompleteAddress,
  Contract,
  ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  ContractMethod,
  DeployMethod,
  EthAddress,
  EthAddressLike,
  FieldLike,
  Fr,
  Point,
  PublicKey,
  Wallet,
} from '@aztec/aztec.js';
import FlashLoanContractArtifactJson from './FlashLoan.json' assert { type: 'json' };
export const FlashLoanContractArtifact = FlashLoanContractArtifactJson as ContractArtifact;

/**
 * Type-safe interface for contract FlashLoan;
 */
export class FlashLoanContract extends ContractBase {
  
  private constructor(
    completeAddress: CompleteAddress,
    wallet: Wallet,
    portalContract = EthAddress.ZERO
  ) {
    super(completeAddress, FlashLoanContractArtifact, wallet, portalContract);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, FlashLoanContract.artifact, wallet) as Promise<FlashLoanContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, ) {
    return new DeployMethod<FlashLoanContract>(Point.ZERO, wallet, FlashLoanContractArtifact, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
   */
  public static deployWithPublicKey(publicKey: PublicKey, wallet: Wallet, ) {
    return new DeployMethod<FlashLoanContract>(publicKey, wallet, FlashLoanContractArtifact, Array.from(arguments).slice(2));
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return FlashLoanContractArtifact;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public methods!: {
    
    /** compute_note_hash_and_nullifier(contract_address: field, nonce: field, storage_slot: field, serialized_note: array) */
    compute_note_hash_and_nullifier: ((contract_address: FieldLike, nonce: FieldLike, storage_slot: FieldLike, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** flash_loan(pool: struct, amount0: field, amount1: field) */
    flash_loan: ((pool: AztecAddressLike, amount0: FieldLike, amount1: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** is_valid_public(message_hash: field) */
    is_valid_public: ((message_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** last_balances() */
    last_balances: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** reset_last_balances() */
    reset_last_balances: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** shieldswap_call(amount0: field, amount1: field) */
    shieldswap_call: ((amount0: FieldLike, amount1: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };
}
