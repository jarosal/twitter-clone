var builder = DistributedApplication.CreateBuilder(args);

var frontend = builder
  .AddNpmApp("twitter-clone-frontend", "../../../frontend", "aspire")
  .WithEndpoint(containerPort: 3000, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

var helloWorld = builder
  .AddProject<Projects.TwitterClone_HelloWorld>("hello-world");

var helloWorldEndpoint = helloWorld.GetEndpoint("http");

frontend
  .WithEnvironment("HELLO_WORLD_API", helloWorldEndpoint);

builder
  .Build()
  .Run();
