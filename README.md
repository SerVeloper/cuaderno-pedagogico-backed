<div align="center">
  <h1>🎓 Cuaderno Pedagógico - Backend API</h1>
  <p>Sistema integral de gestión pedagógica para instituciones educativas</p>
  
  ![NestJS](https://img.shields.io/badge/NestJS-10.0-red?logo=nestjs)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)
  ![Swagger](https://img.shields.io/badge/Swagger-UI-green?logo=swagger)
  ![JWT](https://img.shields.io/badge/JWT-Auth-orange?logo=jsonwebtokens)
</div>

---

## 📋 Tabla de Contenidos

- [🚀 Características](#-características)
- [🏗️ Arquitectura](#️-arquitectura)
- [📦 Instalación](#-instalación)
- [⚙️ Configuración](#️-configuración)
- [🗄️ Base de Datos](#️-base-de-datos)
- [🔌 API Endpoints](#-api-endpoints)
- [📖 Documentación](#-documentación)
- [🧪 Testing](#-testing)
- [🚀 Despliegue](#-despliegue)
- [👥 Contribución](#-contribución)

## 🚀 Características

### 🔐 **Autenticación y Autorización**
- Sistema de autenticación JWT
- Control de acceso basado en roles (RBAC)
- Gestión granular de permisos
- Middleware de autenticación automático

### 👥 **Gestión de Usuarios**
- Registro y login de usuarios
- Perfiles de usuario personalizables
- Asignación de roles y departamentos
- Sistema de auditoría de usuarios

### 📚 **Gestión Académica**
- Administración de materias y niveles
- Sistema de períodos académicos
- Evaluaciones formativas y sumativas
- Dimensiones de evaluación personalizables

### 🏢 **Gestión Organizacional**
- Manejo de departamentos institucionales
- Gestión geográfica (provincias)
- Relaciones entre usuarios y departamentos
- Estructura organizacional jerárquica

### 📊 **Sistema de Auditoría**
- Registro completo de cambios
- Trazabilidad de operaciones
- Logs de actividad detallados
- Histórico de modificaciones

### 📧 **Comunicaciones**
- Sistema de emails integrado
- Notificaciones automáticas
- Plantillas de comunicación
- Gestión de términos y condiciones

## 🏗️ Arquitectura

El proyecto implementa **Clean Architecture** con las siguientes capas:

```
src/
├── 🏢 modules/                 # Módulos de dominio
│   ├── auth/                   # Autenticación
│   ├── roles/                  # Gestión de roles
│   ├── permissions/            # Permisos
│   ├── subjects/               # Materias académicas
│   ├── departments/            # Departamentos
│   ├── provinces/              # Ubicaciones geográficas
│   ├── periods/                # Períodos académicos
│   ├── dimensions/             # Dimensiones de evaluación
│   ├── emails/                 # Sistema de emails
│   ├── audi-logs/             # Auditoría
│   ├── terms_and_conditions/  # Términos legales
│   └── user-roles/            # Relación usuarios-roles
├── 🛡️ common/                  # Módulos compartidos
│   ├── decorators/            # Decoradores personalizados
│   ├── guards/                # Guards de autenticación
│   └── strategies/            # Estrategias de autenticación
└── 🗄️ database/               # Configuración de BD
    ├── migrations/            # Migraciones
    └── seeds/                 # Datos iniciales
```

### Patrón por Módulo:
```
module/
├── 📁 application/
│   ├── dtos/              # Data Transfer Objects
│   ├── services/          # Servicios de aplicación
│   └── use-cases/         # Casos de uso
├── 📁 domain/
│   ├── entities/          # Entidades de dominio
│   └── interfaces/        # Contratos del dominio
└── 📁 infrastructure/
    ├── controllers/       # Controladores REST
    └── repositories/      # Implementación de persistencia
```

## 📦 Instalación

### 📋 Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **PostgreSQL** >= 15.0
- **Git**

### 🔧 Configuración del Proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/SerVeloper/cuaderno-pedagogico-backed.git
cd cuaderno-pedagogico-backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```


4. **Configurar base de datos**
```bash
# Crear base de datos en PostgreSQL
createdb cuaderno_pedagogico

# Ejecutar migraciones
npm run schema:drop && npm run migration:run

# Ejecutar seeders (datos iniciales)
npm run seed:departments
```

5. **Iniciar en modo desarrollo**
```bash
npm run start
```

## ⚙️ Configuración

### 🔐 Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```bash
# Base de Datos
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_DATABASE=cuaderno_pedagogico

# API Configuration
API_PREFIX=api
API_VERSION=1
APP_PORT=3000
APP_NAME=Cuaderno Pedagógico API
APP_DESCRIPTION=Sistema de gestión pedagógica para instituciones educativas

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h

# Swagger Configuration
SWAGGER_TITLE=Cuaderno Pedagógico API
SWAGGER_DESCRIPTION=API RESTful para gestión integral de instituciones educativas
SWAGGER_VERSION=1.0.0
SWAGGER_PATH=api/docs

# CORS Configuration
FRONTEND_URL=http://localhost:4200
```

## 🗄️ Base de Datos

### 📊 Esquema de Base de Datos

El sistema maneja las siguientes entidades principales:

- **👤 Users**: Usuarios del sistema
- **🛡️ Roles**: Roles de usuario
- **🔑 Permissions**: Permisos específicos
- **🏢 Departments**: Departamentos organizacionales
- **🌍 Provinces**: Ubicaciones geográficas
- **📚 Subjects**: Materias académicas
- **📅 Periods**: Períodos académicos
- **📊 Dimensions**: Dimensiones de evaluación
- **📧 Emails**: Sistema de comunicaciones
- **📝 AudiLogs**: Registros de auditoría
- **📋 TermsAndConditions**: Términos legales

### 🔄 Migraciones

```bash
# Crear nueva migración
npx typeorm migration:create src/database/migrations/NombreDeLaMigracion

# Ejecutar migraciones
npm run migration:run

# Revertir última migración
npm run migration:revert

# Limpiar y recrear base de datos
npm run schema:drop && npm run migration:run
```

### 🌱 Seeders

```bash
# Ejecutar seeder de departamentos
npm run seed:departments

# Ejecutar todos los seeders
npm run seed
```

## 🔌 API Endpoints

### 🌐 Base URL
```
http://localhost:3000/api/v1
```

### 🔐 Autenticación
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/auth/register` | Registro de usuario |
| POST | `/auth/login` | Inicio de sesión |

### 👥 Usuarios y Roles
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users` | Listar usuarios |
| GET | `/users/:id` | Obtener usuario |
| PUT | `/users/:id` | Actualizar usuario |
| DELETE | `/users/:id` | Eliminar usuario |
| GET | `/roles` | Listar roles |
| POST | `/roles` | Crear rol |

### 📚 Gestión De E
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/table` | Listar  |
| POST | `/table` | Crear  |
| GET | `/table/:id` | Obtener |
| PUT | `/table/:id` | Actualizar  |
| DELETE | `/table/:id` | Eliminar |


### 📊 Sistema
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/health` | Estado del sistema |
| GET | `/audi-logs` | Logs de auditoría |

## 📖 Documentación

### 📚 Swagger UI

La documentación interactiva está disponible en:

```
http://localhost:3000/api/docs
```

**Características de la documentación:**
- 📖 Documentación completa de todos los endpoints
- 🧪 Interfaz de pruebas interactiva
- 🔐 Autenticación JWT integrada
- 📋 Ejemplos de request/response
- 🏷️ Organización por módulos con emojis
- 📊 Esquemas de datos detallados

### 🔗 Endpoints Importantes

- **API Base**: `http://localhost:3000/api/v1`
- **Swagger Docs**: `http://localhost:3000/api/docs`
- **Health Check**: `http://localhost:3000/health`

## 🧪 Testing

### 🔧 Scripts de Testing

```bash
# Tests unitarios
npm run test

# Tests en modo watch
npm run test:watch

# Tests con coverage
npm run test:cov

# Tests end-to-end
npm run test:e2e

# Tests en modo debug
npm run test:debug
```

### 📊 Coverage

El proyecto mantiene un coverage mínimo del 80% en:
- Casos de uso (Use Cases)
- Servicios de aplicación
- Repositorios
- Controladores

## 🚀 Despliegue

### 🐳 Docker

```bash
# Construir imagen
docker build -t cuaderno-pedagogico-api .

# Ejecutar contenedor
docker run -p 3000:3000 cuaderno-pedagogico-api
```

### 🌐 Producción

```bash
# Construir para producción
npm run build

# Ejecutar en producción
npm run start:prod
```

### 📋 Checklist de Producción

- [ ] Variables de entorno configuradas
- [ ] JWT_SECRET seguro y único
- [ ] Base de datos configurada
- [ ] CORS configurado para dominio de producción
- [ ] HTTPS habilitado
- [ ] Logs configurados
- [ ] Monitoring configurado

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run start:dev          # Modo desarrollo con watch
npm run start:debug        # Modo debug

# Construcción
npm run build              # Construir aplicación
npm run start:prod         # Ejecutar en producción

# Base de Datos
npm run migration:run      # Ejecutar migraciones
npm run schema:drop        # Limpiar esquema
npm run seed:departments   # Ejecutar seeder de departamentos

# Calidad de Código
npm run lint              # Linter ESLint
npm run format            # Formatear código con Prettier

# Testing
npm run test              # Tests unitarios
npm run test:e2e          # Tests end-to-end
npm run test:cov          # Coverage de tests
```

## 👥 Contribución

### 🔄 Flujo de Trabajo

1. **Fork del proyecto**
2. **Crear rama feature**: `git checkout -b feature/nueva-funcionalidad`
3. **Commit cambios**: `git commit -m 'Add: nueva funcionalidad'`
4. **Push a la rama**: `git push origin feature/nueva-funcionalidad`
5. **Crear Pull Request**

### 📝 Convenciones

- **Commits**: Usar [Conventional Commits](https://www.conventionalcommits.org/)
- **Código**: Seguir estándares de TypeScript y NestJS
- **Tests**: Mantener coverage mínimo del 80%
- **Documentación**: Actualizar Swagger para nuevos endpoints

### 🐛 Reportar Issues

Usa las plantillas de GitHub Issues para:
- 🐛 Bug reports
- ✨ Feature requests
- 📚 Mejoras de documentación

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <p>Desarrollado con ❤️ por el equipo de Cuaderno Pedagógico</p>
  <p>
    <a href="mailto:dev@cuaderno-pedagogico.com">📧 Contacto</a> •
    <a href="https://github.com/tu-usuario/cuaderno-pedagogico-backend/issues">🐛 Issues</a> •
    <a href="https://github.com/tu-usuario/cuaderno-pedagogico-backend/wiki">📖 Wiki</a>
  </p>
</div>