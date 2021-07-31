#!/bin/sh

#JEKYLL_ENV=production
JEKYLL_ENV=development

# to start development server, do this:
bundle exec jekyll build && bundle exec jekyll serve --incremental
