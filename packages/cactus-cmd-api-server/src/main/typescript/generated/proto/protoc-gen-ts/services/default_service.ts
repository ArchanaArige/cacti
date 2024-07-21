/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: services/default_service.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../google/protobuf/empty";
import * as dependency_2 from "./../models/health_check_response_pb";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.hyperledger.cactus.cmd_api_server {
    export class GetOpenApiSpecV1Response extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set data(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            data?: string;
        }): GetOpenApiSpecV1Response {
            const message = new GetOpenApiSpecV1Response({});
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                data?: string;
            } = {};
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.data.length)
                writer.writeString(1, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetOpenApiSpecV1Response {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetOpenApiSpecV1Response();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.data = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetOpenApiSpecV1Response {
            return GetOpenApiSpecV1Response.deserialize(bytes);
        }
    }
    export class GetPrometheusMetricsV1Response extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set data(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            data?: string;
        }): GetPrometheusMetricsV1Response {
            const message = new GetPrometheusMetricsV1Response({});
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                data?: string;
            } = {};
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.data.length)
                writer.writeString(1, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetPrometheusMetricsV1Response {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetPrometheusMetricsV1Response();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.data = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetPrometheusMetricsV1Response {
            return GetPrometheusMetricsV1Response.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedDefaultServiceService {
        static definition = {
            GetHealthCheckV1: {
                path: "/org.hyperledger.cactus.cmd_api_server.DefaultService/GetHealthCheckV1",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB.deserialize(new Uint8Array(bytes))
            },
            GetOpenApiSpecV1: {
                path: "/org.hyperledger.cactus.cmd_api_server.DefaultService/GetOpenApiSpecV1",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: GetOpenApiSpecV1Response) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => GetOpenApiSpecV1Response.deserialize(new Uint8Array(bytes))
            },
            GetPrometheusMetricsV1: {
                path: "/org.hyperledger.cactus.cmd_api_server.DefaultService/GetPrometheusMetricsV1",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: GetPrometheusMetricsV1Response) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => GetPrometheusMetricsV1Response.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetHealthCheckV1(call: grpc_1.ServerUnaryCall<dependency_1.google.protobuf.Empty, dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB>, callback: grpc_1.sendUnaryData<dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB>): void;
        abstract GetOpenApiSpecV1(call: grpc_1.ServerUnaryCall<dependency_1.google.protobuf.Empty, GetOpenApiSpecV1Response>, callback: grpc_1.sendUnaryData<GetOpenApiSpecV1Response>): void;
        abstract GetPrometheusMetricsV1(call: grpc_1.ServerUnaryCall<dependency_1.google.protobuf.Empty, GetPrometheusMetricsV1Response>, callback: grpc_1.sendUnaryData<GetPrometheusMetricsV1Response>): void;
    }
    export class DefaultServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedDefaultServiceService.definition, "DefaultService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        GetHealthCheckV1: GrpcUnaryServiceInterface<dependency_1.google.protobuf.Empty, dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB> = (message: dependency_1.google.protobuf.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB>, callback?: grpc_1.requestCallback<dependency_2.org.hyperledger.cactus.cmd_api_server.HealthCheckResponsePB>): grpc_1.ClientUnaryCall => {
            return super.GetHealthCheckV1(message, metadata, options, callback);
        };
        GetOpenApiSpecV1: GrpcUnaryServiceInterface<dependency_1.google.protobuf.Empty, GetOpenApiSpecV1Response> = (message: dependency_1.google.protobuf.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<GetOpenApiSpecV1Response>, options?: grpc_1.CallOptions | grpc_1.requestCallback<GetOpenApiSpecV1Response>, callback?: grpc_1.requestCallback<GetOpenApiSpecV1Response>): grpc_1.ClientUnaryCall => {
            return super.GetOpenApiSpecV1(message, metadata, options, callback);
        };
        GetPrometheusMetricsV1: GrpcUnaryServiceInterface<dependency_1.google.protobuf.Empty, GetPrometheusMetricsV1Response> = (message: dependency_1.google.protobuf.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<GetPrometheusMetricsV1Response>, options?: grpc_1.CallOptions | grpc_1.requestCallback<GetPrometheusMetricsV1Response>, callback?: grpc_1.requestCallback<GetPrometheusMetricsV1Response>): grpc_1.ClientUnaryCall => {
            return super.GetPrometheusMetricsV1(message, metadata, options, callback);
        };
    }
}