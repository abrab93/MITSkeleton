module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['src/*.ts'],
        options: {
          module: 'commonjs',
          target: 'es5',
          sourceMap: true
        }
      }
    },
    watch: {
      files: 'src/*.ts',
      tasks: ['typescript']
    }
  });
  //grunt.registerTask('default', ['typescript']);
  grunt.registerTask('default', ['watch']);
}