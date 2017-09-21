# mingster.github.io

this is my personal website to keep notes.

It is automatically transformed by [Jekyll](https://github.com/mojombo/jekyll) into a static site.

## Setup

#### 1. Install Ruby

This website is compiled into a static website using
[Jekyll](http://jekyllrb.com), a static-site generator written in Ruby. To
install Ruby you can follow [this
guide](https://www.ruby-lang.org/en/documentation/installation/). To check that
Ruby is installed correctly, run `ruby --version` in your shell; it should be
`1.9.3` or later.

#### 2. Install Bundler to manage dependencies

[Bundler](http://bundler.io) handles Ruby dependencies. To install it, simply
run:

```bash
$ gem install bundler
```

Once you have installed it, `cd` into the local clone of your fork and run:

```bash
$ bundle install
```

to download and install the necessary dependencies.

#### 3. Run Jekyll

In order to run a development server (with live-reloading on) just run:

```bash
$ bundle exec jekyll build && bundle exec jekyll serve --incremental
```

The generated site will be available at [http://localhost:4000](http://localhost:4000). You can stop the
server with <kbd>Ctrl</kbd>-<kbd>C</kbd>.

#### 4. Make your changes and push them

Now you're ready to make your changes! Be sure to test the changes locally using
the development server. Once you're done with your changes, push those changes
to your fork and then [submit a **pull
request**](https://help.github.com/articles/using-pull-requests/). For a nice
wrap-up on how to open a good pull request have a look at the [Elixir
contributing
guide](https://github.com/elixir-lang/elixir/#contributing).
