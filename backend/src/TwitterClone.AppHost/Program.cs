var builder = DistributedApplication.CreateBuilder(args);

var frontend = builder
  .AddNpmApp("twitter-clone-frontend", "../../../frontend", "aspire")
  .WithHttpEndpoint(env: "PORT")
  .WithExternalHttpEndpoints()
  .PublishAsDockerFile();

var helloWorldApi = builder
  .AddProject<Projects.TwitterClone_HelloWorld>("hello-world");

frontend
  .WithEnvironment("HELLO_WORLD_API", helloWorldApi.GetEndpoint("http"));

builder
  .Build()
  .Run();
