window.BENCHMARK_DATA = {
  "lastUpdate": 1727955256518,
  "repoUrl": "https://github.com/ArchanaArige/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "164addfdf625a0ed0d187a911b42a95875d7afa0",
          "message": "test(cmd-api-server): jestify install-basic-plugin-consortium-manual\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-02T12:32:02-07:00",
          "tree_id": "5e6359f77782a5bc2e8e8c3ec6ffec5e45658428",
          "url": "https://github.com/ArchanaArige/cacti/commit/164addfdf625a0ed0d187a911b42a95875d7afa0"
        },
        "date": 1727955253573,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 575,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 703,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      }
    ]
  }
}