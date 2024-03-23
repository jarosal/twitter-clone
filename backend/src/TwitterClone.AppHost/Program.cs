var builder = DistributedApplication.CreateBuilder(args);

builder
  .AddNpmApp("twitter-clone-frontend", "../../frontend", "dev")
  .WithEndpoint(containerPort: 3000, scheme: "http", env: "PORT")
  .PublishAsDockerFile();

builder
  .Build()
  .Run();
