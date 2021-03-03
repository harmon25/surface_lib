defmodule SurfaceLib do
  use Surface.Component

  prop name, :string, default: "world"

  def render(assigns) do
    ~H"""
      <div id={{__MODULE__}} :hook="AHook">
        <span> Hello {{@name}}! </span>
      </div>
    """
  end
end
