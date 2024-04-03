#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["ClientManager.Api/ClientManager.Api.csproj", "ClientManager.Api/"]
COPY ["ClientManager.DAL/ClientManager.DAL.csproj", "ClientManager.DAL/"]
RUN dotnet restore "./ClientManager.Api/ClientManager.Api.csproj"
COPY . .
WORKDIR "/src/ClientManager.Api"
RUN dotnet build "./ClientManager.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./ClientManager.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ClientManager.Api.dll"]