# План

## Подготовка проекта фронтенда

- создать папку FestivalApp
- перейти в нее из-под командной строки
- выполнить `code .`
- проверить, что VS на английском, настройка AutoSave
- поставить расширения для VS: C#, C# Dev Kit, Material Icons, .NET Install Tool, C# Extensions, Prettier, Tailwind CSS IntelliSense, ES7+ React
- в VS открыть терминал и создать проект: `npx create-vite@latest`. Выбрать React и Typescript
- проверить работу начального приложения в браузере Chrome
- очистить `index.css`
- удалить `App.css`
- удалить README из фронтенда
- закомментировать в `main.tsx`:  `StrictMode` компонент
- удалить все из `App.tsx` и создать заглушку `Hello`
- все импорты делать не руками,а с помощью подсказок (бинд Shift + Пробел)
- установить tailwind (можно через официальную докуметацию)
- проверить работу стилей tailwind

- создать папку `models` и создать типы как на бекенде, но на `ts`
- получить тестовые данные с бекенда в компоненте `App`
- монитоорить консоль браузера, не забыть про ключ `key` при рендеринге

- создать папку `components`: создать все необходимые компоненты там


- установить `axios`
- установить `react-router-dom`
- создать компоненты и настроить маршрутизацию





# Подготовка проекта бекенда

- перейти в корень проекта Festival App
- проверить версию .NET: `dotnet --version`
- создать проекта API: `dotnet new webapi -o festival-api`
- перейти в проект 
- добавить gitignore: `dotnet new gitignore`
- почистить начальный проект: удалить файлы http, удалить `appsettings.Development.json`
- в Program.cs оставить:

```Csharp
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.Run();
```

- из файла проекта с расширением `csproj` удалить пакет `OpenAPI` (вместо него поставим swagger):

- устанавливаем пакет для swagger:

`dotnet add package Swashbuckle.AspNetCore`
`dotnet add package Swashbuckle.AspNetCore.Swagger`


- настройка контроллеров и swagger в Program.cs:

```Csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();
app.Run();
```

- создать папку `Controllers` и создать тестовый контроллер для проверки, запустить апи и проверить


```Csharp
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> Test()
    {
        return Ok("test");
    }
}

```

- сразу настроить CORS:

```Csharp
builder.Services.AddCors()
...
app.UseCors(o =>o.AllowAnyOrigin())
```


- установить пакеты для работы с бд (обращать на совместимость с версией .net):

`dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL`
`dotnet add package Microsoft.EntityFrameworkCore`
`dotnet add package Microsoft.EntityFrameworkCore.Design`
`dotnet add package Microsoft.EntityFrameworkCore.Tools`


- создать папку Data и в ней создать файл FestivalAppContext:

```Csharp
public class FestivalAppContext : DbContext
{
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(
            "Host=localhost;Port=5432;Database=FestivalApp;UserName=postgres;Password=root"
        );
    }
}
```

- проверить соединение с бд в Dbeaver
- создать тестовую миграцию (возможно dotnet-ef установить): `dotnet-ef migrations add Init`

```
dotnet tool uninstall dotnet-ef --global
dotnet new tool-manifest
dotnet tool install dotnet-ef --global
```

- применить миграцию `dotnet-ef database update`
- проверить в Dbeaver созданную базу

- создать в `Models` основные сущности по предметной области
- настроить связи 


- настроить DI в Program: 

```csharp
builder.Services.AddDbContext<FestivalAppContext>();
```

- создать CRUD REST Api контроллер для любой модели
- проверить работу в Swagger

