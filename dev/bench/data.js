window.BENCHMARK_DATA = {
  "lastUpdate": 1721369573295,
  "repoUrl": "https://github.com/ArchanaArige/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233",
          "message": "feat(persistence-fabric): rewrite the plugin\n\n- Rewrite fabric persistence plugin to match persistence ethereum\n  plugin methods and behavior.\n- Change DB schema for persistence.\n- Add tests and sample data to the new plugin. Add them to project CI.\n\nDepends on #3298\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-18T22:52:54+02:00",
          "tree_id": "0626c0274134b1741d7760598515ec09ec8bf02e",
          "url": "https://github.com/ArchanaArige/cacti/commit/c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233"
        },
        "date": 1721369570973,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 537,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "175 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 337,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      }
    ]
  }
}