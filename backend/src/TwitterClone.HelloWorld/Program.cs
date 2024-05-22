var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

builder.Services
  .AddGraphQLServer();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapDefaultEndpoints();

app.MapGraphQL();

app.Run();
