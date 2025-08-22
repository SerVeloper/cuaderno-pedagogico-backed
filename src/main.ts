import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const API_PREFIX = process.env.API_PREFIX || 'api';
  const API_VERSION = process.env.API_VERSION || '1';
  const APP_PORT = parseInt(process.env.APP_PORT ?? '3000', 10);
  const APP_NAME = process.env.APP_NAME || 'Cuaderno Pedagógico';
  const APP_DESCRIPTION = process.env.APP_DESCRIPTION || 'Sistema de gestión pedagógica';
  const SWAGGER_PATH = process.env.SWAGGER_PATH || 'api/docs';
  const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:4200';

  // CONFIGURACIÓN DEL GLOBAL PREFIX
  app.setGlobalPrefix(API_PREFIX, {
    exclude: ['/health', '/', '/api/docs'] 
  });

  // VERSIONADO DE API
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: API_VERSION,
    prefix: 'v',
  });

  // Validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  // CONFIGURACIÓN DE SWAGGER
  const config = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(`
      ${APP_DESCRIPTION}
      
      ## Funcionalidades Principales
      - 🔐 **Autenticación y Autorización**: Sistema RBAC completo
      - 👥 **Gestión de Usuarios**: Roles, permisos y departamentos
      - 📚 **Gestión Académica**: Materias, niveles y períodos
      - 🏢 **Gestión Organizacional**: Departamentos y provincias
      - 📊 **Evaluaciones**: Sistema de calificaciones formativas y sumativas
      - 📧 **Comunicaciones**: Sistema de emails integrado
      - 📝 **Auditoría**: Registro completo de cambios
      
      ## Versionado
      Todas las APIs están versionadas. Versión actual: v${API_VERSION}
      
      ## Autenticación
      Utiliza Bearer Token JWT para autenticación.
    `)
    .setVersion(process.env.SWAGGER_VERSION || '1.0.0')
    .setContact(
      'Equipo de Desarrollo',
      'https://NextSoft.com',
      'dev@NextSoft.com'
    )
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    
    //  TAGS ORGANIZADOS
    .addTag('🔐 auth', 'Autenticación y autorización de usuarios')
    .addTag('👥 users', 'Gestión de usuarios del sistema')
    .addTag('🛡️ roles', 'Gestión de roles y permisos')
    .addTag('🔑 permissions', 'Gestión de permisos específicos')
    .addTag('🏢 departments', 'Gestión de departamentos organizacionales')
    .addTag('🌍 provinces', 'Gestión de provincias y ubicaciones')
    .addTag('📚 subjects', 'Gestión de materias académicas')
    .addTag('📅 periods', 'Gestión de períodos académicos')
    .addTag('📊 dimensions', 'Dimensiones de evaluación')
    .addTag('📧 emails', 'Sistema de comunicaciones')
    .addTag('📝 audit-logs', 'Registro de auditoría del sistema')
    .addTag('📋 terms-conditions', 'Términos y condiciones legales')
    
    // SEGURIDAD
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingresa tu JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    
    // SERVIDORES
    .addServer(`http://localhost:${APP_PORT}`, 'Servidor de Desarrollo')
    .addServer('https://api-production.NextSoft.com', 'Servidor de Producción')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });

  SwaggerModule.setup(SWAGGER_PATH, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: 'none',
      filter: true,
      showRequestHeaders: true,
      tryItOutEnabled: true,
    },
    customSiteTitle: APP_NAME,
    customfavIcon: '/favicon.ico',
    customCss: `
      .swagger-ui .topbar { display: none }
      .swagger-ui .info .title { color: #1976d2; }
    `,
  });

  // CORS CONFIGURADO
  app.enableCors({
    origin: [FRONTEND_URL, 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // HEALTH CHECK
  app.getHttpAdapter().get('/health', (req: Request, res: Response) => {
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.SWAGGER_VERSION || '1.0.0',
    });
  });


  await app.listen(APP_PORT);

  console.log(`${APP_NAME} está ejecutándose en: http://localhost:${APP_PORT}`);
  console.log(`Documentación Swagger: http://localhost:${APP_PORT}/${SWAGGER_PATH}`);
  console.log(`Health Check: http://localhost:${APP_PORT}/health`);
  console.log(`API Base URL: http://localhost:${APP_PORT}/${API_PREFIX}/v${API_VERSION}`);
}
bootstrap().catch(err => {
  console.error('❌ Error al iniciar la aplicación:', err);
  process.exit(1);
});
