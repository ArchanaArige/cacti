window.BENCHMARK_DATA = {
  "lastUpdate": 1728564069792,
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
      },
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
        "date": 1727956087638,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 684,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
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
          "id": "c331a633abef5502cfb5b1538b43b1f1a109a558",
          "message": "ci(github): enable manual publishing of custom git tags via input args\n\nThe `all-nodejs-packages-publish.yaml` workflow now has an input parameter\nwhere one can specify an arbitrary release git tag (such as v2.0.0-rc.5)\nto be the one to be published.\n\nThis will help us in scenarios where the release automation script failed to\nrun on GitHub and we have no way of publishing the given release manually\nfrom a local machine (since we do not have access to the npm/ghcr) tokens\nof the foundation (which is good security posture that we are happy to have)\n\nIn the scenario described above, in the future this will (should) allow us\nto fix bugs in the release automation script in commits that come **after**\nthe failed release and then manually trigger the updated (now functional)\npublish job for the older release version.\n\nThis will (hopefully) grant us the ability to ensure that releases are not\nmissing from the registries despite sometimes the automation breaking down.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-03T18:56:06-07:00",
          "tree_id": "241384b891c90ea822f184f716f31574fb4699c1",
          "url": "https://github.com/ArchanaArige/cacti/commit/c331a633abef5502cfb5b1538b43b1f1a109a558"
        },
        "date": 1728563120724,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 570,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 685,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
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
          "id": "c331a633abef5502cfb5b1538b43b1f1a109a558",
          "message": "ci(github): enable manual publishing of custom git tags via input args\n\nThe `all-nodejs-packages-publish.yaml` workflow now has an input parameter\nwhere one can specify an arbitrary release git tag (such as v2.0.0-rc.5)\nto be the one to be published.\n\nThis will help us in scenarios where the release automation script failed to\nrun on GitHub and we have no way of publishing the given release manually\nfrom a local machine (since we do not have access to the npm/ghcr) tokens\nof the foundation (which is good security posture that we are happy to have)\n\nIn the scenario described above, in the future this will (should) allow us\nto fix bugs in the release automation script in commits that come **after**\nthe failed release and then manually trigger the updated (now functional)\npublish job for the older release version.\n\nThis will (hopefully) grant us the ability to ensure that releases are not\nmissing from the registries despite sometimes the automation breaking down.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-03T18:56:06-07:00",
          "tree_id": "241384b891c90ea822f184f716f31574fb4699c1",
          "url": "https://github.com/ArchanaArige/cacti/commit/c331a633abef5502cfb5b1538b43b1f1a109a558"
        },
        "date": 1728564067881,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 666,
            "range": "±2.77%",
            "unit": "ops/sec",
            "extra": "178 samples"
          }
        ]
      }
    ]
  }
}