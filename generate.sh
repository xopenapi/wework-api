#!/bin/sh

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/wework.yaml \
    -g go \
    -o /local/out/go