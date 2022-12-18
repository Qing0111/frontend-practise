<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="row container-fluid">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/about/a" href="#" class="list-group-item list-group-item-action" aria-current="true">
          元件A
        </router-link>
        <router-link to="/about/b" href="#" class="list-group-item list-group-item-action" aria-current="true">
          元件B
        </router-link>
        <router-link to="/about/namedView/a2b" href="#" class="list-group-item list-group-item-action" aria-current="true">
          命名事由A
        </router-link>
        <router-link to="/about/DynamicRouter/:b5ddd507724dc7e2" href="#" class="list-group-item list-group-item-action" aria-current="true">
          動態路由($route)
        </router-link>
        <router-link to="/about/DynamicRouterProps/:b5ddd507724dc7e2" href="#" class="list-group-item list-group-item-action" aria-current="true">
          動態路由($props)
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br>
</template>
