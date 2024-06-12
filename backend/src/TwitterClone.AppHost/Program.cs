var builder = DistributedApplication.CreateBuilder(args);

var helloWorldApi = builder
  .AddProject<Projects.TwitterClone_HelloWorld>("hello-world");

var graphQLGateway = builder
  .AddFusionGateway<Projects.TwitterClone_GraphQLGateway>("graphql-gateway")
  .WithSubgraph(helloWorldApi);

builder
  .AddNpmApp("twitter-clone-frontend", "../../../frontend", "aspire")
  .WithHttpEndpoint(env: "PORT")
  .WithEnvironment("PUBLIC_GRAPHQL_GATEWAY", "http://localhost:5098/graphql");

builder
  .Build()
  .Compose()
  .Run();
