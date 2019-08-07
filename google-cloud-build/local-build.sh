#!/usr/bin/env bash

set -xe

cloud-build-local --config=google-cloud-build.yml --dryrun=false .