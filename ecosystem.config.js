module.exports = {
    apps: [
      {
        name: 'web-nuxt3',
        script: './.output/server/index.mjs',
        watch: false,
        error_file: './logs/azur-lane-qq.error.log',
        out_file: './logs/azur-lane-qq.out.log',
      },
    ],
  };
  