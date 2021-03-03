# SurfaceLib

Example of a surface library that includes bundled hooks.

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `surface_lib` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:surface_lib, "~> 0.1.0"}
  ]
end
```

In your package.json add `surface_lib` as a dependency.

```json
{
  "surface_lib": "file:../deps/surface_lib"
}
```

Merge supplied hooks with your hooks. 

```js
import surfaceLibHooks from "surface_lib" 
import myHooks from "./_hooks" 

const hooks = {...surfaceLibHooks, ...myHooks}

// pass hooks into liveview initalization 
```


Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/surface_lib](https://hexdocs.pm/surface_lib).

