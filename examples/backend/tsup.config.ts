import { defineConfig } from "tsup";

export const config = defineConfig({
	entry: ["src/main.ts"],
	format: ["cjs"],
	clean: true,
	sourcemap: true
});
