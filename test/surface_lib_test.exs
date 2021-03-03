defmodule SurfaceLibTest do
  use ExUnit.Case
  doctest SurfaceLib

  test "greets the world" do
    assert SurfaceLib.hello() == :world
  end
end
