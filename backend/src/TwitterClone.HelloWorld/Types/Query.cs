namespace TwitterClone.HelloWorld.Types;

[QueryType]
public static class Query
{
  public static Hello HelloWorld(string Name) => new(Name);
}

public record Hello(string Name)
{
  public string HelloWorld => $"Hello, {Name}";
}
