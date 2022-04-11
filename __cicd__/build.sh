#!/bin/bash

installRunTimeNodePackage 'dev'

yarn run lint
yarn run lint:style
yarn run test:unit
