using TwitterClone.HelloWorld.Types;

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

builder.Services
  .AddGraphQLServer()
  .AddTypes();

var app = builder.Build();

app.MapDefaultEndpoints();

app.MapGraphQL();

app.RunWithGraphQLCommands(args);
