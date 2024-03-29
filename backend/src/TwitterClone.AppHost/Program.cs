var builder = DistributedApplication.CreateBuilder(args);

var frontend = builder
  .AddNpmApp("twitter-clone-frontend", "../../../frontend", "dev")
  .WithEndpoint(containerPort: 3000, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

var helloWorld = builder
  .AddProject<Projects.TwitterClone_HelloWorld>("hello-world")
  .WithReference(frontend);

frontend
  .WithReference(helloWorld);

builder
  .Build()
  .Run();
