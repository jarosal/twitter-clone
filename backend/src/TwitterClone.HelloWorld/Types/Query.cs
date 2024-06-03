namespace TwitterClone.HelloWorld.Types;

public class Query
{
  public Hello HelloWorld(string Name) => new(Name);
}

public class Hello(string Name)
{
  public string HelloWorld => $"Hello, {Name}!";
}
