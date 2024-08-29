/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IndieProjectFundingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "contribute"
      | "createProject"
      | "executeProposal"
      | "getProject"
      | "projectCount"
      | "propose"
      | "startFunding"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contribute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createProject",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProject",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startFunding",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "projectCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startFunding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export interface IndieProjectFunding extends BaseContract {
  connect(runner?: ContractRunner | null): IndieProjectFunding;
  waitForDeployment(): Promise<this>;

  interface: IndieProjectFundingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  contribute: TypedContractMethod<
    [projectIndex: BigNumberish],
    [void],
    "payable"
  >;

  createProject: TypedContractMethod<
    [_teamAccount: AddressLike, _creator: AddressLike],
    [void],
    "nonpayable"
  >;

  executeProposal: TypedContractMethod<
    [projectIndex: BigNumberish, proposalIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  getProject: TypedContractMethod<
    [projectIndex: BigNumberish],
    [
      [bigint, string, bigint, bigint, string] & {
        totalGT: bigint;
        teamAccount: string;
        ethBalance: bigint;
        GTBalance: bigint;
        creator: string;
      }
    ],
    "view"
  >;

  projectCount: TypedContractMethod<[], [bigint], "view">;

  propose: TypedContractMethod<
    [projectIndex: BigNumberish, proposalTitle: string, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  startFunding: TypedContractMethod<
    [projectIndex: BigNumberish, _requiredEth: BigNumberish],
    [void],
    "nonpayable"
  >;

  vote: TypedContractMethod<
    [projectIndex: BigNumberish, proposalIndex: BigNumberish, approve: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contribute"
  ): TypedContractMethod<[projectIndex: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "createProject"
  ): TypedContractMethod<
    [_teamAccount: AddressLike, _creator: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeProposal"
  ): TypedContractMethod<
    [projectIndex: BigNumberish, proposalIndex: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getProject"
  ): TypedContractMethod<
    [projectIndex: BigNumberish],
    [
      [bigint, string, bigint, bigint, string] & {
        totalGT: bigint;
        teamAccount: string;
        ethBalance: bigint;
        GTBalance: bigint;
        creator: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "projectCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [projectIndex: BigNumberish, proposalTitle: string, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startFunding"
  ): TypedContractMethod<
    [projectIndex: BigNumberish, _requiredEth: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [projectIndex: BigNumberish, proposalIndex: BigNumberish, approve: boolean],
    [void],
    "nonpayable"
  >;

  filters: {};
}
