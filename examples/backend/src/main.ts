import { join } from "node:path";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

async function bootstrap() {
	const logger = new Logger("API-Bootstrap");

	try {
		const app = await NestFactory.create<NestExpressApplication>(AppModule);
		const configService = app.get(ConfigService);
		console.log(configService.get("API_PORT"));

		// 提供静态文件服务（图标等）
		app.useStaticAssets(join(__dirname, "..", "public"));

		// 压缩中间件

		// Cookie解析器

		// CORS配置
		app.enableCors({
			origin: [
				"http://localhost:3000",
				"http://localhost:3001",
				"http://localhost:3002",
				"http://localhost:3003",
			],
			credentials: true,
			methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
			allowedHeaders: ["Content-Type", "Authorization", "x-request-id"],
		});

		// 全局异常过滤器（包含Zod错误处理）

		// 📊 全局应用性能监控中间件

		// 💾 启动内存监控

		// API前缀设置
		app.setGlobalPrefix("api/v1");

		const port = configService.get<number>("API_PORT") || 4001;

		await app.listen(port);

		logger.log(`🚀 API服务器运行在端口${port}`);
		logger.log(`📝 API文档：http://localhost:${port}/api-docs`);
		logger.log(`🔗 API端点：http://localhost:${port}/api/v1`);
		logger.log(
			`📊 性能监控：http://localhost:${port}/api/v1/admin/performance/metrics`,
		);
		logger.log(`🔧 环境：${process.env.NODE_ENV || "development"}`);
		console.log(process.env.STRIPE_SECRET_KEY);
	} catch (error) {
		logger.error("API应用程序启动失败:", error);
		process.exit(1);
	}
}

bootstrap();
