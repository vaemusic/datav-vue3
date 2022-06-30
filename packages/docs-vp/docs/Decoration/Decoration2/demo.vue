<template>
  <div w50rem h18rem flex justify-center items-center bg-dark>
    <dv-decoration2 :dur="2" style="width:200px;height:5px;" />
  </div>
  <div text-2xl pt10>
    dv-decoration2(reverse)
  </div>
  <div small-bg>
    <dv-decoration2 :reverse="true" style="width:5px;height:150px;" />
  </div>
</template>
