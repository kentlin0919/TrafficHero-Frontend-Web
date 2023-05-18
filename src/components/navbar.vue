<script >


</script>

<template>
    <div class="color">
        <nav class="navbar bg-primary navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid" data-bs-theme="blue">
    <img src="../assets/p1.png" alt="Italian Trulli" class="navbar-brand">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li>
          <RouterLink class="nav-link active" aria-current="page" to="/"> 首頁</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link active" aria-current="page" to="/about"> 統計圖表</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link active" aria-current="page" to="/new"> 下載專區</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link active" aria-current="page" to="/login"> 登錄</RouterLink>
        </li>
        
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
    </div>
</template>



<style >
img {
  height: 40px;
  width: 50px;
}
.color {
  background-color: cornflowerblue;
}
</style>