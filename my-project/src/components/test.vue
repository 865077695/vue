<template>
  <div>
    test.vue
    <my-test></my-test>
    <my-test2></my-test2>
  </div>
</template>

<script>
  //  const myTest = resolve => {
  //    // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  //    // （代码分块）
  //    require.ensure(['../components/cell/my-test'], () => {
  //      resolve(require('../components/cell/my-test'))
  //    }, 'my chunk')
  //  }

  export default {
    name: 'test',
    components: {'my-test': view('cell/my-test'), 'my-test2': view('cell/my-test2')}
  }

  function view (name) {
    return function (resolve) {
      require(['../components/' + name], resolve)
    }
  };
</script>
