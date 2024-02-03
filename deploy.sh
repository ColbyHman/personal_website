#!/bin/bash
docker stop personal_site > /dev/null 2>&1
docker rm personal_site > /dev/null 2>&1
docker-compose up -d