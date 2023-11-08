import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import federation from '@originjs/vite-plugin-federation'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
        template: {transformAssetUrls}
    }),
    viteCommonjs(),
    vuetify(),
    federation({
      name: "livestream",
      filename: "livestreamApp.js",
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: ["vue", "axios", "material-design-icons-iconfont/dist/material-design-icons.css", "socket.io-client", "vue-webrtc-v1", "vuetify", "@mdi/font/css/materialdesignicons.css"],
    })
  ],
  define: {
    'process.env': {},
    global: 'globalThis'
  },
  resolve: {
    alias: {
        // This Rollup aliases are extracted from @esbuild-plugins/node-modules-polyfill,
        // see https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
        // process and buffer are excluded because already managed
        // by node-globals-polyfill
        util: 'rollup-plugin-node-polyfills/polyfills/util',
        sys: 'util',
        events: 'rollup-plugin-node-polyfills/polyfills/events',
        stream: 'rollup-plugin-node-polyfills/polyfills/stream',
        path: 'rollup-plugin-node-polyfills/polyfills/path',
        querystring: 'rollup-plugin-node-polyfills/polyfills/qs',
        punycode: 'rollup-plugin-node-polyfills/polyfills/punycode',
        url: 'rollup-plugin-node-polyfills/polyfills/url',
        http: 'rollup-plugin-node-polyfills/polyfills/http',
        https: 'rollup-plugin-node-polyfills/polyfills/http',
        os: 'rollup-plugin-node-polyfills/polyfills/os',
        assert: 'rollup-plugin-node-polyfills/polyfills/assert',
        constants: 'rollup-plugin-node-polyfills/polyfills/constants',
        _stream_duplex:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
        _stream_passthrough:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
        _stream_readable:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
        _stream_writable:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
        _stream_transform:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
        timers: 'rollup-plugin-node-polyfills/polyfills/timers',
        console: 'rollup-plugin-node-polyfills/polyfills/console',
        vm: 'rollup-plugin-node-polyfills/polyfills/vm',
        zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
        tty: 'rollup-plugin-node-polyfills/polyfills/tty',
        domain: 'rollup-plugin-node-polyfills/polyfills/domain',
        buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
        process: 'rollup-plugin-node-polyfills/polyfills/process-es6'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                process: true,
                buffer: true
            }),
            NodeModulesPolyfillPlugin(),
            esbuildCommonjs(['simple-signal-client']) 
        ]
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
        plugins: [
            // Enable rollup polyfills plugin
            // used during production bundling
            rollupNodePolyFill()
        ]
    },
    external: ['vue', 'vuetify'],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: 'Vue',
        vuetify: 'Vuetify',
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
