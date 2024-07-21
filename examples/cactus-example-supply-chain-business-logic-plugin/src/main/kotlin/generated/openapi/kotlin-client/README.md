# org.openapitools.client - Kotlin client library for Hyperledger Cactus Example - Supply Chain App

Demonstrates how a business use case can be satisfied with Cactus when multiple distinct ledgers are involved.

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [openapi-spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate an API client.

- API version: 2.0.0-rc.3
- Package version: 
- Build package: org.openapitools.codegen.languages.KotlinClientCodegen

## Requires

* Kotlin 1.7.21
* Gradle 7.5

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a id="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**insertBambooHarvestV1**](docs/DefaultApi.md#insertbambooharvestv1) | **POST** /api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/insert-bamboo-harvest | Inserts the provided BambooHarvest entity to the ledger.
*DefaultApi* | [**insertBookshelfV1**](docs/DefaultApi.md#insertbookshelfv1) | **POST** /api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/insert-bookshelf | Inserts the provided Bookshelf entity to the ledger.
*DefaultApi* | [**insertShipmentV1**](docs/DefaultApi.md#insertshipmentv1) | **POST** /api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/insert-shipment | Inserts the provided Shipment entity to the ledger.
*DefaultApi* | [**listBambooHarvestV1**](docs/DefaultApi.md#listbambooharvestv1) | **GET** /api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/list-bamboo-harvest | Lists all the BambooHarvest entities stored on the ledger.
*DefaultApi* | [**listBookshelfV1**](docs/DefaultApi.md#listbookshelfv1) | **GET** /api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/list-bookshelf | Lists all the Bookshelf entities stored on the ledger.
*DefaultApi* | [**listShipmentV1**](docs/DefaultApi.md#listshipmentv1) | **GET** /api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/list-shipment | Lists all the Shipments entities stored on the ledger.


<a id="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.BambooHarvest](docs/BambooHarvest.md)
 - [org.openapitools.client.models.Bookshelf](docs/Bookshelf.md)
 - [org.openapitools.client.models.InsertBambooHarvestRequest](docs/InsertBambooHarvestRequest.md)
 - [org.openapitools.client.models.InsertBambooHarvestResponse](docs/InsertBambooHarvestResponse.md)
 - [org.openapitools.client.models.InsertBookshelfRequest](docs/InsertBookshelfRequest.md)
 - [org.openapitools.client.models.InsertBookshelfResponse](docs/InsertBookshelfResponse.md)
 - [org.openapitools.client.models.InsertShipmentRequest](docs/InsertShipmentRequest.md)
 - [org.openapitools.client.models.InsertShipmentResponse](docs/InsertShipmentResponse.md)
 - [org.openapitools.client.models.ListBambooHarvestResponse](docs/ListBambooHarvestResponse.md)
 - [org.openapitools.client.models.ListBookshelfResponse](docs/ListBookshelfResponse.md)
 - [org.openapitools.client.models.ListShipmentResponse](docs/ListShipmentResponse.md)
 - [org.openapitools.client.models.Shipment](docs/Shipment.md)


<a id="documentation-for-authorization"></a>
## Documentation for Authorization

Endpoints do not require authorization.
