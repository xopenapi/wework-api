#!/bin/sh

docker run --rm -v "${PWD}:/local" xopenapi/openapi-generator-cli generate \
    --git-user-id xopenapi \
    --git-repo-id wework-api-go \
    --package-name wework \
    -i /local/wework.yaml \
    -g go \
    -o /local/out/go