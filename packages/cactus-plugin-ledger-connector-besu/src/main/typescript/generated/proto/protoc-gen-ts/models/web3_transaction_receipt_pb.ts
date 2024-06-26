/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: models/web3_transaction_receipt_pb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace org.hyperledger.cacti.plugin.ledger.connector.besu {
    export class Web3TransactionReceiptPB extends pb_1.Message {
        #one_of_decls: number[][] = [[214641282]];
        constructor(data?: any[] | ({
            status?: boolean;
            transactionHash?: string;
            transactionIndex?: number;
            blockHash?: string;
            blockNumber?: number;
            gasUsed?: number;
            from?: string;
            to?: string;
        } & (({
            contractAddress?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
                if ("transactionHash" in data && data.transactionHash != undefined) {
                    this.transactionHash = data.transactionHash;
                }
                if ("transactionIndex" in data && data.transactionIndex != undefined) {
                    this.transactionIndex = data.transactionIndex;
                }
                if ("blockHash" in data && data.blockHash != undefined) {
                    this.blockHash = data.blockHash;
                }
                if ("blockNumber" in data && data.blockNumber != undefined) {
                    this.blockNumber = data.blockNumber;
                }
                if ("gasUsed" in data && data.gasUsed != undefined) {
                    this.gasUsed = data.gasUsed;
                }
                if ("contractAddress" in data && data.contractAddress != undefined) {
                    this.contractAddress = data.contractAddress;
                }
                if ("from" in data && data.from != undefined) {
                    this.from = data.from;
                }
                if ("to" in data && data.to != undefined) {
                    this.to = data.to;
                }
            }
        }
        get status() {
            return pb_1.Message.getFieldWithDefault(this, 355610639, false) as boolean;
        }
        set status(value: boolean) {
            pb_1.Message.setField(this, 355610639, value);
        }
        get transactionHash() {
            return pb_1.Message.getFieldWithDefault(this, 188901646, "") as string;
        }
        set transactionHash(value: string) {
            pb_1.Message.setField(this, 188901646, value);
        }
        get transactionIndex() {
            return pb_1.Message.getFieldWithDefault(this, 488538260, 0) as number;
        }
        set transactionIndex(value: number) {
            pb_1.Message.setField(this, 488538260, value);
        }
        get blockHash() {
            return pb_1.Message.getFieldWithDefault(this, 335211324, "") as string;
        }
        set blockHash(value: string) {
            pb_1.Message.setField(this, 335211324, value);
        }
        get blockNumber() {
            return pb_1.Message.getFieldWithDefault(this, 205598263, 0) as number;
        }
        set blockNumber(value: number) {
            pb_1.Message.setField(this, 205598263, value);
        }
        get gasUsed() {
            return pb_1.Message.getFieldWithDefault(this, 190522826, 0) as number;
        }
        set gasUsed(value: number) {
            pb_1.Message.setField(this, 190522826, value);
        }
        get contractAddress() {
            return pb_1.Message.getFieldWithDefault(this, 214641282, "") as string;
        }
        set contractAddress(value: string) {
            pb_1.Message.setOneofField(this, 214641282, this.#one_of_decls[0], value);
        }
        get has_contractAddress() {
            return pb_1.Message.getField(this, 214641282) != null;
        }
        get from() {
            return pb_1.Message.getFieldWithDefault(this, 3151786, "") as string;
        }
        set from(value: string) {
            pb_1.Message.setField(this, 3151786, value);
        }
        get to() {
            return pb_1.Message.getFieldWithDefault(this, 3707, "") as string;
        }
        set to(value: string) {
            pb_1.Message.setField(this, 3707, value);
        }
        get _contractAddress() {
            const cases: {
                [index: number]: "none" | "contractAddress";
            } = {
                0: "none",
                214641282: "contractAddress"
            };
            return cases[pb_1.Message.computeOneofCase(this, [214641282])];
        }
        static fromObject(data: {
            status?: boolean;
            transactionHash?: string;
            transactionIndex?: number;
            blockHash?: string;
            blockNumber?: number;
            gasUsed?: number;
            contractAddress?: string;
            from?: string;
            to?: string;
        }): Web3TransactionReceiptPB {
            const message = new Web3TransactionReceiptPB({});
            if (data.status != null) {
                message.status = data.status;
            }
            if (data.transactionHash != null) {
                message.transactionHash = data.transactionHash;
            }
            if (data.transactionIndex != null) {
                message.transactionIndex = data.transactionIndex;
            }
            if (data.blockHash != null) {
                message.blockHash = data.blockHash;
            }
            if (data.blockNumber != null) {
                message.blockNumber = data.blockNumber;
            }
            if (data.gasUsed != null) {
                message.gasUsed = data.gasUsed;
            }
            if (data.contractAddress != null) {
                message.contractAddress = data.contractAddress;
            }
            if (data.from != null) {
                message.from = data.from;
            }
            if (data.to != null) {
                message.to = data.to;
            }
            return message;
        }
        toObject() {
            const data: {
                status?: boolean;
                transactionHash?: string;
                transactionIndex?: number;
                blockHash?: string;
                blockNumber?: number;
                gasUsed?: number;
                contractAddress?: string;
                from?: string;
                to?: string;
            } = {};
            if (this.status != null) {
                data.status = this.status;
            }
            if (this.transactionHash != null) {
                data.transactionHash = this.transactionHash;
            }
            if (this.transactionIndex != null) {
                data.transactionIndex = this.transactionIndex;
            }
            if (this.blockHash != null) {
                data.blockHash = this.blockHash;
            }
            if (this.blockNumber != null) {
                data.blockNumber = this.blockNumber;
            }
            if (this.gasUsed != null) {
                data.gasUsed = this.gasUsed;
            }
            if (this.contractAddress != null) {
                data.contractAddress = this.contractAddress;
            }
            if (this.from != null) {
                data.from = this.from;
            }
            if (this.to != null) {
                data.to = this.to;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.status != false)
                writer.writeBool(355610639, this.status);
            if (this.transactionHash.length)
                writer.writeString(188901646, this.transactionHash);
            if (this.transactionIndex != 0)
                writer.writeFloat(488538260, this.transactionIndex);
            if (this.blockHash.length)
                writer.writeString(335211324, this.blockHash);
            if (this.blockNumber != 0)
                writer.writeFloat(205598263, this.blockNumber);
            if (this.gasUsed != 0)
                writer.writeFloat(190522826, this.gasUsed);
            if (this.has_contractAddress)
                writer.writeString(214641282, this.contractAddress);
            if (this.from.length)
                writer.writeString(3151786, this.from);
            if (this.to.length)
                writer.writeString(3707, this.to);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Web3TransactionReceiptPB {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Web3TransactionReceiptPB();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 355610639:
                        message.status = reader.readBool();
                        break;
                    case 188901646:
                        message.transactionHash = reader.readString();
                        break;
                    case 488538260:
                        message.transactionIndex = reader.readFloat();
                        break;
                    case 335211324:
                        message.blockHash = reader.readString();
                        break;
                    case 205598263:
                        message.blockNumber = reader.readFloat();
                        break;
                    case 190522826:
                        message.gasUsed = reader.readFloat();
                        break;
                    case 214641282:
                        message.contractAddress = reader.readString();
                        break;
                    case 3151786:
                        message.from = reader.readString();
                        break;
                    case 3707:
                        message.to = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Web3TransactionReceiptPB {
            return Web3TransactionReceiptPB.deserialize(bytes);
        }
    }
}
