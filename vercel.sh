#!/bin/bash

if [[ $VERCEL_ENV == "production" ]] ; then
  npm run start:dev
fi
