# Biome config

参考：
https://github.com/NedcloarBR/biome-config/blob/master/package.json

If you're in a NextJS Project
You will need to disable eslint checking since NextJS doesn't support Biome natively yet

# next.config.js
+  eslint: {
+    ignoreDuringBuilds: true,
+  }